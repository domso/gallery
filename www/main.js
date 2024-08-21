
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
        "command" : (cmd) => {
            audio.play([
                {title: "blub", album: "asd", icon: "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlf", src: "https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.02.mp3"},
                {title: "blub", album: "asd", icon: "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlf", src: "https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.02.mp3"},
                {title: "blub", album: "asd", icon: "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlf", src: "https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.02.mp3"},
                {title: "blub", album: "asd", icon: "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlf", src: "https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.02.mp3"},
                {title: "blub", album: "asd", icon: "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlf", src: "https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.02.mp3"},
                {title: "blub", album: "asd", icon: "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlf", src: "https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.02.mp3"},
                {title: "blub", album: "asd", icon: "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlf", src: "https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.02.mp3"},
                {title: "blub", album: "asd", icon: "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlf", src: "https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.02.mp3"},
                {title: "blub", album: "asd", icon: "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlf", src: "https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.02.mp3"},
                {title: "blub", album: "asd", icon: "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlf", src: "https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.02.mp3"},
                {title: "blub", album: "asd", icon: "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlf", src: "https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.02.mp3"},
                {title: "blub", album: "asd", icon: "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlf", src: "https://d38nvwmjovqyq6.cloudfront.net/va90web25003/companions/Foundations%20of%20Rock/13.02.mp3"},
            ]);
            return new Promise(resolve => setTimeout(resolve, 5000));
        }
    },
    "d": {
        "icon": "📷",
        "box_id": "gallery",
        "command" : (cmd) => {
            gallery.add_images_to_gallery([
                {"image": "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU", "thumbnail" : "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU"},
                {"image": "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx", "thumbnail" : "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx"},
                {"image": "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU", "thumbnail" : "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU"},
                {"image": "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU", "thumbnail" : "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU"},
                {"image": "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU", "thumbnail" : "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU"},
                {"image": "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx", "thumbnail" : "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx"},
                {"image": "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU", "thumbnail" : "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU"},
                {"image": "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx", "thumbnail" : "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx"},
                {"image": "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx", "thumbnail" : "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx"},
                {"image": "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx", "thumbnail" : "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx"},
                {"image": "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx", "thumbnail" : "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx"},
                {"image": "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx", "thumbnail" : "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx"},
                {"image": "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx", "thumbnail" : "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx"},
                {"image": "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx", "thumbnail" : "https://images.unsplash.com/photo-1722264985082-dc64fa39c927?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx"},
                {"image": "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU", "thumbnail" : "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU"},
                {"image": "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU", "thumbnail" : "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU"},
                {"image": "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU", "thumbnail" : "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU"},
                {"image": "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU", "thumbnail" : "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU"},
                {"image": "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU", "thumbnail" : "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU"},
                {"image": "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU", "thumbnail" : "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU"},
                {"image": "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU", "thumbnail" : "https://fastly.picsum.photos/id/319/536/354.jpg?hmac=ZzEILWavlsP9MWDCsCqQp3fxsbmTD48rzZWY5c57IPU"},
            ]);
            return new Promise(resolve => setTimeout(resolve, 5000));
        }
    },
});

const gallery = init_gallery();
const audio = init_audio();

async function get_from_url(url) {
    let promise = new Promise((resolve, reject) => {
        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (this.readyState == 4 && this.status == 200) {
                resolve(this.responseText);
            };
        }

        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    });
    return promise;
}

async function blub() {
    let x = await get_from_url("asd");
    console.log(x);
}

blub();
