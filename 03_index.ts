const ageDifference = (fath: number, son: number):number => {
    return Math.abs(fath - 2 * son);
};

console.log(ageDifference(36, 7));
console.log(ageDifference(55, 30));
console.log(ageDifference(36, 7), 22);
console.log(ageDifference(55, 30), 5);
console.log(ageDifference(42, 21), 0);
console.log(ageDifference(22, 1), 20);
console.log(ageDifference(29, 0), 29);
