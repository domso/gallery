#include "web_server/web_server.h"                                                                                                                                                                                                                            
#include "modules/file_loader.h"

#include "web_server/config.h"

#include "parser.h"
#include "audio/module.h"
#include "image/module.h"

typedef web_server::module::definition<
    web_server::modules::file_loader,
    web_server::module::options<
        web_server::module::path<"/">
    >
> file_loader;

typedef web_server::module::definition<
    audio::module,
    web_server::module::options<
        web_server::module::path<"/audio">
    >
> audio_loader;

typedef web_server::module::definition<
    image::module,
    web_server::module::options<
        web_server::module::path<"/image">
    >
> image_loader;


int main(int argc, char **argv) {    
    web_server::web_server<
        web_server::configuration::options<
            web_server::configuration::port<6580>
        >,
        file_loader,
        audio_loader,
        image_loader
    > server;
    
    if (!server.get_module<audio_loader>().sloader.load_file("../media.json")) {
        std::cout << "Could not load media" << std::endl;
    }
    if (!server.get_module<image_loader>().sloader.load_file("../media2.json")) {
        std::cout << "Could not load media" << std::endl;
    }

    if (server.init()) {    
        server.run();
    }   
    
    return 0;
}

