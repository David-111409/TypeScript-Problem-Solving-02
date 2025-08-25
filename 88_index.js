const obj = { a: 1, b: 2, a: 3 };
console.log(obj);

function Person(first, last) {
    this.first = first;
    this.last = last;
}

let user = new Person("hager", "ahmed");
console.log(user);

console.log(new Number(3), typeof new Number(3));


function User(name, email, dob){
    this.name = name;
    this.email = email;
    this.dob = dob;
    this.calcAge = function(){
        return 2025 - this.dob ;
    }
}


let user1 = new User("Dawoud", "hager2@gmail.com", 2011);
console.log(user1.name, user1.email, user1.dob);
let age = user1.calcAge();
console.log(age);
