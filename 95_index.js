class User {
    #id;
    constructor(id, pass) {
        this.#id = id;
        this.pass = pass;
    }
    get getId() {
        this.#doSomething();
        return this.#id;
    }

    #word = "hello";
    getWord() {
        return this.#word;
    }

    /**
     * @param {any} i
     */
    set changeId(i) {
        this.#id = i;
    }

    #doSomething() {
        console.log("something");
    }
}

let user = new User(2, 100);
console.log(user);
console.log(user.pass, user.getId, user.getWord(), user.word);

user.changeId = "123";
console.log(user.getId);

const buildArray = (a, b) => {
    let ar = [];
    let dif = Math.abs(a - b);
    for (let i = 0; i <= dif; i++) {
        ar[i] = a++;
    }
    return ar;
};

console.log(buildArray(2, 5));
console.log(buildArray(-1, 8));
console.log(buildArray(2, 8));
