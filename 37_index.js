function swapEveryTwoChars(word) {
    return word
        .split("")
        .map((letter, ind) => {
            if (ind % 2 === 0) {
                // return letter;
                // return letter.toUpperCase() === letter
                //     ? letter.toLowerCase()
                //     : letter.toUpperCase();
                return (letter <= "Z" && letter >= "A") ? letter.toLowerCase() : letter.toUpperCase();
            }
            return letter;
        })
        .join("");
}

console.log(swapEveryTwoChars("elZeRo")); // Elzero
console.log(swapEveryTwoChars("heLlO")); // Hello
console.log(swapEveryTwoChars("hello")); // HeLlO
