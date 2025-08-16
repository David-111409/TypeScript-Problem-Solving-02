const time = document.getElementById("time");

let totalSeconds = 61; // start countdown from 70 seconds

function showTime() {
    let mins = Math.floor(totalSeconds / 60);
    let secs = totalSeconds % 60;

    time.textContent = `${mins < 10 ? "0" + mins : mins}:${
        secs < 10 ? "0" + secs : secs
    }`;

    totalSeconds--; // decrease the actual total time

    if (totalSeconds < 0) {
        clearInterval(id);
        time.textContent = "Done";
    }
}

let id = setInterval(() => showTime(), 1000);
