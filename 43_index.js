const input = document.getElementById("our-input");
const place = input.getAttribute("placeholder");

input.addEventListener("focus", function () {
    this.setAttribute("placeholder", "");
});

input.addEventListener("blur", function () {
    this.setAttribute("placeholder", place);
});
