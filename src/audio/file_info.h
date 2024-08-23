#pragma once

#include <string>

namespace audio {

struct file_info {
    std::string path;

    std::string title;
    std::string album;
    std::string track;
    std::string artist;
    std::string year;

    std::string duration;
    std::string cover;

    std::string to_json() const {
        std::string result;

        result += "{\n";
        result += "\"path\": \"" + path + "\",\n";
        result += "\"title\": \"" + title + "\",\n";
        result += "\"album\": \"" + album + "\",\n";
        result += "\"track\": \"" + track + "\",\n";
        result += "\"artist\": \"" + artist + "\",\n";
        result += "\"year\": \"" + year + "\",\n";
        result += "\"duration\": \"" + duration + "\",\n";
        result += "\"cover\": \"" + cover + "\"\n";
        result += "}";

        return result;
    }
};

}
