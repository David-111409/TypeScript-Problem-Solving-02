function createCar(name, model, color) {
    return {
        name,
        model,
        color,
        stop: function () {
            console.log("stop");
        },
    };
}

let car1 = createCar("lancer", 2020, "white");
let car2 = createCar("bmw", 2022, "bllue");

car1.stop();
console.log(car1.model);
console.log(car2.model);

function Car(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
    console.log(this);
}
let car3 = new Car("ferrari", 2011, "red");

function sum2(a, b) {
    return a + b;
}

let s2 = sum2(1, 2);
console.log(s2);
function sum(a) {
    return function (b) {
        return a + b;
    };
}

let s = sum(2)(3);
console.log(s);
