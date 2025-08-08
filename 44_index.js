const generations = [
    ["great grandfather", "great grandmother"],
    ["grandfather", "grandmother"],
    ["father", "mother"],
    ["me!", "me!"],
    ["son", "daughter"],
    ["grandson", "granddaughter"],
    ["great grandson", "great granddaughter"],
];

function generation(n, typ) {
    let gen = generations[n + 3];
    return typ === "m" ? gen[0] : gen[1];
}

console.log(
    generation(-3, "m") === "great grandfather",
    "3 generations before you, male..."
);
console.log(
    generation(1, "f") === "daughter",
    "1 generation after you, female..."
);
console.log(generation(-3, "f") === "great grandmother");
console.log(generation(-2, "m") === "grandfather");
console.log(generation(-2, "f") === "grandmother");
console.log(generation(-1, "m") === "father");
console.log(generation(-1, "f") === "mother");
console.log(generation(0, "f") === "me!");
console.log(generation(1, "m") === "son");
console.log(generation(1, "f") === "daughter");
console.log(generation(2, "m") === "grandson");
console.log(generation(2, "f") === "granddaughter");
console.log(generation(3, "m") === "great grandson");
console.log(generation(3, "f") === "great granddaughter");
console.log(generation(0, "m") === "me!");
