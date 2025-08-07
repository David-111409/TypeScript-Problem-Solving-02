let capitalizeWords = (str) => {
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

console.log(capitalizeWords("this is the word of us and we are happy with allah"));
