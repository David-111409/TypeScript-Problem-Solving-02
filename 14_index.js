let str = "i lovE elzeRO weB schOOL";

let resSentence = str
  .split(" ")
  .map((el) => el[0].toUpperCase() + el.slice(1).toLowerCase())
  .join(" ");

console.log(resSentence);

// Output Needed
// "I Love Elzero Web School"
