class Car {
    constructor(name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price;
    }
    run() {
        return "Car is running Now";
    }
    stop() {
        return "Car is stopped";
    }
}
// Needed Output

//   "Car One Name Is MG And Model Is 2022 And Price Is 420000"
//   "Car Is Running Now"

let car1 = new Car("MG", 2022, 420000);
let car2 = new Car("KIA", 2023, 2000000);
let car3 = new Car("MERCEDES", 2021, 300000);

console.log(
    `Car One Name is ${car1.name} And Model is ${car1.model} And Price is ${car1.price}`
);
console.log(car1.run());
console.log(car1.stop());
// console.log(car1.name);
// console.log(car1.model);
// console.log(car1.price);
