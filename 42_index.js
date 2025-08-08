const area = document.getElementById("area");
const show = document.querySelector(".num");
let maxLetters = area.getAttribute("maxlength");
show.textContent = localStorage.getItem("num") || maxLetters;
area.value = localStorage.getItem("words");
area.addEventListener("input", () => {
    show.textContent = maxLetters - area.value.length;
    if (show.textContent === "0") {
        show.classList.add("red");
        show.textContent = "Stop";
    } else {
        show.classList.remove("red");
    }
    localStorage.setItem("num", maxLetters - area.value.length);
    localStorage.setItem("words", area.value);
});
