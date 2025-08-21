function sum(a, b) {
    if (!b) {
        return (b) => a + b;
        // return function (b) {
        //     return a + b;
        // };
    }
    return a + b;
}
("use strict");
console.log(sum(1)(2));
console.log(sum(1, 2));

console.log(isNaN("12"));
console.log(isNaN(12));
console.log(isNaN("he"));

console.log([] + {});
console.log({} + []);
console.log(true + true);
console.log(0.1 + 0.2 === 0.3);

let first = [] + {};
let sec = {} + [];
console.log(first, sec);

console.log(null == undefined);
console.log(null === undefined);
console.log([1, 2] + [3, 4]);
console.log("10" > "2");
console.log(10 > "2");

console.log([] == ![]);

function genArray(n) {
    let ar = [];
    
    for (let i = n; i > 0; i--) ar[n - i] = i;

    return ar;
}

console.log(genArray(10));
