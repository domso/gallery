#pragma once

#include <string>

namespace image {

struct file_info {
    std::string image;
    std::string thumbnail;

    std::string to_json() const {
        std::string result;

        result += "{\n";
        result += "\"image\": \"" + image + "\",\n";
        result += "\"thumbnail\": \"" + thumbnail + "\"\n";
        result += "}";

        return result;
    }
};

}
