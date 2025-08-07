const lis = document.querySelectorAll("li");
const h3 = document.querySelector("h3");
h3.style.background = localStorage.getItem("color");
lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        let color = e.target.getAttribute("data-color");
        localStorage.setItem("color", color);
        h3.style.background = color;
    });
});
