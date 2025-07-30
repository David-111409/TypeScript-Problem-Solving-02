const button = document.getElementById("btn");
const ourP = document.querySelector("p");
const ourDiv = document.querySelector(".res");

// ourP.classList.remove("click");

button.onclick = function(){
    if (ourP.classList.contains(button.textContent)){
        ourDiv.textContent = "The p has the text content of the button as a class";
    }
    else {
        ourDiv.textContent = "The p does not have the text content of the button as a class";

    }
}
