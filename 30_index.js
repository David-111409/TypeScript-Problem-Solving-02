function formatName(theName) {
  // Your Code Here
  let words = theName.split(" ");
  let [first, ...rest] = words.map((word) => word.at(0));
  return `${first.toUpperCase()}.${rest.join(".").toLowerCase()}`;
}

console.log(formatName("Osama Elzero")); // O.e
console.log(formatName("Elzero Web School")); // E.w.s
