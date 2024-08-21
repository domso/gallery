function init_page(pages) {
    let current_page = Object.keys(pages)[0]
    let background_wrapper = document.getElementById("background_wrapper");

    let lowerbar = document.getElementById("lowerbar");

    lowerbar.addEventListener("keyup", (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            let timer = document.getElementById(current_page + "_timer");
            timer.classList.remove("timer_disable");
            pages[current_page].command(lowerbar.value).then(() => {
                timer.classList.add("timer_disable");
            });
        }
    });

    let sidebar = document.getElementById("sidebar");

    function create_sidebar_button(key, page) {
        let item = document.createElement("div");
        item.classList.add("sidebar_item");
        sidebar.append(item);
        item.onclick = () => {
            document.getElementById(key).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
            lowerbar.value = "";
            current_page = key;
        }

        let icon = document.createElement("div");
        icon.classList.add("sidebar_item_icon");
        icon.innerHTML = page.icon;
        item.append(icon);
    }

    function create_page_content(key, page) {
        let div_wrapper = document.createElement("div");
        div_wrapper.id = key;
        div_wrapper.classList.add("full_page");
        background_wrapper.append(div_wrapper);

        let div_content = document.createElement("div");
        div_content.id = page.box_id;
        div_content.classList.add("page_box");
        div_content.classList.add("sci-fi-box");
        div_wrapper.append(div_content);

        let div_timer = document.createElement("div");
        div_timer.id = key + "_timer";
        div_timer.classList.add("timer");
        div_timer.classList.add("timer_disable");
        div_content.append(div_timer);
    }

    Object.keys(pages).forEach((key) => {
        create_sidebar_button(key, pages[key]);
        create_page_content(key, pages[key]);
    });
}
