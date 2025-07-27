function numberLenSort(ar) {
    return ar.sort((a, b) => String(a).length - String(b).length);
}

console.log(
    JSON.stringify(numberLenSort([1, 54, 1, 2, 463, 2])) ===
        JSON.stringify([1, 1, 2, 2, 54, 463])
);
console.log(
    JSON.stringify(numberLenSort([999, 421, 22, 990, 32])) ===
        JSON.stringify([22, 32, 999, 421, 990])
);
console.log(
    JSON.stringify(numberLenSort([9, 8, 7, 6, 5, 4, 31, 2, 1, 3])) ===
        JSON.stringify([9, 8, 7, 6, 5, 4, 2, 1, 3, 31])
);
console.log(
    JSON.stringify(
        numberLenSort([755, 1109, 9374, 94, 3683, 8695, 4135, 5177, 3216])
    ) === JSON.stringify([94, 755, 1109, 9374, 3683, 8695, 4135, 5177, 3216])
);
console.log(
    JSON.stringify(
        numberLenSort([8013, 1753, 7283, 6830, 73, 6278, 4931, 4556])
    ) === JSON.stringify([73, 8013, 1753, 7283, 6830, 6278, 4931, 4556])
);
console.log(
    JSON.stringify(
        numberLenSort([2762, 5905, 9433, 9809, 6511, 7141, 1050, 2610, 8123])
    ) === JSON.stringify([2762, 5905, 9433, 9809, 6511, 7141, 1050, 2610, 8123])
);
console.log(
    JSON.stringify(numberLenSort([9103, 5630, 7273, 2024])) ===
        JSON.stringify([9103, 5630, 7273, 2024])
);
console.log(
    JSON.stringify(
        numberLenSort([1342, 7567, 3504, 4378, 3070, 6592, 3645])
    ) === JSON.stringify([1342, 7567, 3504, 4378, 3070, 6592, 3645])
);
console.log(
    JSON.stringify(numberLenSort([237, 574, 3703, 2251, 4963, 2640])) ===
        JSON.stringify([237, 574, 3703, 2251, 4963, 2640])
);
console.log(
    JSON.stringify(numberLenSort([3633, 4402, 6745])) ===
        JSON.stringify([3633, 4402, 6745])
);
