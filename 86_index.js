let rangeEnd = 10;
let myRange = [];

console.log(
    [...Array(rangeEnd)].reduce((acc, cur, i) => {
     acc.push(i + 1);
     return acc;
    }, [])
);
// for (let i = 0; i < rangeEnd; i++) {
//     myRange[i] = i + 1;
// }
// Output Needed
console.log([...Array(rangeEnd)].map((_, ind) => ind + 1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
