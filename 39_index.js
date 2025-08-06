function generateNumber() {
    let n = Math.random();

    return `${Math.floor(n * 10)}`;
}

function changBackColor() {
    let hex = `#${generateNumber()}${generateNumber()}${generateNumber()}${generateNumber()}${generateNumber()}${generateNumber()}`
    console.log(hex);
    document.body.style.backgroundColor = hex;
}


document.querySelector("button").onclick = changBackColor;
