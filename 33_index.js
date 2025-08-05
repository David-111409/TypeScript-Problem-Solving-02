const listElement = document.getElementById("list");
for (let i = 0; i < 20; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(`${i+1}`);
    li.appendChild(text);
    listElement.appendChild(li);
}
// console.log(listElement);
