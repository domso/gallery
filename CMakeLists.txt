cmake_minimum_required(VERSION 3.0)

project(gallery)

add_subdirectory(./external/simple_web_server)
add_subdirectory(./external/parsery)

include_directories(./external/simple_web_server)
include_directories(./external/parsery/src)

include_directories(./)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FALGS} -g -std=c++20 -fconcepts -pthread -O3")

add_executable(
    gallery 
    ./src/main.cpp
    ./src/audio/module.cpp
    ./src/audio/loader.cpp
    ./src/image/module.cpp
    ./src/image/loader.cpp
)
target_link_libraries(gallery web_server parsery)
