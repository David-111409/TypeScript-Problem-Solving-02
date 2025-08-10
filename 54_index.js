function format(t) {
    return t < 10 ? "0" + t : t;
}

function time() {
    let time = new Date();
    let hour = time.getHours();
    let mins = time.getMinutes();
    let sec = time.getSeconds();
    let zone = "AM";
    if (hour === 12) {
        hour = 12;
        zone = "PM";
    }

    if (hour > 12) {
        hour = hour % 12;
        zone = "PM";
    }

    document.getElementById("clock").textContent = `${format(hour)} : ${format(
        mins
    )} : ${format(sec)} ${zone}`;
}
time();
setInterval(time, 1000);
