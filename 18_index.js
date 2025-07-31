function checkRange(n1, n2, n3, n4, n5) {
  // Your Code Here
  let [mn, mx] = [n4, n5].sort((a, b) => a - b);
  let ar = [n1, n2, n3];
  return ar.every((el) => el >= mn && el <= mx)
    ? "Yes All Numbers Are In Range"
    : "Not All Numbers Are In Range";
  // if (n1 >= mn && n1 <= mx && n2 >= mn && n2 <= mx && n3 >= mn && n3 <= mx) {
  //   return "Yes All Numbers Are In Range";
  // } else {
  //   return "Not All Numbers Are In Range";
  // }
}

console.log(checkRange(5, 10, 15, 50, 5)); // Yes All Numbers In Range
console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
console.log(checkRange(10, 15, 20, 18, 5)); // Not All Numbers Is In Range
console.log(checkRange(1, 2, 3, 1, 5));
