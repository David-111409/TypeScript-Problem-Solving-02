const sources = [
    "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    "https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?cs=srgb&dl=pexels-mccutcheon-1209843.jpg&fm=jpg",
    "https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?cs=srgb&dl=pexels-mccutcheon-1209843.jpg&fm=jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s",
];

const image = document.getElementById("image");

function changeImage(ele, imgs) {
    setInterval(() => {
        let l = imgs.length;
        let index = Math.floor(Math.random() * l);
        // console.log(index);
        ele.src = sources[index];
    }, 1000);
}

changeImage(image, sources);
