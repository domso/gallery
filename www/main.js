async function get_from_url(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
}

function command_to_url(base, type, command) {
    let url = base + type + "/?query" + "=";
    command.split(" ").forEach((s, i) => {
        if (i > 0) {
            url += ",";
        }
        url += s;
    });

    return url;
}

async function remote_search(type, command) {
    const url = command_to_url("/", type, command);
    return get_from_url(url).then((y) => {
        return JSON.parse(y);
    }).catch(() => {
    });
}

function filter_empty_property(obj, property) {
    if (obj[property] == "") {
        delete obj[property];
    }
}
init_page({
    "a": {
        "icon": "🏗️",
        "box_id" : "tbd_box_0",
        "command" : (cmd) => {
            return new Promise(resolve => setTimeout(resolve, 5000));
        }
    },
    "b": {
        "icon": "🏗️",
        "box_id" : "tbd_box_1",
        "command" : (cmd) => {
            return new Promise(resolve => setTimeout(resolve, 5000));
        }
    },
    "c": {
        "icon": "🎶",
        "box_id": "audio",
        "command" : async (cmd) => {
            let h = await remote_search("audio", cmd);
            audio.play(
                h.result.map((track) => {
                    let result = track;
                    
                    result.icon = result.cover;
                    result.src = result.path;

                    if (result.title == "") {
                        result.title = result.path;
                    }

                    filter_empty_property(result, "artist");
                    filter_empty_property(result, "album");
                    filter_empty_property(result, "year");
                    filter_empty_property(result, "track");
                    filter_empty_property(result, "title");
                    filter_empty_property(result, "duration");

                    return result;
                }).sort((a, b) => {
                  // Handle missing attributes

                 if (a.album === undefined) {
                     return 1;
                 }
                 if (b.album === undefined) {
                     return -1;
                 }
                 if (a.artist === undefined) {
                     return 1;
                 }
                 if (b.artist === undefined) {
                     return -1;
                 }
                 if (a.year === undefined) {
                     return 1;
                 }
                 if (b.year === undefined) {
                     return -1;
                 }

                  // Group by year
                  if (a.year !== b.year) {
                    return a.year.localeCompare(b.year);
                  }
                  // Group by album
                  if (a.album !== b.album) {
                    return a.album.localeCompare(b.album);
                  }
                  // Group by album
                  if (a.artist !== b.artist) {
                    return a.artist.localeCompare(b.artist);
                  }
                  // Sort by track if albums are the same
                  return a.track - b.track;
                })
            );
        }
    },
    "d": {
        "icon": "📷",
        "box_id": "gallery",
        "command" : async (cmd) => {
            let h = await remote_search("image", cmd);
            gallery.add_images_to_gallery(
                h.result.map((image) => {
                    return image;
                })
            );
        }
    },
});

const gallery = init_gallery();
const audio = init_audio();
