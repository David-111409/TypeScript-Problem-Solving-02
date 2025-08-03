function repeatWithRules(word) {
  // Your Code Here
  return word
    .split("")
    .map((letter, ind) => letter.repeat(ind + 1))
    .join("");
}

console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
console.log(repeatWithRules("Hello")); // Heelllllllooooo
