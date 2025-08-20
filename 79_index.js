// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) total += arguments[i];

//     console.log(total);
// }

// sum(1, 2, 3, 4, 5);

let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10, 100, 100];

// let newAr = [...new Set(myArr)];

// let ar = myArr.filter((el, index) => index === myArr.indexOf(el));
// let ar = myArr.reduce((acc, item) => {
//     if (!acc.includes(item)) {
//         acc.push(item);
//     }
//     return acc;
// }, []);
// let ar = [];
// for (let el of myArr) if (!ar.includes(el)) ar.push(el);

// console.log(ar); // [1, 2, 3, 4, 5]
let obj = {};
let ar = [];
for (let el of myArr) {
    if (!obj[el]) ar.push(el);
    obj[el] = true;
}
console.log(ar);
// Output Needed
// [10, 20, 30, 50]
