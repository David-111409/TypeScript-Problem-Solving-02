function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log(lcm(3, 5));
console.log(lcm(4, 12));
console.log(lcm(6, 10), 30)
console.log(lcm(30, 60), 60)
console.log(lcm(10000, 333), 3330000)
console.log(lcm(75, 135), 675)
console.log(lcm(102, 2), 102)
