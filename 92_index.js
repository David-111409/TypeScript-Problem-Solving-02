let myData = ["Osama", "Mohamed", "Elsayed", "Elzero"];

Object.defineProperty(myData, "push", {
    value: function () {
        return this.length;
    },
    writable: false,
    enumerable: false,
});

myData.push("khaled");
console.log(myData);
