function isOrthogonal(r1, r2) {
    let sum = 0;
    let l = r1.length;

    for (let i = 0; i < l; i++) sum += r1[i] * r2[i];

    return sum === 0;
}

console.log(isOrthogonal([7, 8], [7, -6]), false);
console.log(isOrthogonal([-13, -26], [-8, 4]), true);
console.log(isOrthogonal([1, 2], [2, -1]), true);
console.log(isOrthogonal([2, 4, 1], [2, 1, -8]), true);
console.log(isOrthogonal([1, 2, 0], [2, -1, 10]), true);
console.log(isOrthogonal([3, 8, 9], [16, 17, -18]), false);
