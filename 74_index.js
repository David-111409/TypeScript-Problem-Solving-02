let str1 = "AElzero";
let str2 = "ZAcademy";
// first solution
// console.log(`${str1.slice(1)} ${str2.slice(1)}`); // Elzero Academy
// second solution
console.log([str1, str2].map((word) => word.slice(1)).join(" "));
