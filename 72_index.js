function neighboring(letters) {
    // let ar = letters.split("").map((letter) => letter.charCodeAt(0));
    // return ar.slice(0, -1).map((el, ind) => Math.abs(el - ar[ind + 1])).every(el => el === 1);
    let l = letters.length;
  
    for (let i = 1; i < l; i++) {
        let c1 = letters[i].charCodeAt(0);
        let c2 = letters[i - 1].charCodeAt(0);
        let result = Math.abs(c1 - c2);
        if (result !== 1) return false;
    }
  
    return true;
}

console.log(neighboring("abcdedcba"));
console.log(neighboring("abcdedcba"), true);
console.log(neighboring("aba"), true);
console.log(neighboring("efghihfe"), false);
console.log(neighboring("xyzyx"), true);
console.log(neighboring("mnopqrstsrqponm"), true);
console.log(neighboring("zyz"), true);
console.log(neighboring("aeiou"), false);
console.log(neighboring("cdefg"), true);
console.log(neighboring("qrstuv"), true);
console.log(neighboring("aaaaa"), false);
