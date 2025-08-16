// class animal {
//     alive = true;
//     eat() {
//         console.log(`${this.name} is eating`);
//     }
// }

// class fish extends animal {
//     name = "fisher";
//     swim() {
//         console.log(`${this.name} is swimming`);
//     }
// }

// const Fish = new fish();
// console.log(Fish.alive);
// Fish.eat();
// Fish.swim();

String.prototype.elzeroRepeat = function (times) {
    let newString = "";
    for (let i = 0; i < times; i++){
        newString += this;
    }
    return newString;
};

console.log("elzero ".elzeroRepeat(3));
