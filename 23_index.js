function customMerge(...ars){
  return ars.reduce((acc, val) => acc.concat(val.map(Number)), []);
}
// function customMerge(...bigAr){
//   let ar = [];
//   for (let r of bigAr){
//     ar = ar.concat(r.map(Number));
//   }
//   return ar;
// }
console.log(customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10], [1, 2, 3]));
// [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]
