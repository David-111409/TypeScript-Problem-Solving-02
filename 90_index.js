
let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function generateNum() {
    let l = str.length;
    return Math.floor(Math.random() * l);
}

function serial() {
    let ser = "";
    for (let i = 0; i < 20; i++) {
        ser += str[generateNum()];
    }
    return ser;
}
console.log(serial());
console.log(serial());
console.log(serial());
console.log(serial());
