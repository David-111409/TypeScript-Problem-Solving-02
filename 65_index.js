function redirect(url) {
    const regex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-./?%&=]*)?$/;
    if (regex.test(url)) {
        window.location = url;
    }
}

document.getElementById("redirect").addEventListener("click", () => {
    redirect("http://www.facebook.com");
});
