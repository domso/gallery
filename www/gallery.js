function init_gallery() {
    const background_wrapper = document.getElementById("background_wrapper");
    const gallery = document.getElementById('gallery');

    const overlay = document.createElement('div');
    overlay.id = "overlay";
    background_wrapper.append(overlay);

    const overlay_content = document.createElement('div');
    overlay_content.id = "overlay_content";
    overlay.append(overlay_content);

    const overlay_close = document.createElement('div');
    overlay_close.id = "close-overlay";
    overlay_close.innerHTML = "❌";
    overlay_close.onclick = () => {
        gallery.classList.remove('overlay_active');
        overlay.classList.remove('active');
    };
    overlay.append(overlay_close);

    let drag_current_pos_x = 0;
    let drag_current_pos_y = 0;
    let drag_current_scale = 1;

    overlay_content.onmousedown = dragMouseDown;

    overlay_content.addEventListener('wheel', (e) => {
        e.preventDefault();

        const delta = e.deltaY < 0 ? 1.1 : 0.9;
        let old_scale = drag_current_scale;
        drag_current_scale = Math.min(Math.max(drag_current_scale * delta, 1), 10);
        let real_delta = drag_current_scale / old_scale;

        let offsetX = e.clientX - overlay_content.offsetLeft;
        let offsetY = e.clientY - overlay_content.offsetTop;

        overlay_content.style.transform = ` translate(0px, 0px) scale(${drag_current_scale}) `;
        overlay_content.style.top = (overlay_content.offsetTop - offsetY * (real_delta - 1)) + "px";
        overlay_content.style.left = (overlay_content.offsetLeft - offsetX * (real_delta - 1)) + "px";
    });

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        drag_current_pos_x = e.clientX;
        drag_current_pos_y = e.clientY;

        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        const delta_x = drag_current_pos_x - e.clientX;
        const delta_y = drag_current_pos_y - e.clientY;
        drag_current_pos_x = e.clientX;
        drag_current_pos_y = e.clientY;
        // set the element's new position:
        overlay_content.style.top = (overlay_content.offsetTop - delta_y) + "px";
        overlay_content.style.left = (overlay_content.offsetLeft - delta_x) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function reset_overlay() {
        drag_current_scale = 1;
        drag_current_pos_x = 0;
        drag_current_pos_y = 0;
        overlay_content.style.transform = ` translate(0px, 0px) scale(${drag_current_scale}) `;
        overlay_content.style.left = "";
        overlay_content.style.top = "";
    }
    function change_overlay_image(url) {
        overlay_content.style.background = "url(" + url + ")";
        overlay_content.style.backgroundSize = "contain";
        overlay_content.style.backgroundRepeat = "no-repeat";
        overlay_content.style.backgroundPosition = "center";
    }
    function enable_overlay() {
        gallery.classList.add('overlay_active');
        overlay.classList.add('active');
    }

    function add_image_to_gallery(img) {
        let thumbnail_box = document.createElement("div");
        thumbnail_box.classList.add("image_thumbnail_box");
        gallery.append(thumbnail_box);

        let thumbnail = document.createElement("img");
        thumbnail.classList.add("image_thumbnail");
        thumbnail.src = img.thumbnail;
        thumbnail.onclick = () => {
            reset_overlay();
            change_overlay_image(img.image);
            enable_overlay();
        }
        thumbnail_box.append(thumbnail);
    }

    return {
        "add_images_to_gallery": (imgs) => {
            imgs.forEach((img) => {
                add_image_to_gallery(img);
            });
        }
    }
}
