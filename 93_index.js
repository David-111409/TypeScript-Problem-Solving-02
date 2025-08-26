let message = [];
document.addEventListener("keydown", (e) => {
    if (e.key === "Meta") {
        message.push("command");
    }
    if (e.key === "Alt") {
        message.push("option");
    }
    if (e.key === "Shift") {
        message.push("shift");
    }
    if (message.length === 3) {
        console.log("You Pressed", message.join(" + "));
        message = [];
    }
});
