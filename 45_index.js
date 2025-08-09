let text =
        "Hello from Elzero Web School This is the type effect writer with js.",
    i = 0,
    myButton = document.getElementById("button");

myButton.onclick = () => {
    let writer = setInterval(() => {
        document.getElementById("type").textContent += text[i];
        i++;
        if (i === text.length) {
            clearInterval(writer);
            i = 0;
        }
    }, 100);
};
