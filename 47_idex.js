function checkEquals(ar1, ar2){
    return JSON.stringify(ar1) === JSON.stringify(ar2);
}

console.log(checkEquals([1, 2], [1, 3]), false)
console.log(checkEquals([1, 2], [1, 2]), true)
console.log(checkEquals([4, 5, 6], [4, 5, 6]), true)
console.log(checkEquals([4, 7, 6], [4, 5, 6]), false)
