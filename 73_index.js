// const user = {};
// user[true] = "hello";
// user["true"] = "good";
// user[1] = "Dawoud";
// user["1"] = "Hala";
// console.log(user);

// console.log(1 | 6);

// millionsRounding([
//     ["Nice", 942208],
//     ["Abu Dhabi", 1482816],
//     ["Naples", 2186853],
//     ["Vatican City", 572]
//   ])

// console.log(Math.round(572 * 10 ** -6));

function millionsRounding(ar) {
    for (let small of ar) {
        small[1] = Math.round(small[1] / 10 ** 6) * 10 ** 6;
    }
    return ar;
}

console.log(
    millionsRounding([
        ["Nice", 942208],
        ["Abu Dhabi", 1482816],
        ["Naples", 2186853],
        ["Vatican City", 572],
    ])
);

const cities1 = [
    ["Tokyo", 37435191],
    ["Delhi", 29399141],
    ["Shanghai", 26317104],
];

const cities2 = [["Sao Paulo", 21846507]];

const cities3 = [
    ["London", 9304016],
    ["Naples", 2186853],
    ["Nice", 942208],
    ["Abu Dhabi", 1482816],
    ["Riga", 630692],
    ["Vatican City", 572],
];

console.log(
    JSON.stringify(millionsRounding(cities1)) ===
        JSON.stringify([
            ["Tokyo", 37000000],
            ["Delhi", 29000000],
            ["Shanghai", 26000000],
        ])
);

console.log(
    JSON.stringify(millionsRounding(cities2)) ===
        JSON.stringify([["Sao Paulo", 22000000]])
);

console.log(
    JSON.stringify(millionsRounding(cities3)) ===
        JSON.stringify([
            ["London", 9000000],
            ["Naples", 2000000],
            ["Nice", 1000000],
            ["Abu Dhabi", 1000000],
            ["Riga", 1000000],
            ["Vatican City", 0],
        ])
);

console.log(millionsRounding([]), []);
