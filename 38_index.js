function getCharacters(word, nums) {
    return  word.slice(0, nums) + word.slice(nums * -1);
}

console.log(getCharacters("Elzero School", 2)); // Elol
console.log(getCharacters("Elzero School", 3)); // Elzool
