const circle = document.getElementById("circle");

document.addEventListener("mousemove", (event) => {
    circle.style.left = `${event.clientX - 40}px`;
    circle.style.top = `${event.clientY - 40}px`;
});
