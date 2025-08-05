let last = 30;
let sum = 0;

if(last % 2 === 0) {
    last --;
}
else {
    last -= 2;
}

for (let i = last; i > 0; i = i - 4) {
    sum += i;
    console.log(i);
}

console.log("Second request:", sum);
// First Request Output Needed
// 29
// 25
// 21
// 17
// 13
// 9
// 5
// 1

// // Second Request Output Needed
// 120
