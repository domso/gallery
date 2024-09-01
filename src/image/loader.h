#pragma once

#include <optional>
#include <vector>
#include <string>

#include "file_info.h"
#include "parser.h"

namespace image {

class loader {
public:
    loader();
    bool load_file(const std::string& path);
    std::vector<file_info> search(const std::vector<std::string>& keywords) const;
private:
    bool string_compare(const std::string& base, const std::string& search) const;
    std::optional<std::string> import_file(const std::string& path) const;

    void set_open_calls();
    void set_close_calls();
    void set_data_calls();
    void set_record_calls();

    void on_scope_open(const std::string_view& scope);
    void on_scope_close(const std::string_view& scope);
    void on_scope_content(const std::string_view& content);

    parsery::parser m_parser;
    std::vector<std::string> m_scope_stack;
    std::vector<std::string> m_record_stack;
    std::vector<file_info> m_result;

    std::vector<std::pair<std::vector<std::string>, std::function<void()>>> m_open_calls;
    std::vector<std::pair<std::vector<std::string>, std::function<void()>>> m_close_calls;
    std::vector<std::pair<std::vector<std::string>, std::function<void(const std::string_view&)>>> m_data_calls;
    std::vector<std::pair<std::vector<std::string>, std::function<void(const std::string_view&)>>> m_record_calls;

};

}
