
// let x = (y = z = 5);
// console.log(x, y, z);
const myData = {
    user: "Elzero",
    age: 41,
    country: "Egypt",
};

// Your Code Here

let clone = {...myData};
// let clone = Object.assign({}, myData);
// let clone = {};
// for (let [key, value] of Object.entries(myData)){
//     clone[key] = value;
// }

// let clone = structuredClone(myData);
// let clone = JSON.parse(JSON.stringify(myData));

console.log(clone); // {user: 'Elzero', age: 41, country: 'Egypt'}
