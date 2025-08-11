const but = document.getElementById("btn");

but.addEventListener("click", () => {
    let color = "#";
    let nums = "0123456789ABCDEF";
    for (let i = 0; i < 6; i++){
        color += nums[Math.floor(Math.random() * 16)]
    }
    document.body.style.background = color;
    but.textContent = `Color: ${color}`;

});
