class User {
    constructor(id, name, dob) {
        this.id = id;
        this.name = name;
        this.dob = dob;
    }

    get calcAge() {
        return 2025 - this.dob;
    }

    // changeDOB(a){
    //     this.dob = a;
    // }
    /**
    //  * @param {number} a
     */
    set change(a) {
        this.dob = a;
    }

    static hello(name) {
        return `Hello , ${name}`;
    }
}

let user1 = new User(1, "hager", 2011);

// User.prototype.calcAge = function () {
//     return 2025 - this.dob;
// };
// user1.changeDOB(2015);
user1.change = 1997;
console.log(user1.calcAge);
console.log(User.hello("kaled"));
