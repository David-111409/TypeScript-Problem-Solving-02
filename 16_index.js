function checkBiggestNum(word) {
  // Your Line Of Code Here
  return Math.max(...word.split("").map(Number));
}

console.log(checkBiggestNum("1500654")); // 6
console.log(checkBiggestNum("8509507")); // 9
console.log(checkBiggestNum("12345"));
