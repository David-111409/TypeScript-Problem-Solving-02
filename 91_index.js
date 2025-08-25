
let myArray = [100, 200, 300, 400];

// Method 1
// let clonedArray = [...myArray];

// let clonedArray = Object.assign([], myArray);

// let clonedArray = myArray.slice();

// let clonedArray = Array.from(myArray);

// let clonedArray = myArray.map((el) => el);

// let clonedArray = [];
// for (let ele of myArray){
//     clonedArray.push(ele);
// }

// let clonedArray = [].concat(myArray);

// let clonedArray = structuredClone(myArray);

let clonedArray = [];

let l = myArray.length;
for (let i = 0; i < l; i++) clonedArray[i] = myArray[i];

console.log(clonedArray); // [100, 200, 300, 400]
