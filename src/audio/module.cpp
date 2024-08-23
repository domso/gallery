#include "module.h"

namespace audio {

web_server::http::response module::get_callback(const web_server::http::request& request, userdata& local) {
    web_server::http::response result;
    result.code = 404;
    result.data = {'W', 'T', 'F'};

    for (const auto& [k, v] : request.parameter) {
        auto queries = split_by(v, ',');
        result.code = 200;
        result.data = query_result(k, queries);
    }

    return result;
}

std::vector<std::string> module::split_by(const std::string& text, const char sep) {
    std::vector<std::string> result;
    std::string current;
    current.reserve(text.length());

    for (const auto c : text) {
        if (c == sep) {
            if (current != "") {
                result.push_back(current);
                current = "";
            }
        } else {
            current += c;
        }
    }
    if (current != "") {
        result.push_back(current);
    }

    return result;
}

std::vector<char> module::query_result(const std::string& type, const std::vector<std::string>& queries) {
    if (type == "image") {
        return {'I', 'K'};
    }
    if (type == "music") {
        std::string text = "{\n\"result\": [\n";

        int n = 0;
        for (const auto& s : sloader.search(queries)) {
            if (n > 0) {
                text += ",\n";
            }
            text += s.to_json();
            n++;
        }
        text += "\n]\n}";

        return std::vector<char>(text.begin(), text.end());

    }
    return {'O', 'K'};
}

}
