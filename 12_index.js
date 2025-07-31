let fileName = "Elzero.php";
let [name, ex] = fileName.split(".");

console.log(name, ex);

function addEl(str) {
  if (str === "" || str.startsWith("El")) return str;
  else return `El${str}`;
}

console.log(addEl("")); // ""
console.log(addEl("Elzero")); // Elzero
console.log(addEl("zero")); // Elzero
console.log(addEl("Dawoud"));
// Elzero
// php

let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";
// let myString = "hello @@the word of humans and muslim @ and the word @ for the good of us..";
let [first, second] = myString.split("@");
console.log(`${first}@${second}`);
// Output Needed
// "Hello Elzero Web School @ We Love Programming"

console.log(
  myString.slice(0, myString.indexOf("@", myString.indexOf("@") + 1))
);

let nums = [10, -20, 300, 50, 100, -50];
// first method
console.log(Math.max(...nums));
let mx = nums[0];
let l = nums.length;
// second method

for (let i = 1; i < l; i++) {
  if (mx < nums[i]) {
    mx = nums[i];
  }
}
console.log(mx);
// third method
console.log(nums.reduce((a, b) => (a > b ? a : b)));

// fourth method
let r = nums.sort((a, b) => b - a);

console.log(r[0]);

// fifth method
let mx2 = nums.at(0);
nums.forEach((el) => {
  if (el > mx2) mx2 = el;
});
console.log(mx2);
