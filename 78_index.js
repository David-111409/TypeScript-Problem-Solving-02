// function parent() {
//     let num = 20;
//     return function (n) {
//         return num + n;
//     };
// }
// let p = parent();
// console.log(p(2));
// console.dir(p);

const divs = document.querySelectorAll("div");

divs.forEach((el) => {
    el.addEventListener("click", () => {
        divs.forEach((el) => el.classList.remove("red"));
        el.classList.add("red");
    });
});
// console.log(divs);
