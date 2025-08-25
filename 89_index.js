let arr = [1, 1, 1, 2, 3, 4, 3];
// let uniqueElements = [...new Set(arr)];

// let uniqueElements = arr.reduce((acc, cur) => {
//     if (!acc.includes(cur)) {
//         acc.push(cur);
//     }
//     return acc;
// }, []);

// let uniqueElements = [];
// for (let el of arr){
//     if (!uniqueElements.includes(el)) uniqueElements.push(el);
// }

let uniqueElements = arr.filter((el, ind) => arr.indexOf(el) === ind);

console.log(uniqueElements); // [1, 2, 3, 4]
