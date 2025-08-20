function getLetter(num) {
    return String.fromCharCode(96 + num); // 97 = 'a'
}

let str = "";
for (let i = 1; i < 27; i++) {
    // console.log(getLetter(i));
    str += getLetter(i);
}

console.log(str);


let letters = [...Array(26)].map((_, i) => String.fromCharCode(97 + i));
console.log(letters.join(""));
