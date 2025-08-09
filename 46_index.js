let input = document.getElementById("input");
let but = document.getElementById("btn");

but.addEventListener("click", () => {
    let typ = input.getAttribute("type");
    if (typ === "password") {
        input.setAttribute("type", "text");
        but.textContent = "Hide Password";
    } else {
        input.setAttribute("type", "password");
        but.textContent = "Show Password";
        
    }
});
