let myMoney = 1234567891234;
let strRevMoney = myMoney.toString().split("").reverse().join("");
console.log(myMoney);
console.log((`${strRevMoney}`.match(/\d{1,3}/g).join(",").split("").reverse().join("")));
// Needed Output
// 5,301,503,206
console.log(myMoney.toLocaleString("en-US"))
