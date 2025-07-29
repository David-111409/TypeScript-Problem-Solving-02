function wordedMath(exp) {
    let wordNum = ["Zero", "One", "Two"];
    let ar = exp.split(" ");
    let wordToNum = { zero: 0, one: 1, two: 2 };

    let [n1, op, n2] = ar;
    n1 = wordToNum[n1.toLowerCase()];
    n2 = wordToNum[n2.toLowerCase()];

    if (op.toLowerCase() === "plus") {
        return wordNum[n1 + n2];
    } else if (op.toLowerCase() === "minus") {
        return wordNum[n1 - n2];
    }
}

console.log(wordedMath("One plus one"));
console.log(wordedMath("Two minus Two"));
console.log(wordedMath("zero plus one"));
