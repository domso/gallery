#pragma once

#include "web_server/web_server.h"                                                                                                                                                                                                                            
#include "loader.h"

namespace audio {

class module {
public:
    typedef int userdata;
    loader sloader;

    web_server::http::response get_callback(const web_server::http::request& request, userdata& local);
private:
    std::vector<std::string> split_by(const std::string& text, const char sep);
    std::vector<char> query_result(const std::string& type, const std::vector<std::string>& queries);
};

}
