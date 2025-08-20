function reversing(str) {
    
    function reverseKeepFirstTwo(word) {
        // Turn the word into array of characters
        let chars = word.split("");

        // Take everything after the 2nd letter
        let rest = chars.splice(2);

        // Reverse that part
        rest.reverse();

        // Put it back after the first two letters
        return chars.concat(rest).join("");
    }

    let [first, second] = str.split(", ");

    return [reverseKeepFirstTwo(first) , reverseKeepFirstTwo(second)].join(", ");
}

console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl
