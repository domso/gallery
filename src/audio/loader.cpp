#include "loader.h"

#include <fstream>
#include <algorithm>

#include <assert.h>

namespace audio {

loader::loader() {
    m_parser.add_rule("ws", "( |\t|\r|\n)*");

    m_parser.add_rule("text", "((\x1-\x21)|(\x23-\\\x5B)|(\\\x5D-\xFF)|(\x5C\x5C(\x1-\xFF)))*");
    m_parser.add_rule("number", "(((1-9)(0-9)*)|0)((.(0-9)(0-9)*(((e|E)(+|\\-|)(0-9)(0-9)*)|))|)");

    m_parser.add_rule("record_text", "[text]");
    m_parser.add_rule("record_number", "[number]");
    m_parser.add_rule("record_name", "[text]");

    m_parser.add_rule("record_field", "(\"[record_text]\")|[record_number]|[object]|[array]");
    m_parser.add_rule("record", "\"[record_name]\"[ws]:[ws][record_field]");

    m_parser.add_rule("record_list", "([record]([ws],[ws][record])*)|");

    m_parser.add_rule("array_item", "[object]|[text]|[number]");
    m_parser.add_rule("array", "\\[[ws](([array_item]([ws],[ws][array_item])*)|)[ws]\\]");
    m_parser.add_rule("object", "{[ws][record_list][ws]}");

    m_parser.add_top_rule("top", "[ws][object][ws]");

    set_open_calls();
    set_close_calls();
    set_data_calls();
    set_record_calls();
}

bool loader::load_file(const std::string& path) {
    m_scope_stack.clear();
    m_record_stack.clear();
    m_result.clear();

    if (auto file = import_file(path)) {
        m_parser.parse(*file, [&](const auto& scope) {
            on_scope_open(scope);
        }, [&](const auto& scope) {
            on_scope_close(scope);
        }, [&](const auto& content) {
            on_scope_content(content);
        });

        return true;
    }

    return false;
}

std::vector<file_info> loader::search(const std::vector<std::string>& keywords) const {
    std::vector<file_info> selected_songs;

    for (const auto& s : m_result) {
        bool foundAll = true;
        for (const auto& k : keywords) {
            bool found = false;
            found = found || string_compare(s.path, k);
            found = found || string_compare(s.title, k);
            found = found || string_compare(s.track, k);
            found = found || string_compare(s.album, k);
            found = found || string_compare(s.year, k);

            if (!found) {
                foundAll = false;
                break;
            }
        }

        if (foundAll) {
            selected_songs.push_back(s);
        }
    }

    return selected_songs;
}

bool loader::string_compare(const std::string& base, const std::string& search) const {
    auto char_equal = [](char a, char b) {
        return std::tolower(static_cast<unsigned char>(a)) ==
               std::tolower(static_cast<unsigned char>(b));
    };

    // Use std::search with custom comparison function
    auto it = std::search(
        base.begin(), base.end(),
        search.begin(), search.end(),
        char_equal
    );

    // If the iterator is not at the end, the substring was found
    return it != base.end();
}

std::optional<std::string> loader::import_file(const std::string& file) const {
    std::ifstream file_stream(file, std::ios::binary);

    if (file_stream.is_open()) {
        if (file_stream.good()) {
            try {
                return std::string(std::istreambuf_iterator<char>(file_stream), std::istreambuf_iterator<char>());
            } catch (const std::exception& e) {}
        }
    }

    return std::nullopt;
}

void loader::set_open_calls() {
    m_open_calls.push_back(
        {
            {"object", "record_list", "record", "record_field", "array", "array_item"},
            [&]() {
                m_result.resize(m_result.size() + 1);
            }
        }
    );
}

void loader::set_close_calls() {
    m_close_calls.push_back(
        {
            {"record"},
            [&]() {
                if (!m_record_stack.empty()) {
                    m_record_stack.pop_back();
                }
            }
        }
    );
}

void loader::set_data_calls() {
    m_data_calls = {
        {
            {"record_name", "text"},
            [&](const std::string_view& s) {
                m_record_stack.push_back(std::string(s));
            }
        },
        {
            {"record_text", "text"},
            [&](const std::string_view& s) {
                for (const auto& [sequence, func] : m_record_calls) {
                    if (
                        m_record_stack.size() >= sequence.size() &&
                        std::equal(m_record_stack.rbegin(), m_record_stack.rbegin() + sequence.size(), sequence.rbegin(), sequence.rend())
                    ) {
                        func(s);
                    }
                }
            }
        }
    };
}

void loader::set_record_calls() {
    m_record_calls = {
        {
            {"music", "info", "format", "tags", "title"},
            [&](const std::string_view& s) {
                assert(!m_result.empty());
                m_result.rbegin()->title = s;
            }
        },
        {
            {"music", "info", "format", "tags", "album"},
            [&](const std::string_view& s) {
                assert(!m_result.empty());
                m_result.rbegin()->album = s;
            }
        },
        {
            {"music", "info", "format", "tags", "artist"},
            [&](const std::string_view& s) {
                assert(!m_result.empty());
                m_result.rbegin()->artist = s;
            }
        },
        {
            {"music", "info", "format", "tags", "track"},
            [&](const std::string_view& s) {
                assert(!m_result.empty());
                m_result.rbegin()->track = s;
            }
        },
        {
            {"music", "info", "format", "tags", "date"},
            [&](const std::string_view& s) {
                assert(!m_result.empty());
                m_result.rbegin()->year = s;
            }
        },
        {
            {"music", "info", "format", "filename"},
            [&](const std::string_view& s) {
                assert(!m_result.empty());
                m_result.rbegin()->path = s;
            }
        },
        {
            {"music", "info", "format", "duration"},
            [&](const std::string_view& s) {
                assert(!m_result.empty());
                m_result.rbegin()->duration = s;
            }
        },
        {
            {"music", "cover"},
            [&](const std::string_view& s) {
                assert(!m_result.empty());
                m_result.rbegin()->cover = s;
            }
        }
    };
}

void loader::on_scope_open(const std::string_view& scope) {
    m_scope_stack.push_back(std::string(scope));

    for (const auto& [sequence, func] : m_open_calls) {
        if (
            m_scope_stack.size() >= sequence.size() &&
            std::equal(m_scope_stack.rbegin(), m_scope_stack.rbegin() + sequence.size(), sequence.rbegin(), sequence.rend())
        ) {
            func();
        }
    }
}

void loader::on_scope_close(const std::string_view& scope) {
    for (const auto& [sequence, func] : m_close_calls) {
        if (
            m_scope_stack.size() >= sequence.size() &&
            std::equal(m_scope_stack.rbegin(), m_scope_stack.rbegin() + sequence.size(), sequence.rbegin(), sequence.rend())
        ) {
            func();
        }
    }
    m_scope_stack.pop_back();
}

void loader::on_scope_content(const std::string_view& content) {
    for (const auto& [sequence, func] : m_data_calls) {
        if (
            m_scope_stack.size() >= sequence.size() &&
            std::equal(m_scope_stack.rbegin(), m_scope_stack.rbegin() + sequence.size(), sequence.rbegin(), sequence.rend())
        ) {
            func(content);
        }
    }
}

}
