// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]
// Needed Output
// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
const n = chars.filter(el => typeof el === 'number').length;
const letters = chars.filter(el => typeof el === "string");
console.log([...letters.slice(0, n), ...letters]);
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
