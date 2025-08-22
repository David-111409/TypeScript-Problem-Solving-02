const ar = [
    [1, 2],
    [3, 4],
    [5, 6],
];
// to flat the array with 2d element and then to sum its elements.
console.log(ar.reduce((ac, ele) => ac.concat(ele), []));
console.log(ar.reduce((ac, ele) => ac + ele.reduce((ac, el) => ac + el, 0), 0));

let arr = [1, 1, 1, 1, 10, 1, 2, 3, 2];

console.log(
    arr.reduce((acc, ele) => {
        if (ele === 1) return acc + 1;
        return acc;
    }, 0)
);

console.log(
    arr.reduce((obj, ele) => {
        if (!obj[ele]) obj[ele] = 0;
        obj[ele]++;
        return obj;
    }, {})
);
let ar = [1, 2, 3, 4, 5, 2, 3, 3, 4, 5];

// console.log(ar.indexOf(2));
// console.log(ar.lastIndexOf(2));

console.log(ar.findIndex((el) => el === 2));

console.log(ar.filter((el) => ar.indexOf(el) === ar.lastIndexOf(el)));
console.log(ar.filter((el, ind) => ind === ar.indexOf(el)));
