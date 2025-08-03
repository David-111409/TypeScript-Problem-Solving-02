let st = "Elzero";
console.log(st.at(-1));
console.log(st[st.length - 1]);
console.log(st.slice(-1));
console.log(st.slice(st.length - 1));
console.log(st.substring(st.length - 1));
console.log(st.charAt(st.length - 1));
let [last] = [...st].reverse();
let last2 = Array.from(st).pop();
console.log(last2);
// Needed Output
// "o"
// "o"
// "o"
// "o"
// "o"
// "o"
// "o"
