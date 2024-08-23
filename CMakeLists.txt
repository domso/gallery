cmake_minimum_required(VERSION 3.0)

project(gallery)

add_subdirectory(./external/)
add_subdirectory(../vhdl_parser/)

include_directories(./external/)

include_directories(./)

include_directories(../vhdl_parser/src)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FALGS} -g -std=c++20 -fconcepts -pthread -O3")

add_executable(
    gallery 
    ./src/main.cpp
    ./src/audio/module.cpp
    ./src/audio/loader.cpp
)
target_link_libraries(gallery web_server parser)
