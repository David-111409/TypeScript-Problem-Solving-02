function getLastDigit(num) {
  return num % 10;
}

console.log(getLastDigit(12345));
console.log(getLastDigit(1)); // 1
console.log(getLastDigit(18)); // 8
console.log(getLastDigit(305)); // 5
console.log(getLastDigit(1569)); // 9
console.log(typeof getLastDigit(1569)); // Number
