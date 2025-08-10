const determineLever = (ar) => {
    let [, middle] = ar;
    if (middle === "f") {
        return "first class lever";
    } else if (middle === "l") {
        return "second class lever";
    } else {
        return "third class lever";
    }
};

console.log(determineLever(["e", "f", "l"]) === "first class lever");
console.log(determineLever(["e", "l", "f"]) === "second class lever");
console.log(determineLever(["f", "e", "l"]) === "third class lever");
