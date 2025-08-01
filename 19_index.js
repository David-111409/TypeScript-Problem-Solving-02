let theName = "Elzero";
let l = theName.length;
let first = theName[0];
let last = theName.at(-1);

console.log(first + last);

console.log(theName.slice(1, -1));

if (l % 2 === 0) {
  console.log(theName.slice(l / 2 - 1, l / 2 + 1));
} else {
  console.log(theName[parseInt(l / 2)]);
}
// Line 1 => Eo
// Line 2 => lzer
// Line 3 => ze
