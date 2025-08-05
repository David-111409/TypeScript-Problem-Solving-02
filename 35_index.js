let nums = [10, 80, 85, 25, 30, 88, 15];
let goal = 100;

let dif = Math.abs(nums[0] - goal);
let el = nums[0];

for (let i = 1; i < nums.length; i++) {
    let difNew = Math.abs(nums[i] - goal);
    if (dif > difNew) {
        dif = difNew;
        el = nums[i];
    }
}
console.log(el);
// Your Code Here

// Closest Number Is 88
