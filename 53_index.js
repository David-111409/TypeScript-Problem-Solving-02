const inputTitle = document.getElementById("title");
const inputArea = document.getElementById("area");
const showTitle = document.getElementById("title-show");
const showArea = document.getElementById("describe");

function updateText(input, output) {
    output.textContent = input.value;
}

inputTitle.onkeyup = () => updateText(inputTitle, showTitle);

inputArea.onkeyup = () => updateText(inputArea, showArea);
