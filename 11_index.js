function subset(small, big) {
  
  let bigSt = new Set(big);
  let smallSt = new Set(small);

  for (let el of smallSt) {
    if (!bigSt.has(el)) return false;
  }

  return true;
}

console.log(subset([1, 2, 5, 10], [1, 2, 3, 4, 5]));
console.log(subset([1, 3], [1, 3, 3, 5]), true);
console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8]), true);
console.log(subset([1, 3], [1, 33]), false);
console.log(subset([1, 3, 10], [10, 8, 8, 8]), false);
console.log(subset([5, 9, 13], [13, 9, 5]), true);
console.log(subset([5, 9, 13], [13, 9, 5, 1, 1, 1]), true);
console.log(subset([5, 9, 13], [13, 5, 1, 1, 1]), false);
