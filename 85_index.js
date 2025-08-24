class User {
    #e;
    constructor(id, name, eSal) {
        this.i = id;
        this.n = name;
        this.#e = eSal;
    }
    getSalary() {
        return parseFloat(this.#e);
    }
}

class Manager extends User {
    constructor(id, name, eSal) {
        super(id, name, eSal);
    }
    bonus(){
        return this.getSalary() + 100;
    }
}
let user2 = new Manager(5, "Dawoud Hager", "5000 gp");

console.log(user2.i, user2.n, user2.getSalary(), user2.bonus());
