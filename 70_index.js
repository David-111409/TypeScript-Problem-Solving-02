// problem 1
function addUp(n) {
    return ((1 + n) * n) / 2;
}
console.log(addUp(4));

// problem 2
let n = prompt("Enter your number: ");
n = +n;
if (isNaN(n)) {
    console.log("It is not a number. Enter a valid number.");
} else {
    n % 2 === 0 ? console.log("Even Number") : console.log("Odd Number");
}
