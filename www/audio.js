function init_audio() {
    let current_active_track = -1;
    let content_box = document.getElementById("audio");

    let audio_player = document.createElement("audio");
    audio_player.setAttribute("controls", true);
    audio_player.id = "audioPlayer";
    audio_player.classList.add("audioPlayer");
    audio_player.classList.add("hide");
    content_box.append(audio_player);

    let audio_player_source = document.createElement("source");
    audio_player_source.id = "audioPlayerSrc";
    audio_player_source.type = "audio/mp3";
    audio_player.append(audio_player_source);

    let trackbox = document.createElement("div");
    trackbox.id = "trackbox";
    content_box.append(trackbox);

    function add_track_stat(track, parent_div, stat, css) {
        if (track.hasOwnProperty(stat)) {
            let container = document.createElement("a");
            container.innerHTML = track[stat];
            container.classList.add(css);
            parent_div.append(container);
            parent_div.append(document.createElement("br"));
        }
    }
    function add_track_to_trackbox(id, track) {
        let entry = document.createElement("div");
        entry.classList.add("entry_inactive");
        trackbox.append(entry);

        entry.id = "track_" + id;
        entry.onclick = () => {
            activate_track(id, track.src);
        };

        let icon = document.createElement("img");
        icon.classList.add("audioIcon");
        icon.src = track.icon;
        entry.append(icon);

        let stats = document.createElement("span");
        stats.classList.add("audioInfo");
        entry.append(stats);

        add_track_stat(track, stats, "title", "info_title");
        add_track_stat(track, stats, "album", "info_album");
        add_track_stat(track, stats, "artist", "info_artist");
        add_track_stat(track, stats, "year", "info_year");
        add_track_stat(track, stats, "duration", "info_duration");
    }

    function audio_complete() {
        if (current_active_track != -1) {
            let track = document.getElementById("track_" + current_active_track);
            track.classList.add("entry_inactive");
            track.classList.remove("entry_active");
        }
        audio_player.classList.add("hide");
        audio_player.pause();
    }

    function change_active_entry(id) {
        if (current_active_track != -1) {
            let track = document.getElementById("track_" + current_active_track);
            track.classList.add("entry_inactive");
            track.classList.remove("entry_active");
        }
        let track = document.getElementById("track_" + id);
        track.classList.remove("entry_inactive");
        track.classList.add("entry_active");
        current_active_track = id;
    }

    function change_audio_src(url) {
        audio_player.classList.remove("hide");
        audio_player_source.src=url;
        audio_player.load();
        audio_player.play();
    }

    function scroll_to_view(id) {
        let ref_x = document.getElementById("track_0").getBoundingClientRect().top;
        let x = document.getElementById("track_" + id).getBoundingClientRect().top;

        let delta = x - ref_x;

        trackbox.scrollTop = delta;
    }

    function activate_track(id, url) {
        change_active_entry(id);
        change_audio_src(url);
        content_box.scrollTop += 100; 
    }

    audio_player.onended = function() {
        let div = document.getElementById("track_" + (current_active_track + 1));
        if (div !== null) {
            div.onclick()
        } else {
            audio_complete();
        }
    };

    return {
        "play" : (tracks) => {
            current_active_track = -1;
            trackbox.innerHTML = "";
            let id = 0;
            tracks.forEach((track) => {
                add_track_to_trackbox(id, track);
                id++;
            });
            activate_track(0, tracks[0].src)
            scroll_to_view(0);
        }
    }
}
