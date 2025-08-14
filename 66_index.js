const input = document.getElementById("input");

input.onfocus = function () {
    "use strict";
    this.setAttribute("placeholder", "");
};


input.onblur = function(){
    "use strict";
    this.setAttribute("placeholder", "Enter your name")
}
