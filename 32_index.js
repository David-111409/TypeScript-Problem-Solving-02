function customCalc(...ar) {
    let nums = ar.map(Number).filter(Boolean);
    // let first = nums[0];
    // let last = nums[nums.length - 1];
    let [first] = nums;
    let [last] = nums.reverse();
    return nums.reduce((a, b) => a + b, 0) * first * last;
}

console.log(customCalc("10", 20, "A", "40", 15));
// 12750 <= (10 + 20 + 40 + 15) * 10 * 15

console.log(customCalc(5, "15", 10, 5, 10));
// 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

console.log(customCalc(30, 5, "C", 10));
// 13500 <= (30 + 5 + 10) * 30 * 10
