function clone(ar) {
    return [...ar, ar];
}

console.log(clone([1, 1]));
console.log(clone([1, 2, 3]));
console.log(clone(["x", "y"]));
console.log(clone([]));
