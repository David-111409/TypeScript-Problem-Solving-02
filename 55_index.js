// "use strict";
// function letTest(){
//     let x = 1;

//     if(true){
//         let x = 2;
//         console.log("From the inside if condition block " + x);
//     }

//     console.log("From the outside if condition block " + x);

//     return "Done";
// }

// console.log(letTest());

// var x = 10;
// var x = 20;
// console.log(x);

// var ahmed = 1;
// let khaled = 2;
// console.log(this.ahmed);
// console.log(this.khaled);
// console.log(this);
// const sarah = 50;
// console.log(this.sarah);

// function getBudgets(objs){
//     let obj, sum = 0;
//     for (obj of objs){
//         sum += (obj.budget);
//     }

//     return sum;
// }

// console.log(getBudgets([{name: "John",  age: 21, budget: 23000}, {name: "Steve",  age: 32, budget: 40000}, {name: "Martin",  age: 16, budget: 2700}]))

// console.log(getBudgets([{name: "John",  age: 21, budget: 23000}, {name: "Steve",  age: 32, budget: 40000}, {name: "Martin",  age: 16, budget: 2700}]), 65700)
// console.log(getBudgets([{name: "John",  age: 21, budget: 29000}, {name: "Steve",  age: 32, budget: 32000}, {name: "Martin",  age: 16, budget: 1600}]), 62600)
// console.log(getBudgets([{name: "John",  age: 21, budget: 19401}, {name: "Steve",  age: 32, budget: 12321}, {name: "Martin",  age: 16, budget: 1204}]), 32926)
// console.log(getBudgets([{name: "John",  age: 21, budget: 10234}, {name: "Steve",  age: 32, budget: 21754}, {name: "Martin",  age: 16, budget: 4935}]), 36923

// const person = {"name": "Khaled",
//     age:24
// };
// Object.freeze(person);

// console.log(person);

// function ascDesNone(ar, typ){
//     if(typ == "Asc") return ar.sort((a, b) => a - b);
//     else if (typ == "Des") return ar.sort((a , b) => b-a);
//     else if (typ == "None") return ar;
// }

// console.log(ascDesNone([4, 3, 2, 1], "Asc"), [1, 2, 3, 4])
// console.log(ascDesNone([7, 8, 11, 66], "Des"), [66, 11, 8, 7])
// console.log(ascDesNone([1, 2, 3, 4], "None"),[1, 2, 3, 4])
// console.log(ascDesNone([1, 0, 1, 0], "Asc"), [0, 0, 1, 1])
// console.log(ascDesNone([1, 2, 2, 2, 2, 2, 2], "Des"), [2, 2, 2, 2, 2, 2, 1])
// console.log(ascDesNone([9, 7, 43, 11, 16, 111, 19], "Asc"), [7, 9, 11, 16, 19, 43, 111])

// function tempConversion(c){
//     let f = (c * 9/5) + 32;
//     f = Math.round(f * 100) / 100;
//     let k = c + 273.15;
//     k = Math.round(k * 100) / 100;
//     if(k < 0) return "Invalid";
//     return [ f , k ];
// }

// console.log(tempConversion(300.4));
// console.log(tempConversion(0), [32 , 273.15]);
// console.log(tempConversion(100), [212 , 373.15])
// console.log(tempConversion(42.8), [109.04 , 315.95]);
// console.log(tempConversion(300.4), [572.72 , 573.55])
// console.log(tempConversion(-10.7), [12.74 , 262.45])
// console.log(tempConversion(-273.13), [-459.63 , 0.02])
// console.log(tempConversion(-273.16), "Invalid", "Wow, is it realy that cold?")

// const ar = [1, 2, 'Khaled', "Hager"];
// console.log(ar.length);
// ar.length = 2;
// console.log(ar);
// ar.length = 1;
// console.log(ar);

// let string = "I love js and web front and \nLove doing project \nand Love happy days learn",
//  result = string.replace(/L/ig, "*");

//  console.log(result);

// function amazingEdabit(str){
//  let decide = str.search(/edabit/i);

//  if (decide != -1) return str;

//   return str.replace(/amazing/g, "not amazing")
// }

// console.log(amazingEdabit("edabit is amazing"));
// console.log(amazingEdabit("Mubashir is amazing"));
// console.log(amazingEdabit("edabit is amazing.") == "edabit is amazing.")
// console.log(amazingEdabit("Mubashir is amazing.") == "Mubashir is not amazing.")
// console.log(amazingEdabit("Trump is amazing.") == "Trump is not amazing.")
// console.log(amazingEdabit("Infinity is amazing.") == "Infinity is not amazing.")
// console.log(amazingEdabit("Mubashir and edabit are amazing."), "Mubashir and edabit are amazing.")
// console.log(amazingEdabit("Matt is amazing.") == "Matt is not amazing.")
// console.log(amazingEdabit("Helen is amazing.") == "Helen is not amazing.")
// console.log(amazingEdabit("Python and edabit are amazing.") == "Python and edabit are amazing.")
// console.log(amazingEdabit("C++ is amazing.") == "C++ is not amazing.")
// console.log(amazingEdabit("javascript is amazing.") == "javascript is not amazing.")
// console.log(amazingEdabit("java is amazing.") == "java is not amazing.")
// console.log(amazingEdabit("ruby is amazing.") == "ruby is not amazing.")
// console.log(amazingEdabit("SQL is amazing.") == "SQL is not amazing.")
// console.log(amazingEdabit("CSS is amazing.") == "CSS is not amazing.")
// console.log(amazingEdabit("Pakistan is amazing. edabit") == "Pakistan is amazing. edabit")
// console.log(amazingEdabit("You and edabit are amazing.") == "You and edabit are amazing.")
// console.log(amazingEdabit("Matt and edabit are amazing.") == "Matt and edabit are amazing.")
// console.log(amazingEdabit("Helen and edabit are amazing.") == "Helen and edabit are amazing.")
// console.log(amazingEdabit("Everyone is amazing.") == "Everyone is not amazing.")
// console.log(amazingEdabit("Swift and edabit are amazing.") == "Swift and edabit are amazing.")

// let string = "AB XYZ abc ghij 01234"
// console.log(string.replace(/[^0-9]/g, "*"));

// let string = "I love elzeero weeeeb school",
//     result = string.replace(/e{2,}/gi, "*");

// console.log(result);

// function firstVowel(word){
//     return word.search(/[aeiou]/i);
// }
// console.log(firstVowel("apple"));
// console.log(firstVowel("hello"));
// console.log(firstVowel("STRAWBERRY"));
// console.log(firstVowel("hello"), 1)
// console.log(firstVowel("apple"), 0)
// console.log(firstVowel("string"), 3)
// console.log(firstVowel("STRAWBERRY"), 3)
// console.log(firstVowel("MELON"), 1)
// console.log(firstVowel("piNNEaPLE"), 1)

// let regularTestOne = function() {return 2;}
// console.log(regularTestOne());

// let arrowTestOne = _ => 2;
// console.log(arrowTestOne());

// let regularTestTwo = function(param) {return param * 2;};
// console.log(regularTestTwo(3));

// let arrowTestTwo = param => param * 2;
// console.log(arrowTestTwo(3));

// let add = function(a, b){return a+b;}
// console.log(add(2, 30));

// let add2 = (a,b)=> a + b;
// console.log(add2(2, 30));

// let isEven = strNum => {
//     let regx = /[02468]/
//     return regx.test(strNum.at(-1));
// }

// console.log(isEven("2341"));
// console.log(isEven("132"));
// console.log(isEven("29"));
// console.log(isEven("5578"));
// console.log(isEven("17801921"))

// let test = () =>
//     document.getElementById("show").innerHTML = this;

// window.onload = test;

// document.getElementById("button").addEventListener("click", test);

// function person(){
//     let age = 0;
//     setInterval( () =>{
//             age ++;
//             console.log(age);
//     }, 1000)
// }

// let user = new person();

// let detectWord = word => {
//     regx = /[a-z]/g;
//     return word.match(regx).join("");
// }
// let theKind = "male";
// let greet = "Hello\n" + (theKind == 'male' ? "Mr." : "Mrs") + " Dawoud" +"\nIt's me Dawoud" + "\nfrom here of the world" + "\nI love all the world";
// console.log(greet);

// let newGreet = `Hello
// ${theKind == 'male' ? "Mr." : "Mrs"} Dawoud
// It's me Dawoud
// from here of the world
// I love all the world`;
// console.log(newGreet);

// let name = "Khaled",
//     age = 24;

// const html = `<h1>Hello ${name}<\h1>`;
// document.write(html);

// let mark = `
// <div class = "card">
// <h2 class = 'name'>${name}</h2>
// <span class = "age">${age}</span>
// </div>`

// document.body.innerHTML = mark;
// document.write(mark);

// function asciiCapitalize(string){
//     let newString = "";
//     for (let l of string){
//         code = l.charCodeAt(0);
//         if (code % 2) newString += (l.toLowerCase());
//         else newString += (l.toUpperCase());
//     }

//     return newString;
// }

// console.log(asciiCapitalize("to be or not to be!"));
// console.log(asciiCapitalize("Oh what a beautiful morning.") == "oH wHaT a BeauTiFuL moRNiNg.")
// console.log(asciiCapitalize("THE LITTLE MERMAID") == "THe LiTTLe meRmaiD")
// console.log(asciiCapitalize("to be or not to be!") == "To Be oR NoT To Be!")

// let ar1 = [1, 2, 3],
//     ar2 = [4, 5, 6],
//     customArr = [1, 2, 3, ...ar2];

// console.log(customArr);

// const arAll = [...ar1, ...ar2];
// console.log(arAll);

// function sum(x,y,z){
//     return x+y+z;
// }

// let nums = [10, 20, 3];
// console.log(sum(10, 20, 3));
// console.log(sum(...nums));
// console.log(nums);
// console.log(...nums);

// let arOne = [1, 2, 3],
//     arTwo = [...arOne];

// arTwo.push(4);
// // arOne.push(5);
// console.log(arOne , arTwo);

// let ar = [1, 2, -1 , 100, 5, 50];
// console.log(Math.min(...ar));
// console.log(Math.max(...ar));
// console.log(Math.min(1, 2, -1, 100, 5, 50 ));

// let date = new Date("8 March 2025, 8:10:10");
// console.log(date);

// function showInfo(username = "default user" , role = 'default role' , theme = 'default theme'){
//     //  theme = theme || "default theme" ;
//     //  username = username || "default username";
//     //  role = role || "default role";
//     return `Your username is ${username}, your role ${role}, and the web theme is ${theme}`
// }

// console.log(showInfo("Dawoud"));
// console.log(showInfo("Dawoud", "big tech lead"))
// console.log(showInfo("Dawoud", "Big tech leader", "blue"));

// console.log(undefined || "hello");

// function calculateDifference(obj, limit){
//     return -limit + Object.values(obj).reduce((f, x) => f + x);
// }

// console.log(calculateDifference({"baseball bat":20}, 5))
// console.log(calculateDifference({skate:10, painting:20}, 19));
// console.log(calculateDifference({skate:200, painting:200, shoes:1}, 400))
// const obj = { skate: 20000, painting: 30000, shoes: 1 }
// const obj2 = { "baseball bat": 31}

// console.log(calculateDifference(obj, 50000),1)
// console.log(calculateDifference(obj2, 10),21)

// function sum(x, y, z){
//     return x + y + z;
// }

// console.log(sum(2,3, 7));

// function showInfo(a, b, c, ...params){
//     console.log("a value:", a);
//     console.log("b value:", b);
//     console.log("c value:", c);
//     console.log("params:", params);

//     return "output done";
// }

// console.log(showInfo("one", "Two", "Three", "Four", "Five", "Six", "Seven"));

// function addAll(...nums){
//     let sum = 0;

//     for (let n of nums) sum += n;

//     return sum;
// }

// console.log(addAll(1, 2, -1, 100));

// let name = "Dawoud is here to find you and be good for you";

// console.log(name.startsWith("is"));
// console.log(name.startsWith("is", 7));

// let title = "Video - learn how to Learn";

// console.log(title.startsWith("Video"));
// console.log(title.endsWith("Learn", title.length));

// console.log(title.endsWith(' ', 21 ));
// console.log("Video - learn how to".length);

// let string = "My name is : Dawoud ";
// console.log(string.repeat(4));
// console.log(string.includes("ud", 4));

// function another_repeat(string, count){
//     let newString = "";
//     for (let i = 0; i < count  ; i++) newString += string;

//     return newString;
// }
// console.log(another_repeat(string, 4));

// function maximumScore(objsArray){
//     let sm=0;
//     for (let obj of objsArray) sm += (obj.score);
//     return sm;
// }

// console.log(maximumScore([{tile: 'N', score: 1}, {tile: 'K', score: 5},  {tile: 'Z', score: 10}, {tile: 'X', score: 8}, {tile: 'D', score: 2}, {tile: 'A', score: 1}, {tile: 'E', score: 1}]), 28);
// console.log(maximumScore([{tile: 'B', score: 2}, {tile: 'V', score: 4},  {tile: 'F', score: 4}, {tile: 'U', score: 1}, {tile: 'D', score: 2}, {tile: 'O', score: 1}, {tile: 'U', score: 1}]), 15);
// console.log(maximumScore([{tile: 'M', score: 3}, {tile: 'Q', score: 10},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}]), 18);
// console.log(maximumScore([{tile: 'A', score: 1}, {tile: 'E', score: 1},  {tile: 'O', score: 1}, {tile: 'E', score: 1}, {tile: 'E', score: 1}, {tile: 'I', score: 1}, {tile: 'A', score: 1}]), 7);

// var user = {
//     name : "Dawoud",
//     age : 27,
//     gender: "male",
//     city: "cairo",
//     theme : "black"
// };

// const {name, age, gender, city, theme = "Default"} = user;
// console.log(name, age, gender, city);

// console.log(`I am ${name}, I am ${age} years old. and I live in ${city} and my theme color ${theme}`)

// function highLow(stringNums){
//     let ar = stringNums.split(" ");
//     // ar = ar.map(n => parseInt(n));
//     let max =  Math.max(...ar);
//     let min = Math.min(...ar);
//     return `${max} ${min}`
// }

// console.log(highLow("1 2 3 4 5"));
// console.log(highLow("1 2 -3 4 5"));
// console.log(highLow("1 9 3 4 -5"));
// console.log(highLow("13"));
// console.log(highLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6") == "542 -214")
// console.log(highLow("1 -1"), "1 -1")
// console.log(highLow("1 1"), "1 1")
// console.log(highLow("-1 -1"), "-1 -1")
// console.log(highLow("1 -1 0") == "1 -1")
// console.log(highLow("1 1 0"), "1 0")
// console.log(highLow("-1 -1 0"), "0 -1")
// console.log(highLow("42"), "42 42")

// const user = {name: "Dawoud",
//                         age : 24,
//                         gender: "male",
//                         city: "cairo",
//                         langs: {
//                             html : "90%",
//                             css : "70%",
//                             js : "10%",
//                             python : "80%"
//                         }
// }

// const {html:h, css:c, python:p = "default: 10%"} = user.langs;
// console.log(`My html : ${h}
//     and my css : ${c}
//     and my python: ${p}`)

// const names = ["khaled", "Hager", "sarah", "do", "rice"];

// const [one, , , four ] = names;
// console.log(one,  four, );

// console.log(names[0], names[3]);

// let missingNum = function(ar){
//     for (let i = 1; i < 11; i ++)
//         if(!ar.includes(i)) return i;
// }

// let missingNum = (ar) => {
//     let total=55;
//     let sum = ar.reduce((a, b) => a + b, 0);
//     return total - sum;
// }

// console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
// console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
// console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3 , 9]));
// console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]), 5)
// console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]), 10)
// console.log(missingNum([7, 2, 3, 9, 4, 5, 6, 8, 10]), 1)
// console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]), 7)
// console.log(missingNum([1, 7, 2, 4, 8, 10, 5, 6, 9]), 3)

// let sentence = "I love python and js in addition to c++";

// console.log(sentence.indexOf('python'));

// const food = ["Meat", "Rice", "Eggs", ["apple", "Mango", "sugar", ["orange1", "or2", "or3"]]];

// const [one, two, third, [fruit1, fruit2, , [or1, or2, or3]]] = food;
// console.log(`The food egypt likes are:
//     ${one}, ${two} and ${third} and fruits are : ${fruit1} and ${fruit2}`)

// console.log(`The oranges are: ${or1}, ${or2} and ${or3}`)

// let names = ["Khaled", "Sarah", "Hager", "Muhammad", "Dawoud", "Zeinab", "Ahmed"];

// const [first, second , third, ...rest]  = names;
// console.log(`I love ${first}, ${second} and ${third}`);

// console.log(rest);

// let name = "Dawoud";
// let [f, ...rest] = name;
// console.log(f, rest);

// console.log(`I love ${first},${second},${third},${rest}`)

// function multiplyNums(stringNums){
// return stringNums.split(", ").map(Number).reduce((a, b) => a * b);
// }

// console.log(multiplyNums("2, 3"));
// console.log(multiplyNums("1, 2, 3, 4"));
// console.log(multiplyNums("2, 3"), 6)
// console.log(multiplyNums("1, 2, 3, 4"), 24)
// console.log(multiplyNums("54, 75, 453, 0"), 0)
// console.log(multiplyNums("10, -2"), -20)
// console.log(multiplyNums("-26, 1, -27, -12, -19"), 160056)
// console.log(multiplyNums("16, 8"), 128)
// console.log(multiplyNums("-27, -14, -28, 13, -17"), 2339064)
// console.log(multiplyNums("-19, -22, -14, 20, -15, -24, -17, 19, 30, -10"), -4082823360000)
// console.log(multiplyNums("1, 13, 0, -11, 26, -17, 21") == 0)
// console.log(multiplyNums("-25, -19, 7, -26, -26") == 2247700)
// console.log(multiplyNums("-4, -16, -22, -3, -6") == -25344)
// console.log(multiplyNums("-22, 11, 19, 5, 19, -9, -13, 20, -29"), 29641926600)
// console.log(multiplyNums("-25, 22") == -550)
// console.log(multiplyNums("26, -19, 17, 26, -21"), 4585308)
// console.log(multiplyNums("5, -1, 1, -28, 14, 28, 1"), 54880)
// console.log(multiplyNums("-27, -9, 6, -25, 4"), -145800)
// console.log(multiplyNums("-24, -13, -14, 30, 9, -14"), 16511040)
// console.log(multiplyNums("27, 25, 27, -18, -27, -7, 28, 27, 0"), 0)
// console.log(multiplyNums("-23, 11, -18, -5, -4"), 91080)
// console.log(multiplyNums("-16, -10, -29, -23, -30, -1"), 3201600)
// console.log(multiplyNums("-14, -17, 9, -2, -17, -10, -30"), 21848400)
// console.log(multiplyNums("-13, -23, 10, 0, -23") == 0)
// console.log(multiplyNums("0") == 0)
// console.log(multiplyNums("30"), 30)
// console.log(multiplyNums("-24, -21, 6, -29, 23, 11, -21, -29"), -13511936592)
// console.log(multiplyNums("4, 23, 10"), 920)
// console.log(multiplyNums("-13, -2, 28, 10, 25"), 182000)
// console.log(multiplyNums("-18, -6, -9, 7, -1, -4, 5, -2, 19"), 5171040)
// console.log(multiplyNums("-24, 15, -19, 20, -14, -8, 6, -22, 17"), -34381670400)
// console.log(multiplyNums("12, -12, -3, -12, 10, 16, -23, -5, 17"), -1621555200)
// console.log(multiplyNums("17"), 17)
// console.log(multiplyNums("9, -27, 9, -22, 24, -1"), -1154736)
// console.log(multiplyNums("16, -26, -1, -25, 13, 6, 26, 2, 4"), -168729600)
// console.log(multiplyNums("-13, 17, 29, 19, 7"), -852397)
// console.log(multiplyNums("28, 15, -7, -25"), 73500)
// console.log(multiplyNums("-8, 19, -11, -10, -3, -9, 30, 18"), -243777600)
// console.log(multiplyNums("22, -13, 29, 3, -29"), 721578)
// console.log(multiplyNums("18, -18, -8, -16"), -41472)
// console.log(multiplyNums("-12, -28, -19, 14, 27, 14, -3, 10, 13, 1"), 13175809920)
// console.log(multiplyNums("-26, -21, 27, 23, -22, 1"), -7459452)
// console.log(multiplyNums("5, -21, -26, -29, -8, 21, -5, -30, 1"), 1995084000)
// console.log(multiplyNums("-9, -7, -13, -15, -2"), -24570)
// console.log(multiplyNums("9, 25, 1, 28, 3, -3, -16, -26, 12, -26"), 7359206400)
// console.log(multiplyNums("-2, 4, -29"), 232)
// console.log(multiplyNums("26, 13, 17, -16, 6"), -551616)
// console.log(multiplyNums("-17"), -17)
// console.log(multiplyNums("26, -15, -12, 2, -1, 4, 20, 14, 25, 3"), -786240000)
// console.log(multiplyNums("8, -11"), -88)
// console.log(multiplyNums("12, -2, 8, 6, -23, 9, 13, 14"), 43400448)
// console.log(multiplyNums("-10, 19, -29, 3, 30, 20, -5"), -49590000)
// console.log(multiplyNums("19"), 19)
// console.log(multiplyNums("15, -28, 8, 7, -20, 24, 2") == 22579200)
// console.log(multiplyNums("25, -24, 4, 9, -17, 4, -24, -18, -3"), -1903564800)
// console.log(multiplyNums("8, -14, -30, 9, -14, 17, -14") == 100759680)

// let book = "video",
// video = "book";

// [book, video] = [video, book];

// var x = book;
// book = video;
// video = x;

// console.log(`Book value is ${book} and video value is ${video}`)

// console.log(book, video);

// const user = {
//     name: "Dawoud",
//     age : 27,
//     skills: {
//         html: "89%",
//         css: "80%",
//         js: [
//              "Reactjs",
//             "Vuejs",
//             "Angular"
//         ]
//     }
// };
// const {name, age, skills:{html, css, js:[one, two, three]}} = user;

// const {name, age, skills:{html, css, js:{frameone:one, frametwo:two, framethree:three}}} = user;
// console.log(name,age, html, css, one, two, three );

// function showInfo(user){
//     console.log(`I am ${name}. My age is ${age}`);
//     console.log(`I can do html: ${html},
// css: ${css}
// and ${one}, ${two} and ${three}`)

// }

// showInfo(user);

// function ar([one, two, three, four="default"]){
//     console.log(one, two, three, four);
// }

// ar([1, 2, 3, 4]);

// const name = "Dawoud", site = "dawoud.com";

// const user = {
//     name,
//     site
// };

// const {name:n, site:s} = user;
// console.log(n, s);

// const user = {
//     myMethod (param){
//         return param;
//     }
// };

// console.log(user.myMethod("Hello from the method param without function word"));

// const user = {
//     name:"Dawoud",
//     method  (name){return "hello " + name;}
// }

// console.log(user.method("Dawoud"));

// const var1 = "key";
// const value = "value";

// const obj = {property: "myvalue", [var1]: value};
// // obj[var1] = "Value";
// console.log(obj);

// let ar = [1,1, 2, 2, 3, 3, 4, 4, 4];

// let set = new Set(ar);
// console.log(set);
// console.log([...set])
// console.log([...set]);

// let name = '101';
// for (let i = 0; i < name.length; i++) console.log(name[i]);

// let set = new Set("Dawoud");
// set.add("dawoud");
// set.add("d");
// set.delete("d");
// // set.add("One");
// // set.add("Two");
// // set.add("Three");
// set.clear();
// console.log(set);
// console.log(set.has("Dawoud".toLowerCase()));
// console.log(set.size);

// function removeDups(ar){
//     return [...new Set(ar)];
// }

// console.log(removeDups(['John', 'Taylor', 'John']), ['John', 'Taylor'])
// console.log(removeDups(['John', 'Taylor', 'John', 'john']), ['John', 'Taylor', 'john'])
// console.log(removeDups(['javascript', 'python', 'python', 'ruby', 'javascript', 'c', 'ruby']), ['javascript', 'python', 'ruby', 'c'])
// console.log(removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5]), [1, 2, 3, 5, 6, 7])
// console.log(removeDups(['#', '#', '%', '&', '#', '$', '&']), ['#', '%', '&', '$'])
// console.log(removeDups([3, 'Apple', 3, 'Orange', 'Apple']) , [3, 'Apple', 'Orange'])

// const user = {};
// user.name = "Muhammad";
// user.site = "Dawoud.com";
// console.log(user);

// console.log(user['name']);
// console.log(user['site']);

// let map = new Map([[10, "number"], ['10', 'string'], ['false', 'boolean'], [function fun() {return "do something"}, 'function'], [{1:"one", 2:"Two"}, "object"]]);

// map.set("10", 'string').set(10, "number").set(false, 'boolean');
// map.set(function fun() {return 'something';}, "function" );
// map.set({a:1, b:2}, "object");
// map.set("name", "Dawoud");
// map.set("city", "cairo");
// map.set(10, "number");
// map.set(10, 'number last');

// console.log(map);
// console.log(`My map size is: ${map.size}`)
// console.log(`using get method: ${map.get(10)}`)
// console.log(`using another get method : ${map.get("10")}`)
// console.log(`using has to check if map has 100 number: ${map.has(100)}  and has false string form value : ${map.has('false')}`);

// console.log(`Using delete method: ${map.delete('false')}`)

// map.clear();
// console.log(map.size);

// function validDivision(stringNum){

//     let  [first, second] = stringNum.split("/").map(Number);

//     let decide =  second === 0 ? "invalid" : Number.isInteger(first / second);

//     return decide;

// };

// console.log(validDivision("6/3"), true)
// console.log(validDivision("30/25"), false)
// console.log(validDivision("0/3"), true, "0/3 equals 0, 0 is a whole number without decimals")
// console.log(validDivision("13/12"), false)
// console.log(validDivision("329/329"), true)
// console.log(validDivision("0/0"), "invalid")
// console.log(validDivision("10/0"), "invalid")
// console.log(validDivision("20/5"), true)

// function parallelResistance(ar){

//     let total = ar.map(num => 1 / num).reduce((x, y) => x + y);

//     return Math.round(10 / total) / 10;
// };
// console.log(parallelResistance([500, 500, 500]));
// console.log(parallelResistance([6, 3]), 2)
// console.log(parallelResistance([6, 3, 6]), 1.5)
// console.log(parallelResistance([10, 10]), 5)
// console.log(parallelResistance([10, 20, 10]), 4)
// console.log(parallelResistance([60, 30, 20]), 10)
// console.log(parallelResistance([16, 4]), 3.2)
// console.log(parallelResistance([20, 5]), 4)
// console.log(parallelResistance([500, 500, 500]), 166.7)
// console.log(parallelResistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 0.3)
// Author: Joshua Señoron

// const symbol = Symbol();

// console.log(typeof symbol, "=>", symbol);

// const symbol1 = Symbol("Testing");
// const symbol2 = Symbol("Debuging");

// console.log(symbol1 === symbol2, symbol1); // false

// const dynamic = Symbol("Testing");
// let value = 'This is hidden from interation';
// const obj = {
//     name: "Muhammad",
//     site: "Dawoud.com",
//     [dynamic]: value
// };

// console.log(obj);

// for (let val of Object.entries(obj)){
//     console.log(val);
// }

// console.log(Object.entries(obj));

// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.getOwnPropertySymbols(obj));

// console.log(JSON.stringify(obj));

// const symbol1 = Symbol.for('one'),
//   symbol2 = Symbol.for('two');

// console.log(symbol1 === symbol2); // false because it is unique

// console.log(symbol1 === symbol2);
// console.log(Symbol.keyFor(symbol1), Symbol.keyFor(symbol2),symbol1)

// alert("hello, world");

// alert(symbol1.toString());

// console.log(symbol2.description);

// console.log(symbol1.iterator);

// console.log("Hello, World");

// const ar = [1, 2, 3, 4, 5];

// ar.forEach(element => {
//     console.log(element * 5);
// });

// const arr = ['a', 'b', 'c', , 'd'];

// for (let i = 0 ; i < arr.length; i ++){
//     console.log(`${i} = ${arr[i]}`);
// }

// console.log(`${"*".repeat(30)}`)

// arr.forEach(ele => console.log(`${ele}`))

// arr.forEach((e, i) => console.log(`${i} = ${e}`))

// console.log(`${"*".repeat(30)}`);

// let callback = 0;

// arr.forEach((ele, i) => {
//     console.log(`${i} = ${ele}`);
//     callback ++;
// });

// console.log(callback);
// console.log(`${"*".repeat(30)}`);

// function showElements(ele, index){
//     console.log(`${index} = ${ele}`)
// };

// arr.forEach(showElements);

// function inkLevels(colors)
// {

//     let levels = Object.values(colors);

//     return Math.min(...levels);
// }

// console.log(inkLevels({
//     "cyan":23,
//     "magenta":12,
//     "yellow":10
// }));

// console.log(inkLevels({
// 	"cyan": 23,
// 	"magenta": 12,
// 	"yellow": 10
// }), 10);

// console.log(inkLevels({
// 	"cyan": 432,
// 	"magenta": 543,
// 	"yellow": 777
// }), 432);

// console.log(inkLevels({
// 	"cyan": 700,
// 	"magenta": 700,
// 	"yellow": 0
// }), 0);

// console.log(inkLevels({
// 	"cyan": 70,
// 	"magenta": 700,
// 	"yellow": 1
// }), 1);

// console.log(inkLevels({
// 	"cyan": 6543,
// 	"magenta": 74543,
// 	"yellow": 2345678
// }), 6543);

// console.log(inkLevels({
// 	"cyan": 1,
// 	"magenta": 1,
// 	"yellow": 1
// }), 1);

// console.log(inkLevels({
// 	"cyan": 700,
// 	"magenta": 700,
// 	"yellow": 700
// }), 700);

// made by @Joshua Señoron

// const set = new Set([1, 1, 1, 2, 2,  3, 3, 3, 4, 4, 5, 5]);
// console.log(set);

// set.forEach((ele, value) => console.log(`${ele} - ${value}`));

// const map = new Map([["one", 1], ["two", 2], ["three", 3], ["four", 4], ["five", 5], ["x", {}]]);

// console.log(map);

// map.forEach((ele, key) => console.log(key,  ele));

// function toArray(obj){
//     return Object.entries(obj);
// }

// console.log(toArray({a:1, b:2}));
// console.log(JSON.stringify(toArray({ a: 1, b: 2 }))=== JSON.stringify([["a", 1], ["b", 2]]));
// console.log(toArray({ foo: 33, bar: 45, baz: 67 }), [["foo", 33], ["bar", 45], ["baz", 67]])
// console.log(JSON.stringify(toArray({ shrimp: 15, tots: 12 })) === JSON.stringify([["shrimp", 15], ["tots", 12]]))
// console.log(toArray({}), [])

// const obj = {a:1};
// console.log(obj);

// const st = new Set([obj]);
// let  obj1 = {b:2};
// let  obj2 = {c:3};
// st.add(obj1);
// st.add(obj2);
// console.log(st);

// console.log(st.has(obj1), st.has(obj2), st.has(obj), st.size);
// console.log(st.keys(), st.values());
// console.log([obj])
// console.log(st);

// for (let key of st.keys()) console.log(key);

// for (let value of st.values()) console.log(value);

// console.log(st);
// st.delete(obj1);
// console.log(st.has(obj1));
// obj2 = null;

// console.log(st.has(obj2));

// st.add(12);
// st.add("string");
// // console.log(st);

// st.forEach(v => console.log(v));

// let mainObject = {A:1};
// let mySet = new Set([mainObject]);

// let objectOne = {B:2},
//     objectTwo = {c:3};

// mySet.add(objectOne);
// mySet.add(objectTwo);

// console.log(mySet);
// console.log(mySet.has(objectOne), mySet.has(objectTwo));

// console.log(mySet.size);
// console.log(mySet.keys(), mySet.values());
// mySet.delete(objectOne);
// console.log(mySet.has(objectOne));

// objectTwo = null;
// console.log(mySet);
// console.log(mySet.has(objectTwo));

// mySet.add("String");
// mySet.add(10);

// console.log(mySet);

// mySet.forEach(v => console.log(v));

// let mainObject = {A:1};
// let mySet = new WeakSet([mainObject]);

// let objectOne = {B:2},
//     objectTwo = {c:3};

// mySet.add(objectOne);
// mySet.add(objectTwo);

// console.log(mySet);
// console.log(mySet.has(objectOne), mySet.has(objectTwo));

// console.log(mySet.size);
// console.log(mySet.keys(), mySet.values());
// mySet.delete(objectOne);
// console.log(mySet.has(objectOne));

// objectTwo = null;
// console.log(mySet);
// console.log(mySet.has(objectTwo));

// mySet.add("String");
// mySet.add(10);

// console.log(mySet);

// mySet.forEach(v => console.log(v));

// function uniqueSort(ar){

//     let unique = [...new Set(ar)];

//     let sort = unique.sort((a, b) => a - b);

//     return sort;
// };

// console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));
// console.log(uniqueSort([6, 7, 3, 2, 1]));
// console.log(
//     uniqueSort([1, 5, 8, 2, 3, 4, 4, 4, 10]),
//     [1, 2, 3, 4, 5, 8, 10]
//   );

//   console.log(
//       uniqueSort([1, 2, 5, 4, 7, 7, 7]),
//     [1, 2, 4, 5, 7]
//   );

//   console.log(
//      JSON.stringify( uniqueSort([7, 6, 5, 4, 3, 2, 1, 0, 1])) ==
//     JSON.stringify([0, 1, 2, 3, 4, 5, 6, 7])
//   );

//   console.log(
//       uniqueSort([3, 6, 5, 4, 3, 27, 1, 100, 1]),
//     [1, 3, 4, 5, 6, 27, 100]
//   );

//   console.log(
//       uniqueSort([-9, -3.1414, -87, 8, -4.323827, -3.1415, -3.1415]),
//     [-87, -9, -4.323827, -3.1415, -3.1414, 8]
//   );

// let wMap = new WeakMap();
// let obj = {a:1};

// wMap.set(obj, "Test");

// console.log(wMap);

// obj = null;

// let weakMap = new WeakMap();
// let obj = { data: "test" };
// let obj2 = {data: "five"};
// weakMap.set(obj, "value");
// weakMap.set(obj2, "four");
// // weakMap.set(obj2, "hello");
// obj = null; // ✅ Garbage collector will clean it up
// console.log(weakMap.has(obj));
// console.log(weakMap);

// let myMap = new Map();

// let objectOne = {a:1};
// myMap.set(objectOne, "Test");
// myMap.set("b", 2);
// myMap.set("c", 3);
// myMap.set(1, 15);

// console.log(myMap);
// console.log(myMap.get(objectOne));
// console.log(myMap.get('c'));
// console.log(myMap.has(objectOne));

// console.log(myMap.has('b'));
// myMap.delete("b");
// console.log(myMap.has('b'));

// objectOne = null;
// console.log(myMap.get(objectOne));
// console.log(myMap.size);

// let myMap = new WeakMap();

// let objectOne = {a:1};
// let objectTwo = {b:2};
// myMap.set(objectOne, "Test1");
// myMap.set(objectTwo, 'Test2');
// myMap.set("b", 2);
// myMap.set("c", 3);
// myMap.set(1, 15);

// console.log(myMap);
// console.log(myMap.get(objectOne));
// console.log(myMap.get('c'));
// console.log(myMap.has(objectTwo));
// myMap.delete(objectTwo);
// console.log(myMap.has(objectTwo));

// objectOne = null;
// console.log(myMap.get(objectOne));

// console.log(myMap.has('b'));
// myMap.delete("b");
// console.log(myMap.has('b'));
// console.log(myMap);

// objectOne = null;
// console.log(myMap.get(objectOne));
// console.log(myMap.size);

// function reverseArr(num){

//     let original = [...num.toString()].map(Number);

//     original.reverse();

//     return original;

// };

// console.log(reverseArr(1485979));
// console.log(reverseArr(623478));
// console.log(reverseArr(12345));
// console.log(reverseArr(1485979), [9, 7, 9, 5, 8, 4, 1])
// console.log( JSON.stringify(reverseArr(623478)) == JSON.stringify([8, 7, 4, 3, 2, 6]));
// console.log(reverseArr(12345), [5, 4, 3, 2, 1])
// console.log(reverseArr(202069), [9, 6, 0, 2, 0, 2])

// let name = "Dawoud",
//     number = 123,
//     obj = {a:1},
//     ar = [1, 2, 3, 4];

// console.log(typeof(name[Symbol.iterator]));
// console.log(typeof(number[Symbol.iterator]));
// console.log(typeof(ar[Symbol.iterator]));
// console.log(typeof(obj[Symbol.iterator]));

// let theIterator = name[Symbol.iterator]();

// console.log(theIterator.next());
// console.log(theIterator.next());

// console.log(theIterator.next());
// console.log(theIterator.next());
// console.log(theIterator.next());
// console.log(theIterator.next());
// console.log(theIterator.next());

// for (let char of name) console.log(char);

// for (let n of ar) console.log(n);

// for (let ele in obj) console.log(ele)

// for (let num of number) console.log(num);

// function changeEnough(ar, item){
//     let [q, d, n, p] = ar;

//     let total = q * .25 + d * .1 + n * .05 + p * .01;

//     return total >= item;

// };

// console.log(changeEnough([0, 0, 20, 5], .75));
// console.log(changeEnough([2, 100, 0, 0], 14.11), false);
// console.log(changeEnough([0, 0, 20, 5], 0.75), true);
// console.log(changeEnough([30, 40, 20, 5], 12.55), true);
// console.log(changeEnough([10, 0, 0, 50], 13.85), false);
// console.log(changeEnough([1, 0, 5, 219], 19.99), false);
// console.log(changeEnough([1, 0, 2555, 219], 127.75), true);
// console.log(changeEnough([1, 335, 0, 219], 35.21), true);

// let obj = {
//     name : "Dawoud",
//     age: 24,
//     country: "Egypt",
//     skills: "Javascript",
//     [Symbol.iterator] () {
//         let step = 0;
//         let props = Object.keys(this);
//         // console.log(props);
//         return {
//             next() {
//                 return {value: obj[props[step]]  , done: step++ === props.length }
//             }
//         }
//     }
// };

// for (let prop of obj) {
//     console.log(prop);
// }

// function *generator(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }

// let iterator = generator();

// console.log(typeof(iterator));
// console.log(iterator.next().value);
// console.log(iterator.next().done)

// console.log(`${"*".repeat(40)}`);

// console.log("I have done something before doing the next yield");

// console.log(iterator.next().value);

// console.log("Function stops after each excution");

// console.log(iterator.next().value);

// console.log("Function gives you the control to yield the data.");
// console.log(iterator.next().value);

// console.log(`${"*".repeat(40)}`);

// let nums = [10, 20, 30, 40, 50];

// function *genAr(ar){
//     for (let i = 0; i < nums.length; i++) yield ar[i];
// }
// let n = genAr(nums);

// console.log(n.next().value);
// console.log(n.next().value);
// console.log(n.next().value);
// console.log(n.next().value);
// console.log(n.next());
// console.log(n.next());

// function *gen(ar){
//     yield *ar;
//     yield 7;
// }

// let g = gen(nums);
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// function calculateLosses(stolenObj){

//     let res = Object.values(stolenObj).reduce((x, y) => x + y, 0);

//     return res ? res: "Lucky you!";
// }

// console.log(calculateLosses({tv:30,
//     skate:20,
//     stereo:50
// }));
// console.log(calculateLosses({}));
// console.log(calculateLosses({
//     tv: 30,
//     skate: 20,
//     stereo: 50,
//   }), 100)

//   console.log(calculateLosses({
//     ring: 30000,
//     painting: 20000,
//     bust: 1,
//   }), 50001)

//   console.log(calculateLosses({
//     chair: 3500,
//   }), 3500)

//   console.log(calculateLosses({}), "Lucky you!")

// function *orderBook(){

//     window.alert("You clicked on the button To Order A Book");
//     console.log("You Clicked on the button to Order A Book");

//     window.alert("You Added The Book to The Card");
//     console.log("You added the Book to the card");

//     window.alert("Payment done");
//     console.log("Payment done");
// }

// let order = orderBook();

// order.next();

// function * skills(){
//     yield "Html";
//     yield "CSs";
//     yield "js";
//     yield "Python";
// }

// let skill = skills();

// console.log(skill.next().value);
// console.log(skill.next().value);
// console.log(skill.next().value);
// console.log(skill.next().value);

// let iterator = skills();

// for (let skill of iterator) console.log(skill)

// function *sayNames(){
//     yield "muhammad";
//     yield "Dawoud";
//     return "Hello";
//     yield "ok";
// };

// let iterator = sayNames();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function capMe(ar){
//     return ar.map(word =>
//         word.charAt(0).toUpperCase()
//         +
//         word.slice(1).toLowerCase());
// }

// console.log(capMe(['maVIs', 'senaida', 'letty']));console.log(capMe(['mavis', 'senaida', 'letty']), ['Mavis', 'Senaida', 'Letty'])
// console.log(capMe(['samuel', 'MABELLE', 'letitia', 'meridith']), ['Samuel', 'Mabelle', 'Letitia', 'Meridith'])
// console.log(capMe(['Slyvia', 'Kristal', 'Sharilyn', 'Calista']), ['Slyvia', 'Kristal', 'Sharilyn', 'Calista'])
// console.log(capMe(['krisTopher', 'olIva', 'herminiA']), ['Kristopher', 'Oliva', 'Herminia'])
// console.log(JSON.stringify(capMe(['luke', 'marsha', 'stanford'])) == JSON.stringify( ['Luke', 'Marsha', 'Stanford']));
// console.log(capMe(['kara']), ['Kara'])
// console.log(capMe(['mARIANN', 'jOI', 'gEORGEANN']), ['Mariann', 'Joi', 'Georgeann'])

// function *genInfinite(){
//     let i = 0;
//     while(true){
//         yield i++;
//     }
// };

// let infiniteIterator = genInfinite();

// console.log(infiniteIterator.next().value);
// console.log(infiniteIterator.next().value);
// console.log(infiniteIterator.next());

// for (let num of genInfinite()){
//     if (num == 21) break;

//     console.log(num);
// }

// function *generateNums(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }

// function *generateNames(){
//     yield "Khaled";
//     yield "Ahmed";
//     yield "Dawoud";
// }

// function *generateAll(){
//     yield *generateNums();
//     yield *generateNames();

// }

// let iterator = generateAll();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function numOfSubbarrays(ar){
//     let num = ar.filter(ele =>
//         Array.isArray(ele)).length;

//     return num;
// };

// console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]));
// console.log(numOfSubbarrays([1, 2, 3]));
// console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]), 3)
// console.log(numOfSubbarrays([[1, 2, 3]]), 1)
// console.log(numOfSubbarrays([1, 2, 3]), 0)
// console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]), 4)

// let arOld = Array('100', 10, 1);
// let arNew = Array.of(100, 200, 10);
// console.log(arNew.length, arNew);
// console.log(arOld);
// console.log(arOld.length);

// let ar = Array(10, 20);
// console.log(ar.length);

// let ar2 = Array.of(10, 20);
// console.log(ar2.length);

// let name = "Dawoud";
// console.log(name);
// let ar = Array.from(name);
// ar.reverse();
// console.log(ar);

// let nums = [1, 2, 10, 20, 110, 200];

// let ar = (nums.map(num => num - 10));

// console.log(ar);

// let ar = Array.from(nums, num => num - 1);

// console.log(ar);

// console.log(nums.fill(100, 2, 5));

// function allTruthy(ar){
//     let result = ar.filter(ele => !ele).length ;

//     return !result;
// };

// console.log(allTruthy([true, true, true, true]));
// console.log(allTruthy([true, false, true]));
// console.log(allTruthy([5, 4, 3, 2, 1, 0]));

// let nums = [1, 10, 2, 5, 50, 100];

// let found = nums.find(num => num > 10);

// console.log(found);

// console.log(`${"*".repeat(30)}`);

// let found2 = nums.findIndex(num => num > 10);

// console.log(found2);

// let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

// letters.copyWithin(1, 5, 7);

// console.log(letters);

// function trace(ar)
// {
//     let sum = 0;
//     for (let sub in ar)
//         {sum += (ar[sub][sub]);}

//     return sum;
// };

// console.log(trace([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
// console.log(trace(
// 	[[1, 4],
// 	 [4, 1]]
// ), 2)

// console.log(trace(
// 	[[1, 2, 3],
// 	 [4, 5, 6],
// 	 [7, 8, 9]]
// ), 15)

// console.log(trace(
// 	[[12345]],
// ), 12345)

// console.log(trace(
// 	[[1, 0, 1, 0],
// 	 [0, 2, 0, 2],
// 	 [3, 0, 3, 0],
// 	 [0, 4, 0, 4]]
// ), 10)

// console.log(trace(
// 	[[0, 1, 0, 1],
// 	 [2, 0, 2, 0],
// 	 [0, 3, 0, 3],
// 	 [4, 0, 4, 0]]
// ), 0)

// console.log(trace(
// 	[[1, 8,  9, 16],
// 	 [2, 7, 10, 15],
// 	 [3, 6, 11, 14],
// 	 [4, 5, 12, 13]]
// ), 32)

// import {sayHello, a, myArray} from './app.js'
// console.log(sayHello("Dawoud"));

// console.log(a);

// for (let num of myArray) console.log(num);
// function findZip(sent){

//     let first = sent.indexOf('zip');
//     if (first === -1) return -1; // if zip is not found at all.
//     return sent.indexOf('zip', first + 1) ; // searching after the first occur to find the second occur.
// }

// console.log(findZip('all zip files are zipped'));
// console.log(findZip("all zip files are compressed"));
// console.log(findZip("all zip files are zipped"), 18)
// console.log(findZip("all zip files are compressed"), -1)
// console.log(findZip("We believe university-level zip education can be both high quality and low cost. Using the economics of the Internet, we've connected some of the greatest teachers to hundreds of thousands of students all over the world."), -1)
// console.log(findZip("Zip is a file format used for data compression and archiving. A zip file contains one or more files that have been compressed, to reduce file size, or stored as is. The zip file format permits a number of compression algorithms."), 169)

// import {number, hello} from './app.js';

// import * as everything from './app.js';

// console.log(everything.number);

// console.log(everything.hello("Khaled"));

// console.log(everything);

// for (let i of everything.ar) console.log(i);

// function largestEven(ar)
// {

//     let evens = ar.filter(num => num % 2 == 0);

//     let result = evens.length > 0? Math.max(...evens): -1;

//     return result;
// };

// console.log(largestEven([3, 7, , 1, 7, 9, 13, 2, 10]));
// console.log(largestEven([1, 3, 5, 7]));
// console.log(largestEven([0, 19, 18973623]));
// console.log(largestEven([3, 7, 2, 1, 7, 9, 10, 13]), 10)
// console.log(largestEven([1]), -1)
// console.log(largestEven([22]), 22)
// console.log(largestEven([13, 5, 7, 9]), -1)
// console.log(largestEven([3, 19, 18973623, 2]), 2)

// import say, {a, b} from './app.js';
// console.log(a, b);

// console.log(say);

// function boxSeq(n){
//     return n + (n % 2) * 2;
// }

// console.log(boxSeq(0));
// console.log(boxSeq(1));
// console.log(boxSeq(2));
// console.log(boxSeq(5), 7)
// console.log(boxSeq(0), 0)
// console.log(boxSeq(6), 6)
// console.log(boxSeq(99), 101)
// console.log(boxSeq(2), 2)
// console.log(boxSeq(1), 3)
// class user {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // console.log(user.prototype);
//     getInfo() {
//         console.log(`Your name is ${this.name} and age is : ${this.age} years old.`);
//     }
//     getDays() {
//         console.log(`Your age is : ${this.age * 365} days.`);
//     }
// };

// let user1 = new user("Dawoud", 24);

// user1.getInfo();
// user1.getDays();

// console.log(user1.name, user1.age);

// import User from './app.js'

// // let dawoud = new User("Dawoud", "Email@gmail.com");

// // console.log(dawoud.getInfo());

// class Admin extends User {
//     constructor(name, email){
//         super(name, email);
//     }
// };

// let dawoud = new Admin("Dawoud", "dawoud@gmail.com");

// console.log(dawoud.getInfo());

// function isTriplet(a, b, c){

//     let ar = [a, b, c].sort((a,b) => a-b);

//     let [s1, s2, t] = ar;

//     return (s1 ** 2 + s2 ** 2) === (t ** 2);

// }

// console.log(isTriplet(13, 5, 12));
// console.log(isTriplet(1, 2, 3));
// console.log(isTriplet(3, 4, 5), true)
// console.log(isTriplet(1, 2, 3), false)
// console.log(isTriplet(3, 18, 8), false)
// console.log(isTriplet(7, 12, 7), false)
// console.log(isTriplet(13, 5, 12), true)
// console.log(isTriplet(12, 20, 18), false)
// console.log(isTriplet(17, 14, 2), false)
// console.log(isTriplet(6, 15, 12), false)
// console.log(isTriplet(60, 61, 11), true)
// console.log(isTriplet(7, 13, 15), false)
// console.log(isTriplet(12, 18, 7), false)
// console.log(isTriplet(8, 17, 15), true)
// console.log(isTriplet(3120, 79, 3121), true)

// let i = 10;
// let j = 20;

// console.log(i+j);

// function first(){
//     console.log("Hello first");
// }

// function second(){
//     first();
//     console.log("Hello second");
// };

// second();

// console.log("One");
// woindow.setTimeout(() => console.log("Two"), 0);
// console.log("Three");

// window.setTimeout(()=>{
//     console.log(va);
// }, 0);
// let va = 100;

// va += 200;

// window.setTimeout(() => {
//     console.log("Last")
// }, 1000);

// console.log("One");
// setTimeout(()=> {console.log("Three")}, 0);

// console.log('Two');

// function reverseAndNot(num){

//   let revNot = 0;
//   while(num > 0){
//     revNot = (num % 10) + 10 * revNot;
//     num = Math.floor(num / 10);
//   };

//   let all = revNot;
//   while(revNot > 0){
//     all = (revNot % 10) + 10 * all;
//     // console.log(num % 10);
//     revNot = Math.floor(revNot / 10);
//   }

//   return all;

// };

// console.log(reverseAndNot(123));
// console.log(reverseAndNot(152));
// console.log(reverseAndNot(123456789));
// console.log(reverseAndNot(123), 321123)
// console.log(reverseAndNot(123456789), 987654321123456789)
// console.log(reverseAndNot(496), 694496)
// console.log(reverseAndNot(307), 703307)
// console.log(reverseAndNot(500), 5500)
// console.log(reverseAndNot(321), 123321)
// console.log(reverseAndNot(564), 465564)
// console.log(reverseAndNot(66), 6666)
// console.log(reverseAndNot(553), 355553)
// console.log(reverseAndNot(518), 815518)
// console.log(reverseAndNot(152), 251152)
// console.log(reverseAndNot(273), 372273)
// console.log(reverseAndNot(603), 306603)
// console.log(reverseAndNot(864), 468864)
// console.log(reverseAndNot(170), 71170)
// console.log(reverseAndNot(96), 6996)
// console.log(reverseAndNot(869), 968869)
// console.log(reverseAndNot(960), 69960)
// console.log(reverseAndNot(471), 174471)
// console.log(reverseAndNot(925), 529925)
// console.log(reverseAndNot(235), 532235)
// console.log(reverseAndNot(389), 983389)
// console.log(reverseAndNot(293), 392293)
// console.log(reverseAndNot(586), 685586)
// console.log(reverseAndNot(218), 812218)
// console.log(reverseAndNot(262), 262262)
// console.log(reverseAndNot(610), 16610)
// console.log(reverseAndNot(75), 5775)
// console.log(reverseAndNot(699), 996699)
// console.log(reverseAndNot(298), 892298)
// console.log(reverseAndNot(532), 235532)
// console.log(reverseAndNot(211), 112211)
// console.log(reverseAndNot(602), 206602)
// console.log(reverseAndNot(804), 408804)
// console.log(reverseAndNot(195), 591195)
// console.log(reverseAndNot(271), 172271)
// console.log(reverseAndNot(449), 944449)
// console.log(reverseAndNot(938), 839938)
// console.log(reverseAndNot(257) == 752257)
// console.log(reverseAndNot(205), 502205)
// console.log(reverseAndNot(345) == 543345)
// console.log(reverseAndNot(365), 563365)
// console.log(reverseAndNot(112) == 211112)
// console.log(reverseAndNot(792), 297792)
// console.log(reverseAndNot(777), 777777)
// console.log(reverseAndNot(759) == 957759)
// console.log(reverseAndNot(239), 932239)
// console.log(reverseAndNot(469), 964469)
// console.log(reverseAndNot(953), 359953)
// console.log(reverseAndNot(574), 475574)
// console.log(reverseAndNot(155) == 551155)
// console.log(reverseAndNot(238) == 832238)

// console.log("Fucntion to do something");

// setTimeout(()=>{
//     console.log("Get Friends list");
// }, 1000);

// setTimeout(()=> {
//     console.log("Get mom's list");
// }, 2000);

// console.log("Waiting is bad for the program.");

// function progressDays(ar){
//     let count = 0;
//     for (let i in ar)
//       {  i = +i;
//         if (i < ar.length - 1 && ar[i] < ar[i+1])
//             count ++;
//         }

//     return count;

// };

// console.log(progressDays([3, 4, 1, 2])); // 2
// console.log(progressDays([10, 11, 12, 9, 10])); // 3
// console.log(progressDays([6, 5, 4, 3, 2, 9])); // 1
// console.log(progressDays([9, 9]));
// console.log(progressDays([3, 4, 1, 2]), 2);
// console.log(progressDays([10, 11, 12, 9, 10]), 3);
// console.log(progressDays([6, 5, 4, 3, 2, 9]), 1);
// console.log(progressDays([9, 9]), 0);
// console.log(progressDays([12, 11, 10, 12, 11, 13]), 2);

// const myPromise = new Promise((resolve, reject)=>{
//     // console.log("Hello from my first promise");

//     let connect = 1;
//     if(connect){
//         resolve("connection established");
//     }
//     else{
//         reject(Error("connection Failed"));
//     }
// }).then(
//     (resolve) => console.log(resolve),
//     (reject) => console.log(reject)
// );

// const theResolved = (resolve) => console.log(resolve);
// const theReject = (reject) => console.log(reject);

// myPromise.then(theResolved, theReject);

// const promise = new Promise((resolve, reject)=> {
//     if(Math.random() * 100 < 70){
//         resolve("Good");
//     }
//     else{
//         reject("Bad");
//     }
// });

// promise.then(
//     (rs) =>  console.log(rs),
//     (rj) =>  console.log(rj)
// );

// const prmise = new Promise((resolv, rject) => {
//     if(Math.random() * 100 < 70){
//         resolv("Good");
//     }
//     else{
//         rject("Bad");
//     }
// }).then(null,
//     (rj) => console.log(rj)
// )
// .catch(
//     (rj) => console.log(rj)
// )

// const promise = new Promise((resolve, reject)=>{
//     // console.log("The first promise");
//     let food = false;
//     if(food){
//         resolve("Good and connected");
//     }

//     else{
//         reject(Error ("Bad and did not connect"));
//     }

// }).then(
//     (res) => console.log(res),
//     (rej) => console.log(rej)
// );

// const accept = (res) => console.log(res);
// const refuse = (rej) => console.log(rej);
// promise.then(
//     accept,
//     refuse
// );

// console.log(typeof(promise));
// let a = 2, b = 5;
// console.log(a + b);

// function uniqueArr(ar){

//     let pos = ar.filter(num => num > 0);

//     return [...new Set(pos)];
// };

// console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]));

// console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]), [1, 3])
// console.log(uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]), [3, 5])
// console.log(uniqueArr([-5, 3, 2, -4, 3, -1, -7, 2, 4, 4]), [3, 2, 4])
// console.log(uniqueArr([3, -5, 0, -5, 2, -1, 0, -4, -6, 1]), [3, 2, 1])
// console.log(uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]), [10, 6, 13, 5])
// console.log(uniqueArr([5, 10, -12, 5, 9, 5, 10, 9, 10, -12]), [5, 10, 9])
// console.log(uniqueArr([]), [])

// function countPosSumNeg(ar){

//     if(ar.length == 0) return [];

//     let sum = ar.filter(a => a < 0).reduce((a, b) => a+b, 0);
//     let count = ar.filter(n => n > 0).length;

//     return [count, sum];

// }

// console.log(countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
// console.log(countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]), [10, -65])
// console.log(countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]), [7, -252])
// console.log(countPosSumNeg([91, -4, 80, -73, -28]), [2, -105])
// console.log(countPosSumNeg([]), [])
// console.log(countPosSumNeg([69, 100, 28, 47, 53, -61, -24]), [5, -85])
// console.log(countPosSumNeg([5, 7, 9, -3, -7, 61, -24]), [4, -34])
// console.log(countPosSumNeg([98, 51, -19, -97]), [2, -116])
// console.log(countPosSumNeg([-42, 3, -51, -64, 69, 77, -20, -5, 68, -76]), [4, -258])

// function isPositiveDominant(ar){

//     let unique = [...new Set(ar)],

//     pos = unique.filter(num => num > 0),

//     neg = unique.filter(num => num < 0);

//     return pos.length > neg.length;

// };

// console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]));
// console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]), false)
// console.log(isPositiveDominant([5, 99, 832, -3, -4]), true)
// console.log(isPositiveDominant([5, 0]), true)
// console.log(isPositiveDominant([0, -4, -1]), false)
// console.log(isPositiveDominant([1, 2, 3, -1]), true)
// console.log(isPositiveDominant([1, 0, 0, -1]), false)
// console.log(isPositiveDominant([5, 4, 3, 0, 0, -1, -1, -2, -2]), true)
// console.log(isPositiveDominant([52, 52, 52, -3, 2, 2, 2, -4]), false)
// console.log(isPositiveDominant([3, 3, 3, 3, -1, -1, -1]), false)

// function countOnes(ar){

//     let flatAr = ar.flat();

//     return flatAr.filter(n => n == 1).length;

// };

// console.log(countOnes([[1, 0], [0, 0]]));
// console.log(countOnes([
// 	[1, 0, 1],
// 	[0, 0, 0],
// 	[0, 0, 1]
// ]), 3)

// console.log(countOnes([
// 	[1, 1, 1],
// 	[0, 0, 1],
// 	[1, 1, 1]
// ]), 7)

// console.log(countOnes([
// 	[1, 2, 3],
// 	[0, 2, 1],
// 	[5, 7, 33]
// ]), 2)

// console.log(countOnes([
// 	[5, 2, 3],
// 	[0, 2, 5],
// 	[5, 7, 33]
// ]), 0)

// console.log(countOnes([
// 	[5, 2],
// 	[0, 2],
// 	[5, 1]
// ]), 1)

// console.log(countOnes([
// 	[1, 1],
// 	[0, 1]
// ]), 3)

// console.log(countOnes([
// 	[0, 1],
// 	[0, 0]
// ]), 1)

// const promise = new Promise((resolve, reject) =>
//     {
//     //     reject("Failed");
//     //     resolve("Success");

//     if(Math.random() * 100 < 70) resolve("Good");
//     else reject("Not Good");

//     }
// )

// promise.then(
//     rs => console.log(rs)
// ).
// catch(
//     rj => console.log(rj)
// )

// promise.then(null,
//     rj => console.log(rj)
// )

// function isOmnipresent(ar, value){
//     let l = ar.length;
//     return ar.filter(sub => sub.includes(value)).length == l;
// };
// function isOmnipresent(ar, value){
//     return ar.every(sub => sub.includes(value));
// }

// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1), true)
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6), false)
// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5), true)
// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6), false)
// console.log(isOmnipresent([[5, 1], [5, 1], [5, 1], [6, 5, 1]], 1), true)

// function sumArray(ar){
//     let sum = ar.flat(Infinity).reduce((x, y) => x+y, 0);
//     return sum;
// };

// console.log(sumArray([1, [2 , [1]], 3, [[1], [[[3, [5]]]]]]));
// console.log(sumArray([1, 2, 3]), 6)
// console.log(sumArray([1, [1, 2], [3, 1]]), 8)
// console.log(sumArray([[1, 1], [2, 8], 8]), 20)
// console.log(sumArray([1, 2]), 3)
// console.log(sumArray([1, [2, [1]], 3]), 7)

// function flatten(arr) {
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//       arr2 = arr2.concat(arr[i]);
//     }
//     return arr2;
//   };

// console.log(flatten([[1, 2], [3, 4]]))
// console.log(flatten([[1, 2], [3, 4]]), [1, 2, 3, 4])
// console.log(flatten([['a', 'b'], ['c', 'd']]), ['a', 'b', 'c', 'd'])
// console.log(flatten([[true, false], [false, false]]), [true, false, false, false])

// function sumOfEvens(ar){
//     return ar.flat().filter(n => n % 2 == 0).reduce((s, u) => s + u, 0);
// };

// console.log(sumOfEvens([[1, 2, 3]]));
// console.log(sumOfEvens([
//     [1, 5, 1, 3],
//     [4, 1, 2, 0],
//     [6, 9, 7, 4],
//     [5, 1, 2, 6]
// ]), 24)

// console.log(sumOfEvens([
//     [1, 0, 1],
//     [33, 1, 2],
//     [15, 9, 1],
//     [5, 1, 979]
// ]), 2)

// console.log(sumOfEvens([
//     [2, 19, 5, 43],
//     [67, 2, 0, 12]
// ]), 16)

// console.log(sumOfEvens([
//     [1, 3, 7, 9],
//     [11, 13, 15, 17],
//     [19, 21, 23, 25]
// ]), 0)

// console.log(sumOfEvens([
//     [],
//     [],
//     []
// ]), 0)

// function charIndex(string, l){

//     let first = string.indexOf(l);

//     if(first == -1) return undefined;

//     let last = string.lastIndexOf(l);

//     return [first, last];
// };

// console.log(charIndex('hello', 'l'));
// console.log(charIndex("circumlocution", "c"));
// console.log(charIndex('happy', 'h'));
// console.log(charIndex('happy', 'e'));
// console.log(charIndex('hello', 'l'), [2, 3])
// console.log(charIndex('circumlocution', 'r'), [2, 2])
// console.log(charIndex('circumlocution', 'i'), [1, 11])
// console.log(charIndex('circumlocution', 'c'), [0, 8])
// console.log(charIndex('happy', 'h'), [0, 0])
// console.log(charIndex('happy', 'p'), [2, 3])
// console.log(charIndex('happy', 'e'), undefined)

// function sliceSum(ar, end){

//     let sum = ar.slice(0, end).reduce((x, y) => x+y, 0);

//     return sum;
// };

// console.log(sliceSum([9, 8, 7, 6], 3));
// console.log(sliceSum([4, 2, 5, 7], 4));
// console.log(sliceSum([3, 6, 2], 0));
// console.log(sliceSum([1, 3, 2], 2), 4)
// console.log(sliceSum([4, 2, 5, 7], 4), 18)
// console.log(sliceSum([3, 6, 2], 0), 0)
// console.log(sliceSum([2, 4], 9), 6)
// console.log(sliceSum([-5, 2], 2), -3)
// console.log(sliceSum([0, 0, 0, 3, 4], 3), 0)

// function add(a, b){
//     if(a && b) return `${+a + +b}`;
//     return "Invalid Operation";
// };

// console.log(add("91", '9'));
// console.log(add('91', '19'), '110');
// console.log(add('123456789', '987654322'), '1111111111');
// console.log(add('9999999', '1'), '10000000');
// console.log(add('300', '3000'), '3300');
// console.log(add('1000', '6200'), '7200');
// console.log(add('-10', '-20'), '-30');
// console.log(add('-100', '100'), '0');
// console.log(add('0', '6200') == '6200');
// console.log(add('', '6'), 'Invalid Operation');
// console.log(add('', undefined), 'Invalid Operation');
// console.log(add(null, '23') == 'Invalid Operation');
// console.log(add('', '20'),"Invalid Operation");

// function nextInLine(ar, num){

//     if( !ar || ar.length == 0) return "No array has been selectd";
//     ar.shift();
//     ar.push(num);

//     return ar;

// };

// console.log(nextInLine([5, 6, 7, 8, 9], 1));
// console.log(nextInLine([], 2));
// console.log(nextInLine([5,6,7,8,9], 1), [6,7,8,9 ,1])
// console.log(nextInLine([7,6,3,23,17], 10), [6,3,23,17,10])
// console.log(nextInLine([1,10,20,42], 6), [10,20,42,6])
// console.log(nextInLine(NaN,6),  "No array has been selected")
// console.log(nextInLine([0], 1), [1]);
// console.log(nextInLine('', 9));

// function filterUnique(ar){
//     return ar.filter(str => new Set(str).size == str.length);
// };

// console.log(filterUnique(['abb', 'abc', 'abcdb', 'aea', 'bbb']));
// console.log(filterUnique(['abb', 'abc', 'abcdb', 'aea', 'bbb']), ['abc'])
// console.log(filterUnique(['88', '999', '989', '9988', '9898']), [])
// console.log(filterUnique(['ABCDE', 'DDEB', 'BED', 'CCA', 'BAC']), ['ABCDE', 'BED', 'BAC'])
// console.log(filterUnique(['qrrs', 'srrq', 'qqrs', 'qq', 'ss', 'rs']), ['rs'])
// console.log(filterUnique(['abab', 'ba', 'ab', 'cc']), ['ba', 'ab'])

// function specialReverse(sent, letter){

//     return sent.split(" ").map
//     (word => word.startsWith(letter) ?
//      word.split('').reverse().join("")
//      : word).join(" ");

//     let stringArr = [];

//     let ar = sent.split(" ");

//     for (let word of ar)
//     {

//      if(word.startsWith(letter))

//            word = word.split("").reverse().join("");

//      stringArr.push(word);
//    }
//     return stringArr.join(" ");
// };

// console.log(specialReverse("He has a special and sea", 's'));
// console.log(specialReverse('word searches are super fun', 's') == 'word sehcraes are repus fun')
// console.log(specialReverse('first man to walk on the moon', 'm') == 'first nam to walk on the noom')
// console.log(specialReverse('peter piper picked pickled peppers', 'p') == 'retep repip dekcip delkcip sreppep')
// console.log(specialReverse('he went to climb mount everest', 'p') == 'he went to climb mount everest')

// getFirstRepo("https://api.github.com/users/ElzeroWebSchool/repos");

// const getFirstRepo = (apiURL) => {
//     return new Promise((resolve, reject) => {
//         let request = new XMLHttpRequest();

//         request.onload = function(){
//             if(this.readyState == 4 && this.status == 200){
//                 // console.log(this.responseText);
//                 console.log(JSON.parse(this.responseText)[0].name);
//                 resolve(JSON.parse(this.responseText)[0].name);
//             }
//             else{
//                 reject(Error(this.statusText));
//             }
//         }

//         request.open("GET", apiURL, true);

//         request.send();
//         }

//     );
// };

// getFirstRepo("https://api.github.com/users/ElzeroWebSchool/repos").then(
// result => console.log(result),
// error => console.log(error)
// )

// getFirstRepo("https://api.gthub.com/users/ElzeroWebSchool/repos").then(
//     result => {
//         let newElement = document.createElement('div');
//         let elementText = document.createTextNode(result);
//         newElement.append(elementText);
//         document.body.appendChild(newElement);

//     }, error => console.log(error)

//     )

// const promise = new Promise((resolve, reject) =>{
//     let thePosts = ["A", "B", "C", "D", "E", "F", "G","H"];
//     resolve(thePosts);
// });

// promise.then(
//     result => {
//         console.log(`The number of posts : ${result.length}`);
//         return result;
//     }
// ).then(res => {
//     console.log("*".repeat(40));
//     console.log("The first post is:", res[0]);
//     return res;
// }).then(res =>
//     {console.log("The last post is:", res.slice(-1)[0]);
//     console.log("Every page has 2 posts");
//     console.log("The number of pages:", res.length / 2)

//     })

// function countDigits(ar, typ){
//     if (typ == "odd") return ar.filter(ele => ele % 2).length;
// };

// console.log(countDigits([22, 53, 99, 61, 777, 8], 'odd'));

// function cubeDiagonal(volume){

//     let r =  Math.cbrt(volume);

//     let main = Math.sqrt(3) * r;

//     return parseFloat(main.toFixed(2));
// };

// console.log(cubeDiagonal(1157.625));
// console.log(cubeDiagonal(8), 3.46)
// console.log(cubeDiagonal(343), 12.12)
// console.log(cubeDiagonal(1157.625), 18.19)
// console.log(cubeDiagonal(12), 3.97)
// console.log(cubeDiagonal(1), 1.73)
// console.log(cubeDiagonal(48), 6.29)
// console.log(cubeDiagonal(1728), 20.78)

// fetch("https://api.github.com/users/ElzeroWebSchool/repos").then(
//     (result) => {
//         let allRepos = result.json();
//         console.log(allRepos);
//         return allRepos;
//     }).then(
//       repos => {
//         console.log(`The total number of repos is ${repos.length}`)
//         return repos;
//       }

//     ).then(
//         (repo) => {
//             console.log(`The first repo: ${repo[0].name}`);
//             return repo;
//         }
//     ).then(
//         repos => {
//             console.log(`The last repo: ${repos.slice(-1)[0].name}`);
//             return repos;
//         }
//     ).then(
//         (repos) => {
//             for (let repo in repos) {
//                 // console.log(repos[repo].name)
//                 let element = document.createElement("div");
//                 let text = document.createTextNode(repos[repo].name);
//                 element.appendChild(text);
//                 document.body.appendChild(element);

//             }
//             return repos;
//         }
//     )

// function upwardTrend(ar){

//     let ifStringFound = ar.filter(ele => typeof (ele) == 'string');

//     if(ifStringFound.length > 0) return "Strings not permitted!";

//     for (let i = 1; i < ar.length; i++){
//         if (ar[i] < ar[i-1]) return false;
//     };
//     return true;
// }
// console.log(upwardTrend([1, 2, 3, 6, 7, '4']));
// console.log(upwardTrend([1, 2, 3, 4, 5, 6]), true)
// console.log(upwardTrend([1, 3, 2, 5, 6, 7]), false)
// console.log(upwardTrend([1, 2, 3, 4, 5, "6", 7, 8, 9]) == "Strings not permitted!")
// console.log(upwardTrend([1, 3, 5, 7, 9]), true)
// console.log(upwardTrend([10, 12, 13, 15, 20]), true)
// console.log(upwardTrend([6, 9, 11, 15, 12]), false)

// const promise1 = new Promise((resolve, reject)=>{
//     let connect = false;
//     if(connect) resolve("Resolved1");
//     else reject("Rejected1");
// });

// const promise2 = new Promise((resolve, reject)=>{
//     let setting = true;
//     if (setting) resolve("Resolved2");
//     else reject("Rejected2");
// });

// Promise.all([promise1, promise2]).then(
//     res => console.log(res)
// );

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("At first our promise resolved")
//     }, 50);
// });

// const second = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("At second our promise resolved")
//     }, 100)
// });

// promise.then(
//     res => console.log(res)
// )

// second.then(
//     res => console.log(res)
// )
// Promise.race([promise, second]).then(
//     res => console.log(res)
// )

// function equal(a, b, c){
//     let set = new Set([a, b, c]), num = set.size;
//     if (num == 3) return 0;
//     else if (num == 2) return 2;
//     else if (num == 1) return 3;
// };

// console.log(equal(2, 2, 2));
// console.log(equal(2,3,4), 0, "All values are differents");
// console.log(equal(7,3,7), 2, "Two values are equal");
// console.log(equal(4,4,4), 3, "All 3 values are equal");
// console.log(equal(7,3,4), 0, "All values are differents");
// console.log(equal(3,3,6), 2, "Two values are equal");
// console.log(equal(1,1,1), 3, "All 3 values are equal");
// console.log(equal(1,7,6), 0, "All values are differents");
// console.log(equal(7, 7, 7), 3, "All 3 values are equal");

// function freeShipping(obj){

//     let sum = Object.values(obj).reduce((x, y) => x + y, 0);

//     return sum > 50;
// };

// console.log(freeShipping({one:20, two:30}));
// console.log(freeShipping({'Shampoo' : 5.99, 'Rubber Ducks': 15.99}), false)
// console.log(freeShipping({'Flatscreen TV': 399.99}), true)
// console.log(freeShipping({'Monopoly': 11.99, 'Secret Hitler': 35.99, 'Bananagrams': 13.99}), true)
// console.log(freeShipping({'Scrabble': 12.32, 'Jenga': 5.55, 'Clue': 20.00}), false)
// console.log(freeShipping({'Elephant Plushie': 40.55, 'Octopus Plushie': 20.33, 'Spongebob Plushie': 20.00}), true)

// console.log("Hello World");

// window.onload = function () {document.querySelector("h1").style.color = "blue";
//     document.querySelector("h1").style.backgroundColor = "blue";
// };

// document.querySelector("h1").style.backgroundColor = "red";

/**
 * This is multiline comment.
 */

// console.log("Error");
// console.error("this is an error");

// console.table(["Dawoud", "Khaled", "Hager"]);

// console.log("%cHello From %cJs File", "color:red; font-size:40px;", "color:white; background:red;")

// function sumOddAndEven(ar){
//     let even = ar.filter(num => num % 2 == 0).reduce((x, y) => x + y, 0);
//     let odd = ar.filter(num => num % 2).reduce((x, y) => x + y, 0);
//     return [even, odd];
// };

// console.log(sumOddAndEven([0, 0]));
// console.log(sumOddAndEven([1, 2, 3, 4, 5, 6]), [12, 9])
// console.log(sumOddAndEven([-1, -2, -3, -4, -5, -6]), [-12, -9])
// console.log(sumOddAndEven([0, 0]), [0, 0])
// console.log(sumOddAndEven([]), [0, 0])

// function totalVolume(...boxes){

//     let sum = 0;

//     for (let ar of boxes)
//         sum += ar.reduce((x, y) => x * y);

//     return sum;
// };

// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]), 63)
// console.log(totalVolume([2, 2, 2], [2, 1, 1]), 10)
// console.log(totalVolume([1, 1, 1]), 1)
// console.log(totalVolume([5, 1, 10], [1, 9, 2]), 68)
// console.log(totalVolume([1, 1, 5], [3, 3, 1]), 14)

// const name = "Dawoud";
// const concat = "His name is : " + name;
// console.log(concat);

// let a = "We love", b = "Javascript", c = ' ';
// console.log(a + c + b);

// let total = a + c + b + ".";
// document.write(total);

// console.log(a, b);

// let total2 = `${a} ${b}`;
// console.log(total2);

// let a = "We love",
// b = "Javascript",
// c = "And",
// d = "Programming.";

// console.log(a, b , c, d);
// console.log(a + " \"\" " + b +
//     "\n" + c + " " + d);

// console.log(`${a} "" ${100 * 5} \\
// ${c} ${d}`);

// let title = "This is the title";
// let sent = "This is our sentence to show as a p element.";
// let markUp = `
//     <div class = "parent">
//     <div class = "child">
//     <h2> ${title} </h2>
//     <p> ${sent}</p>
//     </div>
//     </div>
// `;

// document.write(markUp);

// let titleName = "Dawoud.",
//     paragContent = "This is our school.",
//     dateTime = "25/10";

// let result = `
//     <div class = "card">
//     <h3> Hello, ${titleName} </h3>
//     <p> ${paragContent} </p>
//     <span> ${dateTime} </span>
//     </div>
// `;

// for (let i = 0 ; i < 4; i++)
// document.write(result);

// document.write(result.repeat(50));

// function toArray(num){

//     let result =  Array.from(num.toString(), Number);

//     return result;
// };

// console.log(toArray(235));

// function toNumber(ar){

//     return Number(ar.join(""));

// };

// console.log(toNumber([2, 3, 5]));
// console.log(toArray(235), [2, 3, 5])
// console.log(toArray(19), [1, 9])
// console.log(toArray(0), [0] )
// console.log(toNumber([2, 3, 5]), 235)
// console.log(toNumber([1, 9]), 19)
// console.log(toNumber([0]), 0)

// function DECIMATOR(str){
//     let len = str.length;
//     let remove = Math.ceil(len / 10);
//     return str.slice(0, len - remove );
// };

// console.log(DECIMATOR("This is good"));
// console.log(DECIMATOR("1234567890") , "123456789")
// console.log(DECIMATOR("1234567890AB") , "1234567890")
// console.log(DECIMATOR("123") == "12")
// console.log(DECIMATOR("123456789012345678901") == "123456789012345678")
// console.log(DECIMATOR("ABCDEFGHIJKLMNOPQRSTUVWXYZ") == "ABCDEFGHIJKLMNOPQRSTUVW")
// console.log(DECIMATOR("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz") == "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrst")
// console.log(DECIMATOR("A"), "")
// console.log(DECIMATOR(""), "")

// function oneOddOneEven(num){

//     let second =  num % 10,

//     first = Math.floor(num / 10) ;

//     return (first % 2) + (second % 2) == 1;
// };

// console.log(oneOddOneEven(22));
// console.log(oneOddOneEven(10), true)
// console.log(oneOddOneEven(11), false)
// console.log(oneOddOneEven(12), true)
// console.log(oneOddOneEven(13), false)
// console.log(oneOddOneEven(14), true)
// console.log(oneOddOneEven(15), false)
// console.log(oneOddOneEven(16), true)
// console.log(oneOddOneEven(17), false)
// console.log(oneOddOneEven(18), true)
// console.log(oneOddOneEven(19), false)
// console.log(oneOddOneEven(20), false)
// console.log(oneOddOneEven(21), true)
// console.log(oneOddOneEven(22), false)
// console.log(oneOddOneEven(23), true)
// console.log(oneOddOneEven(24), false)
// console.log(oneOddOneEven(25), true)
// console.log(oneOddOneEven(26), false)
// console.log(oneOddOneEven(27), true)
// console.log(oneOddOneEven(28), false)
// console.log(oneOddOneEven(29), true)
// console.log(oneOddOneEven(30), true)
// console.log(oneOddOneEven(31), false)
// console.log(oneOddOneEven(32), true)
// console.log(oneOddOneEven(33), false)
// console.log(oneOddOneEven(34), true)
// console.log(oneOddOneEven(35), false)
// console.log(oneOddOneEven(36), true)
// console.log(oneOddOneEven(37), false)
// console.log(oneOddOneEven(38), true)
// console.log(oneOddOneEven(39), false)
// console.log(oneOddOneEven(40), false)
// console.log(oneOddOneEven(41), true)
// console.log(oneOddOneEven(42), false)
// console.log(oneOddOneEven(43), true)
// console.log(oneOddOneEven(44), false)
// console.log(oneOddOneEven(45), true)
// console.log(oneOddOneEven(46), false)
// console.log(oneOddOneEven(47), true)
// console.log(oneOddOneEven(48), false)
// console.log(oneOddOneEven(49), true)
// console.log(oneOddOneEven(50), true)
// console.log(oneOddOneEven(51), false)
// console.log(oneOddOneEven(52), true)
// console.log(oneOddOneEven(53), false)
// console.log(oneOddOneEven(54), true)
// console.log(oneOddOneEven(55), false)
// console.log(oneOddOneEven(56), true)
// console.log(oneOddOneEven(57), false)
// console.log(oneOddOneEven(58), true)
// console.log(oneOddOneEven(59), false)
// console.log(oneOddOneEven(60), false)
// console.log(oneOddOneEven(61), true)
// console.log(oneOddOneEven(62), false)
// console.log(oneOddOneEven(63), true)
// console.log(oneOddOneEven(64), false)
// console.log(oneOddOneEven(65), true)
// console.log(oneOddOneEven(66), false)
// console.log(oneOddOneEven(67), true)
// console.log(oneOddOneEven(68), false)
// console.log(oneOddOneEven(69), true)
// console.log(oneOddOneEven(70), true)
// console.log(oneOddOneEven(71), false)
// console.log(oneOddOneEven(72), true)
// console.log(oneOddOneEven(73), false)
// console.log(oneOddOneEven(74), true)
// console.log(oneOddOneEven(75), false)
// console.log(oneOddOneEven(76), true)
// console.log(oneOddOneEven(77), false)
// console.log(oneOddOneEven(78), true)
// console.log(oneOddOneEven(79), false)
// console.log(oneOddOneEven(80), false)
// console.log(oneOddOneEven(81), true)
// console.log(oneOddOneEven(82), false)
// console.log(oneOddOneEven(83), true)
// console.log(oneOddOneEven(84), false)
// console.log(oneOddOneEven(85), true)
// console.log(oneOddOneEven(86), false)
// console.log(oneOddOneEven(87), true)
// console.log(oneOddOneEven(88), false)
// console.log(oneOddOneEven(89), true)
// console.log(oneOddOneEven(90), true)
// console.log(oneOddOneEven(91), false)
// console.log(oneOddOneEven(92), true)
// console.log(oneOddOneEven(93), false)
// console.log(oneOddOneEven(94), true)
// console.log(oneOddOneEven(95), false)
// console.log(oneOddOneEven(96), true)
// console.log(oneOddOneEven(97), false)
// console.log(oneOddOneEven(98), true)
// console.log(oneOddOneEven(99), false)

// class Circle {
//     constructor(radius){
//         this.radius = radius;
//     };

//     getPerimeter(){
//         return (Math.PI * 2 * this.radius);
//     };
//     getArea(){
//         return (Math.PI * Math.pow(this.radius, 2));
//     }
// };

// // let circy = new Circle(4.44);

// // circy.getPerimeter();

// let circy = new Circle(11);

// circy.getArea();

// function round(number) {
//     var factor = Math.pow(10, 5);
//     return Math.round(number * factor) / factor;
//   }
//   let circo = new Circle(20);
// console.log(round(circo.getArea()), 1256.63706);
// console.log(round(circo.getPerimeter()), 125.66371);
//   let circo1 = new Circle(2);
// console.log(round(circo1.getArea()), 12.56637);
// console.log(round(circo1.getPerimeter()), 12.56637);
//   let circo2 = new Circle(4.4);
// console.log(round(circo2.getArea()), 60.82123);
// console.log(round(circo2.getPerimeter()),  27.64602);
//   let randomInt = round(Math.floor(Math.random() * Math.floor(200)));
//   //scroll down for spoilers that are hard to use

// class circle{
//     constructor(radius){
//         this.radius = radius;
//     }

//     getArea(){
//         console.log(Math.PI * 2 * this.radius);
//     }
// }

// class Person {
//     constructor(name){
//         this.name = name;
//     };
//     showName(){
//         console.log(`His name is: ${this.name}`);
//     }
// }

// new Person("Dawoud").showName();

// function isIsogram(string){
//     let len = string.length;
//     let siz = new Set (string.toLowerCase()).size;

//     return siz === len;
// };

// console.log(isIsogram("Algorism"));
// console.log(isIsogram("Consecutive"));
// console.log(isIsogram("Algorism"), true)
// console.log(isIsogram("PasSword"), false)
// console.log(isIsogram("Dermatoglyphics"), true)
// console.log(isIsogram("Cat"), true)
// console.log(isIsogram("Filmography"), true)
// console.log(isIsogram("Consecutive"), false)
// console.log(isIsogram("Bankruptcies"), true)
// console.log(isIsogram("Unforgivable"), true)
// console.log(isIsogram("Unpredictably"), true)
// console.log(isIsogram("Moose"), false)

// function findNaN(ar){
//     // for (let i = 0; i < ar.length; i++){
//     //     if(isNaN(ar[i])) return i;
//     // }
//     // return -1;

//     return ar.findIndex(isNaN);
// }

// console.log(findNaN([NaN, 1, 2, 3, 4]));
// console.log(findNaN([1, 2, NaN]));
// console.log(findNaN([0, 1, 2, 3, 4]));
// console.log(findNaN([1, 2, NaN, 3]), 2)
// console.log(findNaN([1, 2, 3, NaN, 3, 4, 5, 3]), 3)
// console.log(findNaN([1, 2, 3, 4 ,5]), -1)
// console.log(findNaN([NaN, 2, 3, 4]), 0)
// console.log(findNaN([1, 2, 3]), -1)

// function mirror(ar){
//     return [...ar, ...ar.slice(0, -1).reverse()];
// };

// console.log(mirror([0, 2, 4, 6]));
// console.log(mirror([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5, 4, 3, 2, 1])
// console.log(mirror([0, 2, 4, 6]), [0, 2, 4, 6, 4, 2, 0])
// console.log(mirror([1, 2, 2, 3, 3, 4]), [1, 2, 2, 3, 3, 4, 3, 3, 2, 2, 1])

// let name = "Hello\\Dawoud You\\ are the best programmer if you train enough ";

// console.log(name.indexOf("o"), name.lastIndexOf("o")); // 4

// console.log(name.slice(7,  13));

// console.log(name.slice(-5, -2))

// console.log(name.repeat(2));
// console.log(name.split("\\", 2))

// function warOfNumbers(ar){
//     let oddSum = 0, evenSum = 0;
//     for (let n of ar){
//         if(n % 2 == 0) evenSum += n;
//         else{oddSum += n};
//     };
//     return Math.abs(oddSum - evenSum);
// };

// console.log(warOfNumbers([2, 8, 7, 5])); // 2
// console.log(warOfNumbers([12, 90, 75])); // 27
// console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243])); // 168

// console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]), 168)
// console.log(warOfNumbers([654, 7, 23, 3, 78, 4, 56, 34]), 793)
// console.log(warOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]), 5)
// console.log(warOfNumbers([97 ,83, 209, 141, 134, 298, 110, 207, 229, 275, 115, 64, 244, 278]), 228)
// console.log(warOfNumbers([332, 92, 35, 315, 109, 168, 320, 230, 63, 323, 16, 204, 105, 17, 226, 157, 245, 44, 223, 136, 93]), 83)
// console.log(warOfNumbers([322, 89, 36, 310, 297, 157, 251, 55, 264, 244, 200, 304, 25, 308, 311, 269, 303, 257, 6, 311, 307, 310, 50, 46, 54, 237, 59, 105, 267]), 846)
// console.log(warOfNumbers([50, 100, 149, 1, 200, 199, 3, 2]), 0)

// const str  = "Elzero Web School";

// console.log(str.substring(6, 2));
// console.log(str.slice(2, 6));

// console.log(str.slice(0, 6));
// console.log(str.substring(-12, 6));

// console.log(str.length); // 17
// console.log(str.substring(str.length -1));
// console.log(str.slice(str.length -1));
// console.log(str.slice(-1));

// console.log(str.substr(str.length - 5, 2));
// console.log(str.substr(-5, 2))
// console.log(str.includes('Web', 8));

// console.log(str.startsWith("z", 2));
// console.log(str.endsWith("l", str.length))

// const string = "Elzero Web School";

// // to slice the Zero word

// console.log(string.slice(0, 6));
// console.log(string.charAt(13).toUpperCase().repeat(8));

// console.log(string.split(" ", 1));

// console.log(`${string.substr(0, 6)} ${string.substr(11)}`);

// let fLetter = string.charAt(0).toUpperCase(),
// sLetter = string.charAt(1).toUpperCase();

// console.log(`${fLetter}${sLetter}${string.slice(2).toLowerCase()}`)

// console.log(10 == "10", 10 === '10');
// console.log(-100 == '-100');
// console.log(100 === '100')
// console.log(10 != 10);

// console.log(10 === '10');
// console.log(100 !== "100");
// console.log(100 !== 100);

// function testJackpot(ar){
//     return new Set(ar).size === 1;
// };

// console.log(testJackpot(['abc', 'abc', 'abc', 'abc']));
// console.log(testJackpot(['@', '@', '@', '@']), true)
// console.log(testJackpot(['!', '!', '!', '!']), true)
// console.log(testJackpot(['abc', 'abc', 'abc', 'abc']), true)
// console.log(testJackpot(['karaoke', 'karaoke', 'karaoke', 'karaoke']), true)
// console.log(testJackpot(['SS', 'SS', 'SS', 'SS']), true)
// console.log(testJackpot([':(', ':)', ':|', ':|']), false)
// console.log(testJackpot(['&&', '&', '&&&', '&&&&']), false)
// console.log(testJackpot(['hee', 'heh', 'heh', 'heh']), false)
// console.log(testJackpot(['SS', 'SS', 'SS', 'Ss']), false)
// console.log(testJackpot(['SS', 'SS', 'Ss', 'Ss']), false)

// const ar = [1, 1 , 1];
// console.log(ar.every(ele => ele === ))

// function getTotalPrice(ar){
//     let total = 0;
//     for (let obj of ar){
//         total += obj.quantity * obj.price;
//     }
//     return Math.round(total * 10) / 10;
// };

// console.log(getTotalPrice([{product:"Milk", quantity:1, price:1.5}]));
// console.log(getTotalPrice([
// 	{ product: "Milk", quantity: 1, price: 1.50 }
// ]), 1.5)

// console.log(getTotalPrice([
// 	{ product: "Milk", quantity: 1, price: 1.50 },
// 	{ product: "Cereals", quantity: 1, price: 2.50 }
// ]), 4)

// console.log(getTotalPrice([
// 	{ product: "Milk", quantity: 3, price: 1.50 }
// ]), 4.5)

// console.log(getTotalPrice([
// 	{ product: "Milk", quantity: 1, price: 1.50 },
// 	{ product: "Eggs", quantity: 12, price: 0.10 },
// 	{ product: "Bread", quantity: 2, price: 1.60 },
// 	{ product: "Cheese", quantity: 1, price: 4.50 }
// ]), 10.4)

// console.log(getTotalPrice([
// 	{ product: "Chocolate", quantity: 1, price: 0.10 },
// 	{ product: "Lollipop", quantity: 1, price: 0.20 }
// ]), 0.3)

// function transformUpvotes(string){

//     let ar = string.split(" ");

//     return ar.map(ele => ele.includes("k") ? parseFloat(ele) * 1000 : parseFloat(ele));

// };

// console.log(transformUpvotes("6.8k 13.5k"));
// console.log(transformUpvotes("5.5k 8.9k 32"));
// console.log(transformUpvotes("20.3k 3.8k 7.7k 992"));
// console.log(transformUpvotes('20.3k 3.8k 7.7k 992'), [20300, 3800, 7700, 992])
// console.log(transformUpvotes('5.5k 8.9k 32'), [5500, 8900, 32])
// console.log(transformUpvotes('6.8k 13.5k'), [6800, 13500])
// console.log(parseFloat("221k"))

// const idDiv = document.getElementById("our-div");
// console.log(idDiv);

// let witTag = document.getElementsByTagName("p");

// console.log(witTag[1]);

// witTag[0].innerHTML = "Hello World";

// console.log(witTag[0])

// const classElement = document.getElementsByClassName("my-span");

// console.log(classElement)

// let element = document.querySelector("#our-div");
// console.log(element);

// let ele = document.querySelectorAll(".my-span");

// console.log(ele[1]);

// console.log(document.title);
// console.log(document.body);

// console.log(document.forms[1].two.value);

// console.log(document.links[1]);
// console.log(document.forms[1].two.type)

// function evenOrOdd(string){
//     let ar = string.split("").map(Number);
//     let even = ar.filter(n => n % 2 == 0).reduce((x, y) => x +y, 0);
//     let odd = ar.filter(n => n % 2 == 1).reduce((s, i) => s + i, 0);

//     if (even > odd) return "Even is greater than Odd";
//     else if (even == odd) return "Even and Odd are the same";
//     else return "Odd is greater than Even";
// };

// console.log(evenOrOdd("23456"));
// console.log(evenOrOdd('12345')=== 'Odd is greater than Even')
// console.log(evenOrOdd('143')=== 'Even and Odd are the same')
// console.log(evenOrOdd('2221')=== 'Even is greater than Odd')
// console.log(evenOrOdd('23456')=== 'Even is greater than Odd')
// console.log(evenOrOdd('4321')=== 'Even is greater than Odd')
// console.log(evenOrOdd('3245')=== 'Odd is greater than Even')
// console.log(evenOrOdd('14256')=== 'Even is greater than Odd')
// console.log(evenOrOdd('11234')=== 'Even is greater than Odd')
// console.log(evenOrOdd('1734')=== 'Odd is greater than Even')
// console.log(evenOrOdd('145')=== 'Odd is greater than Even')
// console.log(evenOrOdd('22471')=== 'Even and Odd are the same')
// console.log(evenOrOdd('213613')=== 'Even and Odd are the same')
// console.log(evenOrOdd('23456')=== 'Even is greater than Odd')
// console.log(evenOrOdd('9738')=== 'Odd is greater than Even')
// console.log(evenOrOdd('34522')=== 'Even and Odd are the same')
// console.log(evenOrOdd('12378')=== 'Odd is greater than Even')
// console.log(evenOrOdd('45228')=== 'Even is greater than Odd')
// console.log(evenOrOdd('4455')=== 'Odd is greater than Even')
// console.log(evenOrOdd('6721')=== 'Even and Odd are the same')
// console.log(evenOrOdd('92184')=== 'Even is greater than Odd')
// console.log(evenOrOdd('12')=== 'Even is greater than Odd')
// console.log(evenOrOdd('123')=== 'Odd is greater than Even')
// console.log(evenOrOdd('112')=== 'Even and Odd are the same')
//     // console.log(evenOrOdd('124')=== 'Even is greater than Odd')
//     let ourElement = document.querySelector(".js");

//     console.log(ourElement.innerHTML);
//     console.log(ourElement.textContent);

//     ourElement.textContent = "Text from the <span> Main2 js.</span> file";

// console.log(ourElement)

// document.images[0].src = 'https://www.google.com';

// document.images[0].alt = "This is alternate";

// document.images[0].title = "Picture";

// document.images[0].id = "pic";

// document.images[0].className = "pic";

// let ourLink = document.querySelector('.link');
// console.log(ourLink.getAttribute("href"))
// console.log(ourLink.getAttribute("class"));
// ourLink.setAttribute('class', "OurLink");
// ourLink.setAttribute("href", "https://www.twitter.com");

// ourLink.innerHTML = "Twitter";
// ourLink.setAttribute("title", "X")

// function moveToEnd(ar, ele){
//     return [...ar.filter(n => n !== ele) , ...ar.filter(n => n === ele)];
// };

// console.log(moveToEnd([1, 3, 2, 4, 4, 1], 1));
// console.log(moveToEnd([7, 8,9, 1, 2,3,4], 9));
// console.log(moveToEnd(['a', 'a', 'a', 'b'], 'a'));
// console.log(moveToEnd([1, 3, 2, 4, 4, 1], 1), [3, 2, 4, 4, 1, 1])
// console.log(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9), [7, 8, 1, 2, 3, 4, 9])
// console.log(moveToEnd([7, 7, 7, 6, 6, 6, 6], 7), [6, 6, 6, 6, 7, 7, 7])
// console.log(moveToEnd(["a", "c", "c", "c", "b", "c"], "b"), ["a", "c", "c", "c", "c", "b"])
// console.log(moveToEnd(["a", "c", "c", "c", "b", "c"], "c"), ["a", "b", "c", "c", "c", "c"])
// console.log(moveToEnd(["a", "a", "a", "b"], "a"), ["b", "a", "a", "a"])

// console.log(document.getElementsByTagName("p")[0].attributes)

// const ele = document.getElementsByTagName("p")[0];

// if (ele.hasAttribute('data-src')){
//     if (!ele.getAttribute("data-src")){
//         ele.removeAttribute("data-src")
//     }
//     else{
//         ele.setAttribute("data-src", "hello")
//     }
// }
// else{
//     console.log("Not found")
// };

// console.log(ele.getAttribute("data-src"));
// if (ele.hasAttributes()){
//     console.log(`I have found many atts`)
// }

// if (document.getElementsByTagName("div")[0].hasAttributes()){
//     console.log(`div has atts`)
// }
// else{
//     console.log(`Div has not atts`)
// }

// function nextSquare(n){
//     let root = Math.sqrt(n);

//     if (Number.isInteger(root)) return (root + 1) ** 2;
//     else return null;
// };

// console.log(nextSquare(121));
// console.log(nextSquare(114));
// console.log(nextSquare(121) == 144, "Wrong output for 121")
// console.log(nextSquare(625) == 676, "Wrong output for 625")
// console.log(nextSquare(319225) == 320356, "Wrong output for 319225")
// console.log(nextSquare(15241383936) == 15241630849, "Wrong output for 15241383936")
// console.log(nextSquare(155), null, "Wrong output for 155")
// console.log(nextSquare(342786627), null, "Wrong output for 342786627")
// //Mubashir

// let ele = document.createElement('div');
// let myAtt = document.createAttribute("data-custom");
// let text = document.createTextNode("Dawoud is good");
// let comment = document.createComment("This is Div");
// ele.setAttributeNode(myAtt);
// ele.setAttribute("data-test", 'test');
// ele.className = "product";
// ele.appendChild(text);
// ele.appendChild(comment);
// document.body.appendChild(ele)
// console.log(ele);

// for (let i=0; i < 100; i++){
//     let div = document.createElement('div');
//     div.setAttribute("class", "product");
//     let h2 = document.createElement("h2");
//     div.appendChild(h2)
//     let name = document.createTextNode("Product Name");
//     h2.appendChild(name);
//     let p = document.createElement("p");
//     div.appendChild(p);
//     let des = document.createTextNode(`This is the details of our product ${i+1}`);
//     p.appendChild(des);
//     document.body.appendChild(div);

// }

// function cubeSquareRoot(n){
//     return Math.sqrt(n) ** 3;
// };

// console.log(cubeSquareRoot(1646089));
// console.log(cubeSquareRoot(81) == 729)
// console.log(cubeSquareRoot(1646089) == 2111932187)
// console.log(cubeSquareRoot(695556) == 580093704)

// function divisibleByB(a, b){
//     return Math.ceil(++a/b) * b;
// };

// // console.log(divisible(14, 11));
// console.log(divisibleByB(16, 8), 24)
// console.log(divisibleByB(98, 3), 99)
// console.log(divisibleByB(14, 11), 22)
// console.log(divisibleByB(11, 8), 16)
// console.log(divisibleByB(450, 36), 468)
// console.log(divisibleByB(1019, 13), 1027)

// function rightTriangle(a, b, z){

//     let ar = [a, b, z].sort((a, b) => a -b);

//     if(ar.every(n => n > 0))

//         return Math.pow(ar[0], 2) + Math.pow(ar[1],2) == Math.pow(ar[2], 2);

//     else return false;
// };

// console.log(rightTriangle(4, 3, 5));
// console.log(rightTriangle(145, 105, 100));
// console.log(rightTriangle(70, 130, 110));
// console.log(rightTriangle(3, 4, 5), true)
// console.log(rightTriangle(145, 105, 100), true)
// console.log(rightTriangle(70, 130, 110), false)
// console.log(rightTriangle(60, 60, 60), false)
// console.log(rightTriangle(0, 4, 4), false, "A triangle can't have an edge of length 0.")
// console.log(rightTriangle(-3, 4, 5), false, "A triangle can't have edges of negative length.")
// console.log(rightTriangle(115, 277, 252), true)
// console.log(rightTriangle(140, 170, 220), false)
// console.log(rightTriangle(915, 1748, 1973), true)

// function sumFive(ar){

//     let sum = 0;

//     for (let num of ar)
//         if (num > 5) sum += num;

//     return sum;
// };

// console.log(sumFive([1, 5, 20, 30, 4, 9, 18]), sumFive([1, 2, 3, 4]));
// console.log(sumFive([1,5,20,30,4,9,18]), 77)
// console.log(sumFive([1,2,3,4]), 0)
// console.log(sumFive([10,12,28,47,55,100]), 252)
// console.log(sumFive([25,44,6,4,3,36]), 111)
// console.log(sumFive([5,2,150,187,254,0]), 591)
// console.log(sumFive([1000,2500,2,4,500,400]), 4400)
// console.log(sumFive([125.5,147.2,548.6,2.3,1.5]), 821.3)

// function binaryToDecimal(ar){
//     return parseInt(ar.join("") , 2);
// };

// console.log(binaryToDecimal([0, 0, 1, 0]));
// console.log(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]));
// console.log(binaryToDecimal([0,0,0,1]), 1)
// console.log(binaryToDecimal([0,0,1,0]), 2)
// console.log(binaryToDecimal([1,1,1,1]), 15)
// console.log(binaryToDecimal([0,1,1,0]), 6)
// console.log(binaryToDecimal([1,0,1,0,1,1,1]), 87)
// console.log(binaryToDecimal([1,1,1,1,1,0,1,1,0,1]), 1005)
// console.log(binaryToDecimal([1,1,1,1,1,0,1,1,1,0,1]), 2013)

// let div = document.querySelector("div");

// console.log(div.children[1])

// let nodes = div.childNodes;
// for (let node of nodes){
//     console.log(node);
// }

// console.log(div.firstChild);
// console.log(div.lastChild);

// function identicalFilter(ar){
//     return ar.filter(n => new Set(n).size === 1);
// };

// console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]))
// console.log(identicalFilter(['aaaaaa', 'bc', 'd', 'eeee', 'xyz']),
// ['aaaaaa', 'd', 'eeee'])

// console.log(identicalFilter(['88', '999', '22', '545', '133']),
// ['88', '999', '22'])

// console.log(identicalFilter(['xxxxo', 'oxo', 'xox', 'ooxxoo', 'oxo']),
// [])

// console.log(identicalFilter(['aa', 'bb', 'cc', 'dd', 'ee']),
// ['aa', 'bb', 'cc', 'dd', 'ee'])

// console.log(identicalFilter(['aba', 'bcb', 'abb', 'bcc', 'eee']),
// ['eee'])

// console.log(identicalFilter(['1', '2', '3']),
// ['1', '2', '3'])

// let btn = document.getElementById('btn');

// window.onresize = function(){
//     console.log('hello')
// }

// function zipIt(firstAr, secondAr){

//     let l1 = firstAr.length, l2 = secondAr.length, ar = [];

//     if (l1 !== l2) return "sizes don't match";

//     else
//     {
//         for (let i = 0; i < l1; i++){
//             ar.push([firstAr[i], secondAr[i]])
//         }
//     }
//     return ar;
// };

// console.log(JSON.stringify(zipIt(["Elise", "Mary"], ["John", "Rick"])));
// console.log(JSON.stringify(zipIt(["Elise", "Mary"], ["John", "Rick"])), JSON.stringify([["Elise", "John"], ["Mary", "Rick"]]));
// console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]), "sizes don't match");
// console.log(JSON.stringify(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])), JSON.stringify([["Ana", "Bob"], ["Amy", "Josh"], ["Lisa", "Tim"]]));
// console.log(JSON.stringify(zipIt(["Ana", "Amy", "Lisa", "Katty"], ["Bob", "Josh", "Tim"])), "sizes don't match");
// console.log(JSON.stringify(zipIt(["Katty", "Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim", "Aaron"])), JSON.stringify([["Katty", "Bob"], ["Ana", "Josh"], ["Amy", "Tim"], ["Lisa", "Aaron"]]));

// document.links[0].onmouseenter = function(event){
//     console.log(event);
// }

// document.links[0].onclick = function(event){
//     event.preventDefault();
//     console.log(event);
// }

// let userInput = document.querySelector('[name="username"]');
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit = function(e){
//     let user = false, age = false;
//     if(userInput.value !== "" && userInput.value.length <= 10){
//         user = true;

//     }
//     if (ageInput.value.length > 0){
//         age = true;
//     }
//     if (!user || !age){
//         e.preventDefault();
//         // console.log(userInput.value.length)
//     }
// }

// let element = document.getElementById("my-div");
// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("one"));
// console.log(element.classList.contains("dawoud"))

// console.log(element.classList.item("1"))

// element.onclick = function(){
//     element.classList.toggle("onehey")
// }

// function evenOddTransform(ar, n){
//     return ar.map(num => num % 2 ? num + n * 2 : num - n * 2);
// };

// console.log(evenOddTransform([3, 4, 9], 3));
// console.log(evenOddTransform([0, 0, 0], 10));
// console.log(evenOddTransform([1, 2, 3], 1));
// console.log(evenOddTransform([3, 4, 9], 3), ([9, -2, 15]))
// console.log(evenOddTransform([0, 0, 0], 10), ([-20, -20, -20]))
// console.log(evenOddTransform([1, 2, 3], 1), ([3, 0, 5]))
// console.log(evenOddTransform([55, 90, 830], 2), ([59, 86, 826]))

// let element = document.getElementById("my-div");

// element.style.color = 'blue';
// element.style.backgroundColor = "grey";
// element.style.fontWeight = "bold"

// element.style.cssText = "background-color:red;color:blue; padding:10px;margin-top:100px;font-weight:bold;opacity:.5";

// element.style.removeProperty('background-color');

// element.style.removeProperty("color");

// element.style.setProperty("color", "red", "important");

// element.style.setProperty("font-size", "30px", "important");

// (document.styleSheets[0].rules[0].style.removeProperty('line-height'));

// console.log(document.styleSheets[0].rules[0].style);

// document.styleSheets[0].rules[0].style.setProperty('background-color', "blue")

// function binary(n){
//     return n.toString(2);
// };

// console.log(binary(5))
// console.log(binary(100), "1100100")
// console.log(binary(1)=== "1")
// console.log(binary(0)=== "0")
// console.log(binary(69)=== "1000101")
// console.log(binary(1023)=== "1111111111")
// console.log(binary(511)=== "111111111")
// console.log(binary(666)=== "1010011010")
// console.log(binary(123), "1111011")

// function counterpartCharCode(letter){

//     if (letter === letter.toUpperCase())

//         return letter.toLowerCase().charCodeAt(0);

//     return letter.toUpperCase().charCodeAt(0);
// };
// console.log(counterpartCharCode("A"));
// // Normal letters
// console.log(counterpartCharCode('a'), 65)
// console.log(counterpartCharCode('A'), 97)
// console.log(counterpartCharCode('l'), 76)
// console.log(counterpartCharCode('L'), 108)
// console.log(counterpartCharCode('z'), 90)
// console.log(counterpartCharCode('Z'), 122)

// // Accented / weird letters
// console.log(counterpartCharCode('è'), 200)
// console.log(counterpartCharCode('È'), 232)
// console.log(counterpartCharCode('Œ'), 339)
// console.log(counterpartCharCode('œ'), 338)
// console.log(counterpartCharCode('Ⱥ'), 11365)
// console.log(counterpartCharCode('ⱥ'), 570)

// These don't have a counterpart, you should return the input's char code
// console.log(counterpartCharCode('5'), 53)
// console.log(counterpartCharCode('$'), 36)

// const element = document.getElementById("my-div");

// let createP = document.createElement("p");
// let text = document.createTextNode("World Hello !");
// createP.appendChild(text)
// element.before("Hello From js");
// element.after(createP)

// element.append(createP);

// element.prepend(createP);

// element.remove();

// function lastDig(a, b, c){

//     let last1 = a % 10, last2 = b % 10, last3 = c % 10;

//     return (last1 * last2 ) % 10 === last3;

// };

// console.log(lastDig(12, 215, 2142));
// console.log(lastDig(1, 1, 1), true)
// console.log(lastDig(12, 15, 10), true)
// console.log(lastDig(15228, 9209, 72162), true)
// console.log(lastDig(15, 1, 1), false)
// console.log(lastDig(123, 15, 10), false)
// console.log(lastDig(5213, 99219, 6165), false)
// console.log(lastDig(1523, 513, 512), false)
// console.log(lastDig(-15, 1, 1), false, "Should work with negative numbers.")
// console.log(lastDig(123, -15, 10), false, "Should work with negative numbers.")
// console.log(lastDig(-12, 15, -10), true, "Should work with negative numbers.")
// console.log(lastDig(15228, -9209, -72162), true, "Should work with negative numbers.")

// function sumFoundIndexes(ar, n){

//     let sum = 0;

//     for (let i = 0; i < ar.length ; i++)
//         if (ar[i] == n) sum += i;

//     return sum;

// };

// console.log(sumFoundIndexes([100, 100, 100, 100, 100], 100));
// console.log(sumFoundIndexes([0, 3, 3, 0, 0, 3], 3), 8)
// console.log(sumFoundIndexes([1, 2, 3, 4, 5, 6], 3), 2)
// console.log(sumFoundIndexes([100, 100, 100, 100, 100], 100), 10)
// console.log(sumFoundIndexes([5, 10, 15, 20], 2), 0)
// console.log(sumFoundIndexes([5, 10, 15, 20], 5), 0)
// console.log(sumFoundIndexes([2, 1, 7, 6, 3, 10, 6, 1, 3, 9, 1, 9, 3, 3, 9, 10, 4, 6, 3, 2, 5, 3, 0, 1, 0, 1, 9, 4, 8, 0, 5], 2), 19)
// console.log(sumFoundIndexes([10, 9, 9, 3, 9, 2, 4, 5, 5, 10, 10, 2, 0, 8, 0, 6, 2, 1, 4, 5, 5, 0, 3, 1, 5, 3, 2, 9, 8, 3, 1, 7, 4, 3, 8, 6, 7, 1, 3, 1, 10, 7, 1, 8, 8, 1, 3, 3, 7, 0, 6, 8, 6, 2, 1, 4, 0, 4, 7, 2, 1, 5, 3, 9, 7, 7, 3, 10, 9, 7, 10, 6, 0, 0, 0, 6, 0, 1, 0, 2, 4, 1, 7, 10, 4, 10, 2, 1, 0, 9], 3), 371)
// console.log(sumFoundIndexes([7, 10, 8, 2, 1, 2, 1, 7, 3, 10, 0, 6, 9, 3, 9, 9], 9), 41)
// console.log(sumFoundIndexes([1, 10, 4, 9, 4, 6, 5, 5, 3, 3, 4, 9, 4, 10, 7, 1, 0, 5, 0, 1, 3, 7, 7, 7, 4, 2, 3, 10, 2, 9, 5, 1, 10, 5, 5, 2, 10, 2, 1, 8, 2, 3, 4, 1, 10, 7, 3, 8, 10, 4, 9, 10, 3, 2, 4, 10, 4, 8, 6], 2), 218)
// console.log(sumFoundIndexes([9, 1, 5, 6, 9, 10, 6, 8, 8, 4, 8, 8, 2, 10, 5, 10, 3, 1, 0, 0, 4, 9, 7, 10, 7, 4, 2, 1, 3, 3, 10, 0, 10, 8, 0, 8, 2, 5, 2, 2, 0, 10, 6, 6, 1, 4, 8, 2, 5, 9, 5, 6, 3, 1, 10, 3, 8, 6, 8, 3, 4, 0, 3, 1, 6], 1), 205)
// console.log(sumFoundIndexes([2, 7, 1, 9, 1, 4, 8, 1, 0, 4, 4, 5], 9), 3)
// console.log(sumFoundIndexes([1, 9, 5, 7, 3, 6, 5, 10, 7, 9, 2, 1, 2, 9, 5, 1, 7, 3, 6, 2, 1, 6, 9, 8, 1, 2, 10, 3, 8, 9, 6, 7, 10, 8, 9, 10, 2, 2, 6, 7, 3, 9, 1, 2, 1, 3, 7, 5, 10], 7), 143)
// console.log(sumFoundIndexes([5, 2, 8, 3, 9, 3, 8, 3, 7, 1, 4, 6, 5, 7, 1, 3, 3, 8, 6, 0, 3, 8, 6, 10, 5, 10, 2, 6, 8, 7, 0, 10, 0, 6, 8, 1, 6, 9, 8, 8, 6, 7, 9, 1, 8, 4, 3, 8, 5, 3, 2], 1), 101)
// console.log(sumFoundIndexes([10, 10, 6, 10, 9, 9, 4, 0, 4, 1, 3, 4, 9, 6, 4, 5, 0, 1, 7, 8, 3, 4, 3, 3, 5, 1, 4, 7], 4), 86)
// console.log(sumFoundIndexes([0, 2, 8, 1, 1, 8, 3, 9, 8, 10, 4, 9, 7, 9, 4, 5, 5, 7, 4, 3, 2, 5, 6, 10, 5, 4, 9, 4, 7, 3, 10, 10, 10, 6, 2, 0, 5, 8, 6, 4, 6, 7, 5, 2, 8, 7, 2, 6, 1, 9, 3, 5, 0, 0, 5, 6, 2, 8, 6, 0, 0, 8, 1, 1, 0], 6), 293)
// console.log(sumFoundIndexes([10, 2, 5, 10, 1, 9, 10, 7, 7, 8, 4, 0, 7, 0, 9, 1, 0, 0, 3, 4, 5, 9, 10, 3, 1, 1, 9, 6, 7, 0, 8, 3, 4, 7, 0, 7, 7, 5, 3, 10, 3, 1, 1, 5, 5, 5, 1, 0, 10, 7, 3, 5, 1, 7, 1, 2, 1, 0, 7, 3, 2, 0, 0, 2, 3, 9, 6, 8, 0, 6, 0, 3, 0, 9, 10, 3, 1, 1, 3, 5, 1, 1, 8, 1, 3, 1, 6, 6, 3, 9, 7], 8), 188)
// console.log(sumFoundIndexes([0, 9, 1, 8, 1, 4, 3, 7, 9, 0, 0, 4, 9, 10, 4, 7, 6, 3, 8, 7, 7, 8, 8, 5, 4, 3, 8, 3, 8, 7, 3, 1, 6, 9, 6, 6, 6, 8, 9, 9, 6, 5, 0, 1, 4, 0, 2, 1, 4, 8, 7, 5, 7, 3, 3, 2, 4, 8, 3, 0, 3, 6, 10, 8, 5, 2, 9, 10, 5, 10, 2, 1, 1, 3, 8, 0, 7, 5, 8, 1, 8, 6, 10, 8, 10, 4, 2, 6], 5), 324)
// console.log(sumFoundIndexes([1, 9, 5, 5, 7, 5, 2, 4, 3, 9, 0, 5, 3, 2, 5, 9, 6, 9, 3], 1), 0)
// console.log(sumFoundIndexes([5, 4, 10, 2, 5, 5, 5, 0, 5, 2, 8, 8, 5, 3], 5), 35)
// console.log(sumFoundIndexes([4, 3, 2, 2, 4, 5, 5, 5, 1, 3, 8, 1, 8, 9, 0, 10], 9), 13)
// console.log(sumFoundIndexes([1, 8, 2, 9, 1, 8, 4, 0, 10, 0, 6, 10, 9, 7, 9, 4, 5, 2, 7, 7, 8, 1, 6, 2, 6, 0, 2, 7, 4, 8, 10, 2, 0, 0, 1, 2, 9, 9, 10, 3, 10, 8, 8, 5, 9, 3, 9, 1, 5, 4, 6, 7, 6, 8, 3, 10, 5, 8, 9, 2, 1, 5, 4, 2, 8, 9, 1, 1, 9, 7, 4, 9, 7, 7, 0, 4, 10, 3, 2, 8, 9, 0, 9, 1, 2, 1, 3, 1], 9), 616)
// console.log(sumFoundIndexes([6, 0, 7, 9, 2, 4, 0, 2, 9, 8, 6, 1, 2, 9, 2, 4, 2, 8, 3, 9, 9, 7, 3, 0, 9, 10, 9, 9, 3, 1, 2, 9, 6, 1, 4, 0, 2, 6, 9, 3, 3, 8, 3, 3, 5, 0, 2, 4, 10, 0, 1, 4, 3, 3, 2, 5, 6, 5, 0, 9, 0, 7, 4, 0, 3, 3, 7, 9, 3, 8, 7, 3, 4, 10, 5, 2, 7, 3, 2, 4, 1, 3, 5, 9, 0, 7, 10, 6, 6, 2, 1], 6), 310)
// console.log(sumFoundIndexes([1, 5, 0, 4, 3, 0, 4, 8, 10, 10, 3, 2, 2, 0, 2, 10, 2, 1, 3, 6, 4, 3, 6, 6, 0, 4, 9, 6, 0, 4, 1, 7, 3, 4, 3, 4, 9, 4, 5, 4, 2, 0, 4, 4, 7, 7, 7, 5, 9, 6, 0, 1, 7, 6, 5, 6, 0, 8, 7, 0, 5, 5, 6, 5, 0, 8, 5, 8, 6, 1, 6, 5, 5, 4, 7, 3, 7, 0, 2, 1, 7, 10], 1), 246)
// console.log(sumFoundIndexes([7, 8, 1, 2, 8, 6, 7, 10, 0, 4, 6, 9, 5, 10, 8, 2, 4, 9, 9, 7, 10, 2, 6, 9, 6, 5, 9, 1, 5, 7, 2, 7, 5, 3, 10, 2, 7], 5), 97)
// console.log(sumFoundIndexes([4, 5, 3, 0, 9, 9, 7, 4, 6, 4, 7, 3, 1, 8, 3], 2), 0)
// console.log(sumFoundIndexes([0, 1, 1, 9, 6, 5, 4, 5, 7, 4, 8, 6, 10, 6], 2), 0)
// console.log(sumFoundIndexes([0, 10, 4, 4], 9), 0)
// console.log(sumFoundIndexes([8, 6, 9, 3, 10, 6, 7, 5, 4, 8, 9, 9, 6, 8, 0, 1, 3, 3, 1, 4, 5, 7, 9, 9, 2, 9, 3, 7, 10, 8, 7, 3, 9, 9, 9, 10, 9, 3, 5, 4, 5, 9, 6, 2, 6, 1, 3, 8], 10), 67)
// console.log(sumFoundIndexes([7, 6, 1, 0, 8, 1, 4, 9, 4, 10, 9, 4, 1, 7, 10, 0, 9, 8, 1, 2, 10, 10], 6), 1)
// console.log(sumFoundIndexes([1, 10, 7, 2, 7, 4, 9, 4, 1, 1, 2, 2, 1, 0, 4, 5, 0], 6), 0)
// console.log(sumFoundIndexes([2, 0, 9, 8, 10, 1, 4, 5, 1, 10, 5, 8, 6, 7, 0, 7, 7, 9, 8, 8, 4, 0, 8, 7, 4, 4, 3, 9, 5, 3, 3, 10, 2, 0, 4, 4, 7, 8, 3, 1, 5, 3, 9, 8, 4, 1, 7, 1, 0, 6, 8, 3, 2, 1, 8, 9, 3, 6, 10, 10, 9, 5, 2, 4, 8, 4, 8, 10, 7, 8, 4, 7, 6, 6, 9, 1, 5, 5, 8, 1, 0, 5, 4, 1, 10, 6, 7, 2, 2], 7), 374)
// console.log(sumFoundIndexes([1, 10, 9, 3, 1, 3, 5, 8, 7, 5, 6, 6, 5, 8], 5), 27)
// console.log(sumFoundIndexes([1, 5, 4, 6, 1, 2, 6, 7, 3, 8, 2, 4, 4, 2, 5, 5, 10, 2, 2, 6, 9, 1, 2, 5, 0, 3, 7, 3, 8, 2, 7, 9, 10, 0, 0, 2, 1, 4, 6, 10, 2, 0, 6, 9, 1, 7, 2, 1, 7, 3, 7, 7, 9, 9, 0, 10, 3, 10, 9, 1, 6, 10, 6, 3, 5, 2, 8, 10, 7, 10], 4), 62)
// console.log(sumFoundIndexes([2, 10, 8, 2, 3, 1, 5, 4, 9, 0, 9, 2, 7, 5, 8, 10, 0, 3, 7, 7, 10], 10), 36)
// console.log(sumFoundIndexes([3, 7, 3, 8, 7, 9, 7, 2, 7, 4, 3, 4, 3, 5, 7, 0, 4, 10, 1, 9, 1, 5, 9, 4, 8, 9, 2, 3, 8, 6, 9, 10, 0, 6, 9, 0, 2, 4, 9, 10, 9, 6, 0, 9, 6, 0, 2, 4, 9, 10, 7, 9, 7, 2, 4, 5, 9, 4, 3, 8, 3, 1, 0, 3, 2, 0, 0, 10, 3, 2, 7, 10, 5, 4, 5, 5, 6, 7, 3, 3, 8, 8, 9, 8], 9), 493)
// console.log(sumFoundIndexes([3, 3, 4, 0, 5, 8, 4, 3, 9, 3, 8, 10, 1, 6, 0, 4, 2, 9, 2, 3, 8, 2, 8, 4, 0, 8, 6, 1, 9, 0, 9, 3, 7, 4, 10, 6, 8, 4, 8, 9, 0, 4, 0, 2, 7, 2, 3, 2, 5, 1, 0, 9, 0, 4, 7, 10, 1, 1, 3, 3, 8, 4, 8, 7, 2, 7, 6, 0], 6), 140)
// console.log(sumFoundIndexes([5, 8, 1, 9, 2, 2, 8, 10, 1, 2, 10, 6, 9, 2, 10, 0, 8, 1, 6, 5, 7, 5, 8, 8, 5, 8, 4, 6, 2, 10, 8, 2, 6, 3, 4, 3, 3, 3, 2, 1, 4, 6, 5, 9, 1, 10, 1, 9, 2, 6, 5, 10], 4), 100)
// console.log(sumFoundIndexes([9, 2, 2, 4, 1, 1, 10, 0, 0, 0, 0, 0, 10, 0, 10, 7, 0, 6, 10, 0, 2, 8, 5, 9, 6, 5, 9, 4, 9, 5, 9, 0, 3, 7, 5, 5, 9, 10, 2, 7, 7, 0, 0, 8, 6, 5, 10], 3), 32)
// console.log(sumFoundIndexes([8, 6, 4, 3, 7, 8, 1, 10, 0, 7, 9, 1, 4, 6, 4], 10), 7)
// console.log(sumFoundIndexes([4, 9, 7, 3, 10, 2, 2, 4, 0, 1, 1, 6, 5, 5, 1, 8, 8, 8, 3, 7, 3, 9, 3, 8, 8, 6, 7, 6, 2, 7, 9, 8, 9, 1, 7, 2, 3, 9, 5, 7, 9, 7, 5, 3, 0, 4, 3, 6, 5], 7), 190)
// console.log(sumFoundIndexes([6, 8, 0, 4, 8, 5, 6, 4, 10, 6, 3, 8, 9, 5, 6, 2, 7, 4, 8, 3, 4, 4, 8, 4, 8, 9, 3, 0, 8, 3, 2, 9, 8, 7, 7, 8, 7, 10, 9, 0], 7), 119)
// console.log(sumFoundIndexes([2, 6, 2, 4, 4, 6, 0, 10, 1, 8, 9, 5, 6, 5, 9, 1, 8, 4, 8, 9, 7, 8, 1, 0, 8, 5, 4, 1, 6, 3, 4, 10, 5, 1, 7, 5, 1, 2, 3, 6, 7, 0, 9, 4, 4, 5, 2, 7, 2, 0, 6, 3, 6, 0, 5, 1, 0, 8, 5, 8, 3, 9, 5, 6, 1, 8, 1, 7, 9, 3, 8, 3, 0, 8, 8, 4, 4, 9, 2, 7, 3, 3, 10, 10, 9, 4, 5, 0, 0, 3, 10, 9, 4, 2], 4), 495)
// console.log(sumFoundIndexes([4, 6, 10, 1, 3, 1, 4, 0, 6, 7, 1, 2, 7, 2, 4, 4, 7, 0, 3, 0, 4, 9, 7, 3, 1, 9, 5, 8, 8, 10, 7, 6, 0, 8, 10, 6, 9, 3, 10, 3, 10, 5, 10, 6], 10), 185)
// console.log(sumFoundIndexes([8, 4, 3, 1, 10, 4, 3, 10], 7), 0)
// console.log(sumFoundIndexes([4, 9, 5, 4, 8, 0, 0, 5, 6, 4, 5, 4, 5, 0, 1, 4, 10, 9, 7, 4, 0, 8, 1, 1, 1, 2, 1, 0], 5), 31)
// console.log(sumFoundIndexes([4, 4, 9, 3, 3, 9, 3, 9, 7, 3, 9, 5, 10, 0, 9, 0, 8, 10, 6, 9, 8, 6, 8, 0, 2, 3, 2, 0, 2, 1, 6, 4, 2, 1, 4, 4, 5, 7, 10, 2, 5, 2, 7, 2, 2, 10, 8, 0, 10, 8, 9, 3, 6, 8, 4, 8, 6, 5, 0, 2, 4, 9, 4, 6, 1, 1, 6, 0, 9, 2, 8, 7, 0, 8, 10, 0, 0, 3, 2, 10, 6, 7, 7, 3, 8, 10, 3, 9, 6, 0, 7, 1, 3, 7, 9, 10, 7, 4, 6, 0], 6), 572)
// console.log(sumFoundIndexes([9, 1, 7, 6, 5, 7, 4, 10, 7, 8, 1, 10, 10, 4, 4, 4, 7, 3, 8, 4, 1, 6, 1, 7, 7, 10, 9, 7, 8, 7, 5, 6, 10, 6, 4, 10, 9, 9, 4, 0, 0, 5, 6, 9, 3, 9, 8], 4), 139)
// console.log(sumFoundIndexes([7, 4, 4, 2, 10, 10, 2, 0, 4, 7, 2, 4, 9, 8, 5, 10, 2, 1, 3, 1, 3, 5, 3, 5, 10, 0, 1, 5, 4, 10, 3, 9, 9, 7, 10, 6, 2, 0, 2, 5, 0, 3, 9, 6, 2, 1, 4, 3, 6, 4, 9, 5], 3), 178)
// console.log(sumFoundIndexes([4, 6, 1, 7, 1, 7, 10, 8, 10, 5, 3, 6, 1, 8, 8, 3, 1, 4, 1, 8, 7, 10, 8, 0, 0, 9, 6, 8, 9, 6, 6, 5, 0, 7, 0, 8, 0, 8, 8, 7, 8, 7, 3, 7, 8, 10, 3, 7, 6, 6, 9, 9, 9, 5, 3, 9, 5, 3, 6, 7, 10, 0, 5, 3, 2, 5], 4), 17)
// console.log(sumFoundIndexes([2, 3, 6, 6, 5, 7, 7, 0, 5, 0, 0, 2, 6, 9, 5, 0, 3, 7, 1, 1, 8, 4, 2, 2, 9, 0, 10, 0, 10, 7, 7, 9, 7, 2, 0, 7, 4, 9, 3, 5, 7, 5, 7, 6, 10, 7, 1, 1, 7, 8, 10, 7, 8, 0, 5, 4, 1, 5, 7, 0, 2, 9, 10, 0, 0, 1, 7, 10, 5, 5, 10], 3), 55)
// console.log(sumFoundIndexes([7, 7, 10, 9, 9, 1, 9, 6, 4, 8, 2, 7, 10, 0, 0, 4, 0, 3, 10, 6, 4, 4, 7, 7, 1, 10, 6, 1, 5, 8, 1, 6, 0, 3, 7, 9, 3, 5, 10, 10, 2, 10, 0, 6, 3, 6, 4, 8, 6, 9, 9, 3, 8, 1, 10, 2, 3, 7, 1, 3, 0, 6, 9, 3, 4, 0, 5, 4, 3, 0, 1, 1, 4, 5, 2, 1, 7, 7, 9, 0, 5, 1, 4, 10, 5, 4, 3, 0, 9, 4, 0, 5, 10], 1), 494)
// console.log(sumFoundIndexes([9, 6, 7, 1, 0, 10, 5, 9, 3, 3, 0, 5, 0, 6, 1, 10, 1, 2, 6, 10, 2, 2, 1, 9, 9, 4, 3, 4, 5, 1, 1, 5, 0, 8, 4, 4, 2, 3, 9, 8, 8, 10, 5, 6, 2, 5, 6, 7, 8, 10, 9, 1, 10, 5, 0, 3, 7, 6, 10, 10, 4, 10, 1, 0, 4, 8, 2, 3, 3, 2, 4, 8, 6, 6], 3), 270)
// console.log(sumFoundIndexes([9, 4, 0, 0, 5, 5, 6, 7, 9, 10, 0, 10, 6, 6, 4, 8, 0, 6, 4, 5, 5, 3, 3, 7, 1, 7, 6], 9), 8)
// console.log(sumFoundIndexes([0, 1, 9, 3, 4, 6, 1, 6, 6, 1, 4, 2, 5, 7, 9, 0, 7, 1, 3, 8, 5, 7, 9, 4, 0, 4, 7, 10, 4, 3, 10, 8, 4, 5, 6, 1, 0, 10, 6, 3, 6, 8, 9, 5, 2, 6, 10, 2, 1, 7, 9, 2, 6, 8, 5], 7), 125)
// console.log(sumFoundIndexes([3, 2, 5, 0, 8, 5, 6, 1, 8, 7, 5, 10, 2, 2, 8, 8, 3, 6, 2, 4, 2, 9, 6, 7, 6, 5, 8, 8, 4, 0, 10, 7, 1, 7, 7, 10, 3, 3, 3, 5, 2, 1, 7, 2, 1, 8, 10, 7, 0, 9, 7, 7, 8, 6, 6, 7, 5, 10, 4, 5, 2, 1, 10, 5, 2, 9, 3], 4), 105)

// let two = document.querySelector(".two");

// console.log(two.nextSibling);
// console.log(two.nextElementSibling)

// // two.nextElementSibling.remove();
// // two.nextSibling().remove();
// two.nextElementSibling().remove();

// two.nextElementSibling.remove();
// console.log(two.previousElementSibling)

// console.log(two.previousElementSibling)

// console.log(two.previousElementSibling);

// console.log(two.parentElement)

// two.onclick = function(){
//     this.parentElement.style.opacity = 0;
//     // console.log("hello")
// };

// let myP = document.querySelector("p").cloneNode(true);
// let myDiv = document.querySelector("div");
// myP.textContent = "Do it right now";
// myP.id = `${myP.id}-new`;
// myP.className = "ourPNew"
// myDiv.appendChild(myP);
// console.log(myP)

// let ourP = document.querySelector("p");

// ourP.onclick = function(){
//     console.log(`Hello`);
// };
// ourP.onclick = two;
// ourP.onclick = one;

// function one(){
//     console.log(`click number 1`);
// }

// function two(){
//     console.log(`click number 2`)
// }

// window.onload = "Dawoud";

// ourP.addEventListener("click", ()=>{
//     console.log(`The click event`);
// })

// ourP.addEventListener("click", one);
// ourP.addEventListener("click", two);

// ourP.addEventListener("click", "dawoud")

// ourP.onclick = function(){
//     let  newP = ourP.cloneNode(true);

//     newP.className = "new";
//     document.body.append(newP);
//     // let clone = document.querySelector(".new");
// };

// document.addEventListener("click", (e)=>{
//     if (e.target.className == "new") e.target.style.color = "red";
// })

// document.body.style.backgroundColor = "lightgrey";
// let big = document.createElement("div");

// for (let i = 1; i < 101; i++){
//     let div = document.createElement("div");
//     let span = document.createElement('span');
//     let text1 = document.createTextNode("product");
//     let p = document.createElement("div");
//     let num = document.createTextNode(`${i}`);

//     p.appendChild(num);
//     div.appendChild(p)
//     p.style.fontWeight = "bold";
//     p.style.fontSize = "25px";
//     span.appendChild(text1);
//     div.style.width  = "31%"
//     div.style.display = "inline-block"
//     div.style.height = "80px"
//     div.style.backgroundColor = "white";
//     div.style.margin = "6px";
//     span.style.color = "#787575";
//     span.style.fontSize = '15px';
//     div.append(span);
//     p.style.lineHeight = "45px";

//     big.appendChild(div);

// }
// big.style.flexWrap = 'wrap';
// big.style.display = "flex";
// big.style.justifyContent = "center";
// big.style.textAlign = "center"
// document.body.appendChild(big);

// function inclusiveArray(start, end){
//     let ar = [];
//     do {
//         ar.push(start)
//         start += 1;
//     } while(start <= end)

//     return ar;
// };

// console.log(inclusiveArray(17, 5));
// let [actual, expected] = [
//     [[1, 5], [2, 8], [10, 20], [17, 5], [40, 50], [1, 41], [24, 17], [11, 66], [9, 3], [6, 16]],
//     [[1, 2, 3, 4, 5],
//     [2, 3, 4, 5, 6, 7, 8],
//     [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//     [17],
//     [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41],
//     [24],
//     [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66],
//     [9],
//     [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]]
//   ]
//   for (let i in actual) console.log(inclusiveArray(...actual[i]), expected[i])

// let names = ["Khaled", "Ahmed", "Hager", ["Shady", "Sarah", ["Muham", "Gamal"]]];

// // let [x, y, z , [c, d, [f, m]]] = names;

// // console.log(x, y, z, c, d, f, m);

// let [ , , , [ a, , [ , b ] ] ] = names;

// console.log(a, b);

// console.log(names[3][2][1])

// let a = 10, b = 2;
// console.log(a, b);
// let alternative = a;

// a = b;

// b = alternative;

// console.log(a, b);

// [a,  b] = [b, a];

// console.log(a, b);

// const user = {
//     name: "Dawoud",
//     age: 24,
//     country: "Egypt",
//     title:"Developer",
//     theColor:"black",
//     skills:{
//         html:70,
//         css:80
//     }
// };

// let name = user.name;
// let age = user.age;
// let country = user.country;
// let title = user.title;
// let name, age, country, title;
// ({name, age, country, title} = user);
// let {name, age ,  title} = user;
// let {name, country} = user;
// console.log(name, country);

// let {skills:{html:h, css: c}} = user;

// console.log(`The progress of html: ${h}`)
// console.log(`The progress of css: ${c}`)

// let {html: skillOne, css: skillTwo} = user.skills;

// console.log(`progress of html: ${skillOne}`);
// console.log(`progress of css: ${skillTwo}`)

// const user = {
//     theName: "Dawoud",
//     theAge: 27,
//     skills:{
//         html: 70,
//         css:80
//     }
// };

// show(user);

// function show({theName:n, theAge:g, skills:{html:h, css:c}}){
//     console.log(`${n} is the name and age: ${g}, skills: html:${h}, css:${c}`)
// };

// const user = {
//     theName:"Osama",
//     theAge:39,
//     skills:["Html", "CSS", "js"],
//     addresses:{
//         egypt:"Cairo",
//         Ksa:"Riyadh"
//     }
// };

// let {theName, theAge, skills:[a, , c], addresses:{egypt:e, Ksa}} = user;

// console.log(theName, theAge, a,  c, e, Ksa )

// console.log(`His name is: ${theName}
//     age: ${theAge}
//     His skills: ${a}, ${c}
//     address: ${e}, ${Ksa}`)

// let chosen = 3;
// let myFriends = [
//     {title:"Osama", age:39, available: true, skills:["Html", "CSS"]},
//     {title:"Ahmed", age:25, available: false, skills:["Python", "Django"]},
//     {title:"Sayed", age:33, available: true, skills:["PHP", "Laravel"]}
// ];

// let {title, age, available, skills:[,css]} = myFriends[chosen-1];

// console.log(title);
// console.log(age);
// if (available) console.log("available");
// else console.log("not available");
// console.log(css);

// let json = '{"name":"Dawoud", "country":"Egypt"}';
// const user = JSON.parse(json);
// user["name"] = "hager";
// user["country"] = "cairo";

// const newUserJosn = JSON.stringify(user);
// console.log(json);
// console.log(newUserJosn)

// console.log('1');
// console.log('2');
// alert("operation");
// console.log('3');

// console.log('1');
// console.log('2');
// setTimeout(() => {
//     console.log("operation");
// })
// console.log('3');
// console.log("Dawoud")

// function solveForExp(a, b){
//    let res = Math.log(b) / Math.log(a);

//    return Math.round(res);
// };

// console.log(solveForExp(2, 1024));
// console.log(solveForExp(4, 1024), 5)
// console.log(solveForExp(2, 1024), 10)
// console.log(solveForExp(9, 3486784401), 10)
// console.log(solveForExp(4, 4294967296), 16)
// console.log(solveForExp(8, 134217728), 9)
// console.log(solveForExp(19, 47045881), 6)
// console.log(solveForExp(10, 100000000), 8)

// setTimeout(()=>{
//     console.log("four")
// })

// function one(){
//     console.log("one");
// }

// function two(){
//     one();
//     console.log("two");
// }

// function three(){
//     two();
//     console.log("three");
// }

// three();
// console.log('1')

// setTimeout(() => {
//     console.log("two")
// });
// setTimeout(() => {
//     console.log("three")
// });

// console.log("one");

// setTimeout(() => {
//     console.log(v);
// });
// let v = 100;
// v += 100;

// let req = new XMLHttpRequest();

// console.log(req);

// function longestWord(sent){
//    let words = sent.split(" ");
//    let longest = words[0];

//    for (let word of words)
//         if(word.length > longest.length)
//             longest = word;

//    return longest;
// };

// console.log(longestWord("Hello there mate"))
// console.log(longestWord("Hello darkness my old friend"), "darkness")
// console.log(longestWord("Hello there mate"), "Hello")
// console.log(longestWord("Kayla's toy is plastic"), "Kayla's")
// console.log(longestWord("Football is so cool!!!!!"), "cool!!!!!")

// function lonelyInteger(ar){

//     return [...new Set(ar)].reduce((a, b) => a + b);
// };
// console.log(lonelyInteger([1, -1, 2, -2, 3]));
// console.log(lonelyInteger([-9, -105, -9, -9, -9, 105]));
// console.log(lonelyInteger([1, -1, 2, -2, 3]), 3)
// console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2]), -4)
// console.log(lonelyInteger([1, -1, 2, -2, 3, 3]), 3)
// console.log(lonelyInteger([-110, 110, -38, -38, -62, 62, -38, -38, -38]), -38)
// console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]), -9)

// function letterCounter(ar, letter){
//     return ar.flat(2).filter(l => l === letter).length;
// };

// console.log(letterCounter([
//     ["D", "E", "Y", "H", "A", "D"],
//     ["C", "B", "Z", "Y", "J", "K"],
//     ["D", "B", "C", "A", "M", "N"],
//     ["F", "G", "G", "R", "S", "R"],
//     ["V", "X", "H", "A", "S", "S"]
//   ], "H"));

//   console.log(letterCounter([
// 	['D', 'E', 'Y', 'H', 'A', 'D'],
// 	['C', 'B', 'Z', 'Y', 'J', 'K'],
// 	['D', 'B', 'C', 'A', 'M', 'N'],
// 	['F', 'G', 'G', 'R', 'S', 'R'],
// 	['V', 'X', 'H', 'A', 'S', 'S']
// ], 'D'), 3)

// console.log(letterCounter([
// 	['D', 'E', 'Y', 'H', 'A', 'D'],
// 	['C', 'B', 'Z', 'Y', 'J', 'K'],
// 	['D', 'B', 'C', 'A', 'M', 'N'],
// 	['F', 'G', 'G', 'R', 'S', 'R'],
// 	['V', 'X', 'H', 'A', 'S', 'S']
// ], 'H'), 2)

// console.log(letterCounter([
// 	['D', 'E', 'Y', 'H', 'A', 'D'],
// 	['C', 'B', 'Z', 'Y', 'J', 'K'],
// 	['D', 'B', 'C', 'A', 'M', 'N'],
// 	['F', 'G', 'G', 'R', 'S', 'R'],
// 	['V', 'X', 'H', 'A', 'S', 'S']
// ], 'Z'), 1)

// console.log(letterCounter([
// 	['D', 'E', 'Y', 'H', 'A', 'D'],
// 	['C', 'B', 'Z', 'Y', 'J', 'K'],
// 	['D', 'B', 'C', 'A', 'M', 'N'],
// 	['F', 'G', 'G', 'R', 'S', 'R'],
// 	['V', 'X', 'H', 'A', 'S', 'S']
// ], 'R'), 2)

// console.log(letterCounter([
// 	['D', 'E', 'Y', 'H', 'A', 'D'],
// 	['C', 'B', 'Z', 'Y', 'J', 'K'],
// 	['D', 'B', 'C', 'A', 'M', 'N'],
// 	['F', 'G', 'G', 'R', 'S', 'R'],
// 	['V', 'X', 'H', 'A', 'S', 'S']
// ], 'X'), 1)

// console.log(letterCounter([
// 	['D', 'E', 'Y', 'H', 'A', 'D'],
// 	['C', 'B', 'Z', 'Y', 'J', 'K'],
// 	['D', 'B', 'C', 'A', 'M', 'N'],
// 	['F', 'G', 'G', 'R', 'S', 'R'],
// 	['V', 'X', 'H', 'A', 'S', 'S']
// ], 'S'), 3)

// let ourRequest = new XMLHttpRequest();
// ourRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos", true);
// ourRequest.send();
// console.log(ourRequest)

// ourRequest.onreadystatechange = function(){
//     // console.log(this.readyState);
//     // console.log(this.status);
//     if (this.readyState === 4 && this.status === 200){
//         // console.log((this.responseText));
//         let jsData = JSON.parse(this.responseText);
//         // console.log(jsData)
//         for (let i = 0; i < jsData.length; i++){
//             let div = document.createElement("div");
//             let text = document.createTextNode(jsData[i].full_name);
//             div.appendChild(text);
//             document.body.appendChild(div);

//         }
//     }

// }

// function toObj(ar){
//     let newAr = [];
//     for (let l of ar){
//         let obj = {};
//         obj[`${l}`] = l.charCodeAt(0);
//         newAr.push(obj)

//     }
//     return newAr;
// };

// function toObj(ar){
//     return ar.map(chr => ({[chr] : chr.charCodeAt(0)}));
// }

// console.log(toObj(['a', 'b', 'c']));
// console.log(toObj(["a", "b", "c"]), [{a: 97}, {b: 98}, {c: 99}])
// console.log(toObj(["a", "p", "e"]), [{a: 97}, {p: 112}, {e: 101}])
// console.log(toObj(["z"]), [{z: 122}])
// console.log(toObj(["e","o","n"]), [{e: 101},{o:111},{n:110}])
// console.log(toObj([]), [])
// let names = []

// let users = [
//   { name: "John", email: "john@example.com" },
//   { name: "Jason", email: "jason@example.com" },
//   { name: "Jeremy", email: "jeremy@example.com" },
//   { name: "Jacob", email: "jacob@example.com" }
// ];

// for (let {name} of users){
//     names.push(name);
// }

// console.log(names);

// function addName(obj, key, value){
//     obj[key] = value;
//     return obj;
// };

// console.log(addName({}, "Brutus", 300), {Brutus: 300})
// console.log(addName({piano: 500}, "Brutus", 400), {piano: 500, Brutus: 400})
// console.log(addName({piano: 500, stereo: 300}, "Caligula", 440), {piano: 500,  stereo: 300, Caligula: 440})

// function fun(){
//     document.querySelector("button").style.border = "1px solid blue";
// }

// const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
//     "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
//     "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113, "T": 405,
//     "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23};

// function nameScore(name) {
//         let score = 0;
//         for (let letter of name){
//             score += scores[letter] || 0;
//         }
//         if (score <= 60) return "NOT TOO GOOD";
//         else if (score >= 61 && score <= 300) return "PRETTY GOOD";
//         else if (score >= 301 && score <= 599) return "VERY GOOD";
//         else return "THE BEST";
// };

// console.log(nameScore("PUBG"));
// console.log(nameScore('MUBASHIR') == "THE BEST")
// console.log(nameScore('MATT') == "THE BEST")
// console.log(nameScore('PAKISTAN') == "THE BEST")
// console.log(nameScore('AIRFORCE') == "THE BEST")
// console.log(nameScore('GUV') == 'NOT TOO GOOD')
// console.log(nameScore('PUBG') =="NOT TOO GOOD")
// console.log(nameScore('ME') == "PRETTY GOOD")
// console.log(nameScore('BOB') =="PRETTY GOOD")
// console.log(nameScore('JLJ') == 'PRETTY GOOD')
// console.log(nameScore('YOU') == 'VERY GOOD')
// console.log(nameScore('FABIO') =="VERY GOOD")
// console.log(nameScore('ROBBY') == 'THE BEST')
// console.log(nameScore('BILL GATES') == "THE BEST")
// function User(id, name, salary){
//     this.id = id;
//     this.name = name;
//     this.salary = salary + 1000;
// }

// let use4 = new User(105, "Zeinab", 9000);
// let mu = new User(106, "Muhammad", 100000)
// console.log(use4.name);
// console.log(use4.salary);
// console.log(mu.salary)

// const user1 = {
//     id: 100,
//     username: "Dawoud",
//     salary: 5000,
// };

// const user2 = {
//     id: 1001,
//     username: "Khaled",
//     salary: 6999,
// };

// const user3 = {
//     id : 1002,
//     username: "Hager",
//     salary: 7000,
// }

// class User{
//     constructor(id, name, sal){
//         this.id = id;
//         this.name = name || "Unknown";
//         this.sal = sal < 6000 ? sal + 1000 : sal;
//         this.msg = function(){
//             return `Hello ${this.name}, Your salary is : ${this.sal}`
//         }
//     }
//     newName(newName){
//         this.name = newName;
//     }
// }

// let user1 = new User(100, "", 2000);
// user1.newName("Dawoud");

// let string = "Elzero";
// let string2 = new String("Elzero");

// console.log(typeof string, typeof string2, string2)

// console.log(string instanceof String);
// console.log(string2  instanceof String);

// console.log(string.constructor === String);
// console.log(string2.constructor == String)

// let num1 = 10;
// let num2 = new Number(10);
// console.log(num1.constructor, num2.constructor);
// console.log(num1 instanceof Number, num2 instanceof Numbecr)
// function flipEndChars(str){

//     let len = str.length,
//     first = str[0],
//     last = str[len-1];
//     // return typeof str
//     if (len < 2 || typeof(str) !== 'string') return "Incompatible."
//     else if (first === last)
//         {return "Two's a pair."}

//     return last + str.slice(1, -1) + first;

// };

// console.log(flipEndChars("Cat, dog, and mouse."));
// console.log(flipEndChars("Cat, dog, and mouse.") == ".at, dog, and mouseC");
// console.log(flipEndChars("Anna, Banana") === "anna, BananA");
// console.log(flipEndChars("[]") === "][");
// console.log(flipEndChars("") === "Incompatible.");
// console.log(flipEndChars([1, 2, 3]) === "Incompatible.");
// console.log(flipEndChars("dfdkf49824fdfdfjhd") === "Two's a pair.");
// console.log(flipEndChars("#343473847#") === "Two's a pair.");

// class User{
//     static count = 0;

//     constructor(id, name, sal){
//         this.id = id;
//         this.name = name;
//         this.sal = sal;
//         User.count ++;
//     }
//     static sayHello(){
//         return `Say Hello From The Class`;
//     }

//     static countMembers(){
//         // this.count ++ ;
//         return `${this.count } Memmbers created!`
//     }
// };

// let user1 = new User(100, "Dawoud", 5000);
// let user2 = new User(101, "Ahmed", 5000);
// let user3 = new User(102, "Khaled", 1000000)
// // console.log(User.sayHello())
// console.log(User.sayHello())
// console.log(user1.count);
// console.log(user2.count);
// console.log(User.countMembers());
// console.log()

// function censor(string){
//     return string.split(" ").map(word => {
//         let len = word.length;
//         if (len > 4) return "*".repeat(len);
//         return word;
//     }).join(" ");
// };

// console.log(censor("Two plus three is five"));
// console.log(censor("The code is fourty") =="The code is ******", "Example #1")
// console.log(censor("Two plus three is five") =="Two plus ***** is five", "Example #2")
// console.log(censor("aaaa aaaaa 1234 12345") =="aaaa ***** 1234 *****", "Example #3")
// console.log(censor("abcdefghijklmnop") =="****************")
// console.log(censor("a") =="a")

// class User{
//     constructor(id, name, sla, email){
//         this.id = id;
//         this.name = name;
//         this.sla = sla;
//         this.email = email;
//     }

//     sayHello(){
//         return `Hello, ${this.name}`
//     }
// };

// let user1 = new User(100, "Dawoud" , 500);

// class Admin extends User{
//     constructor(id, name, sla,email, permission){
//         super(id, name, sla, email);
//         this.permission = permission;

//     }
// }

// let admin = new Admin(1001, "Khaled", 100,"Khaled.dawoud@gmail.com" ,"all");

// console.log(admin.name, admin.email, admin.sla, admin.id, admin.permission);

// console.log(admin.sayHello());

// class SuperMan extends Admin{
//     constructor(id, name, sla, email, permission, ability) {
//         super(id, name, sla, email, permission);
//         this.ability = ability;

//     }

// }

// let su = new SuperMan('all');

// class User{

//     #e
//     constructor(id, username, eSalary){
//         this.i = id;
//         this.n = username;
//         this.#e = eSalary;
//     }
//     getSalary(){
//         return parseInt(this.#e * 100);
//     }
// };

// let userOne = new User(100, "dawoud", "5000 gneh");

// class Admin extends User{
//     constructor(id, username, eSalary) {
//         super(id, username, eSalary);

//     }

// }

// let admin = new Admin(10, "khaled", 400);

// console.log(admin.i, admin.n)

// let names = ["ahmed", "Mohammed", "Hager"];

// console.log(`Hello, ${names[0]}`);
// console.log(`Hello, ${names[1][2]}`);
// console.log(`Hello, ${names[2]}`);

// let names = ["Ahmed", "Mohamed", 'Sayed', ["khaled", "Hager", "Dawoud"]];

// console.log(`Hello ${names[3][1]}`);
// console.log(`Hello ${names[3][1][2]}`)

// console.log(names);
// names[1] = "Mahmoud";
// names[3] = ["sameh", "Gamal"];
// console.log(names);

// console.log(typeof names); // object
// console.log(Array.isArray(names));

// let str = "osamah";
// console.log(Array.isArray(str));

// let friends = ["Ahmed", "Mohamed", "Sayed", "Alaa", ];
// let ahmed = friends.shift();
// console.log(`First name is: ${ahmed}`);
// friends.shift();
// console.log(friends);
// let last = friends.pop();
// console.log(last);
// console.log(friends)

// function mapping(ar){
//     let obj = {};

//     for (let element of ar)
//         obj[element] = element.toUpperCase();

//     return obj;
// };

// console.log(mapping(["p", "s"]));
// console.log(mapping(["a", "b", "c"]), { a: "A", b: "B", c: "C" })
// console.log(mapping(["p", "s", "t"]), { p: "P", s: "S", t: "T" })
// console.log(mapping(["a", "v", "y", "z"]), { a: "A", v: "V", y: "Y", z: "Z" })

// let nums = [1, 2, 3, 4, 5, 1];
// console.log(nums);
// console.log(nums.indexOf(1, 2));

// console.log(nums.lastIndexOf(1, -2));

// console.log(nums.includes(2, 1))

// if (nums.indexOf(1) == -1) console.log(`Not found`);
// else {console.log(`Found`)};
// console.log(nums.indexOf(10));
// console.log(nums.lastIndexOf(10));

// let ar = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];
// console.log(ar);
// console.log(ar.sort())
// console.log(ar.reverse());
// console.log(ar.sort().reverse());

// let ar1 = ["ahmed", "Dawoud"];
// let ar2 = ["Sameh", "Khaled"];
// let ar3 = ["Ameer", "Kairi"];

// let arAll = ar1.concat(ar2,ar3, ["Hager"], ["Sarah", "Zeinab"]);
// console.log(arAll);
// console.log(arAll.join('|').toUpperCase())

// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(nums);
// // console.log(nums.slice(1, 3))
// console.log(nums.slice(-3,));

// console.log(nums.slice(1, -2));
// console.log(nums.slice(2, -1));

// console.log(nums.slice(-7, -1));

// nums.splice(1, 2, "Sameer", "Samarah");

// console.log(nums)

// let zero = 0;
// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// my.push(0);
// my.reverse();
// my.splice( zero, counter)
// // my.sort();
// console.log(my);
// my.shift();
// my.pop();
// // console.log(my);
// console.log(my.slice(zero, counter));

// my.reverse();
// let s = my[zero].split("");
// s.unshift(0);
// let first = (s.slice(counter).join(""));
// my.shift();

// let a =(my[zero].split("").reverse());
// a.splice(zero, counter);

// let second = (a.reverse().join(""));

// console.log( second + first);
// s.shift();
// s.shift();

// let ro =(s.slice(counter));

// let r =(ro[0]);

// ro.shift();
// let O = (ro[zero]).toUpperCase();

// console.log(r + O)

// function miniPeaks(ar){
//     let peaks = [];
//     for (let i = 1; i < ar.length-1; i++){
//         if (ar[i] > ar[i-1] && ar[i] > ar[i+1])
//              peaks.push(ar[i]);
//     }

//     return peaks;
// };

// console.log(miniPeaks([1, 2, 3, 4, 5, 6]));
// console.log(miniPeaks([4, 5, 2, 1, 4, 9, 7, 2]), [5, 9])
// console.log(miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4]), [2, 3, 5])
// console.log(miniPeaks([1, 2, 3, 4, 5, 6]), [])
// console.log(miniPeaks([6, 4, 3]), [])
// console.log(miniPeaks([1, 1, 1, 1, 2, 1, 1, 1]), [2])
// console.log(miniPeaks([1, 9, 1, 8, 2, 7, 6]), [9, 8, 7])
// console.log(miniPeaks([7, 8, 7, 8, 7, 8, 5, 1, 2, 0]), [8, 8, 8, 2])

// class User{
//     constructor(id, name){
//         this.id = id;
//         this.name = name;
//     }
//     sayHello(){
//         return `Hello ${this.name}`;
//     }
// }

// let userOne = new User(100, "Dawoud");
// console.log(userOne.name);
// console.log(User.prototype);

// let str = "Dawoud";
// console.log(String.prototype);

// console.log(str.length);

// class User{
//     constructor(id, name){
//         this.id = id;
//         this.name = name;
//     }
//     sayHello(){
//         return `Hello, ${this.name}`;
//     }
// };

// let user1 = new User(100, "Dawoud");
// console.log(user1.name);
// console.log(User.prototype);

// console.log(user1);

// User.prototype.sayWelcome = function(){
//     return `Welcome, ${this.name}`;
// }

// // console.log(user1.sayWelcome())
// Object.prototype.love = "Dawoud and his family";
// console.log(user1.love);

// String.prototype.addDot= function addDot(val){
//     return "." + this + "."
// }

// let ourString = "Dawoud";
// console.log(ourString.addDot());

// console.log("hello")

// // console.log(delete obj.c);
// // obj.c = 100;
// Object.defineProperty(obj, "c",{
//     value : 3,
//     writable: false,
//     enumerable: true,
//     configurable: true
// });
// Object.defineProperty(obj, "c",{
//     value : 1,
//     writable: false,
//     enumerable: true,
//     configurable: true
// });

// // obj.c = 100;

// for (let prop in obj){
//     console.log(prop, obj[prop]);
// }
// console.log(obj);
// const obj = {
//                 a:1,
//                 b:2
//             };

// Object.defineProperties(obj, {
//     c:{
//         configurable:false,
//         value : 3
//     },
//     d:{
//         configurable: true,
//         value : 4
//     },
//     f:{
//         value: 5,
//         configurable:true
//     }
// });

// console.log(obj);
// console.log(Object.getOwnPropertyDescriptor(obj, "d"));
// console.log(Object.getOwnPropertyDescriptors(obj))

// console.log(1000000);
// console.log(1e6);
// console.log(10 ** 6);
// console.log(10 * 10 * 10 * 10 * 10 * 10);
// console.log(1000000.000);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE)
// console.log(Number.MAX_VALUE + 2)

// function evenlyDivisible(a, b, c){
//     let sum = 0;
//     for (let i = a; i <= b; i ++){
//         if (i % c == 0) sum += i;
//     }

//     return sum;
// };

// console.log(evenlyDivisible(1, 10, 3));
// console.log(evenlyDivisible(1, 10, 2), 30)
// console.log(evenlyDivisible(1, 10, 3), 18)
// console.log(evenlyDivisible(0, 12, 3), 30)
// console.log(evenlyDivisible(-10, -1, 2), -30)
// console.log(evenlyDivisible(-10, -1, 3), -18)
// console.log(evenlyDivisible(1, 10, 20), 0)
// console.log(evenlyDivisible(-10, 10, 2), 0
// console.log((100).toString())
// console.log(100);
// console.log(100..toString());
// console.log(100.10.toString())
// console.log(10.554555.toFixed(2))

// console.log(parseInt("1001 5Dawoud"))
// console.log(Number("100 Dawoud"));
// console.log(+"100 Dawoud")

// console.log(parseInt('1.5 dawoud'))
// console.log(parseFloat('1.5 dawoud'));

// console.log(Number.isInteger(100.5));

// console.log(Number.isNaN("Dawoud"/ 20))

// console.log(Math.round(99.5));

// console.log(Math.floor(99.9))

// console.log(Math.min(10, 20, 100, -100, 90));
// console.log(Math.max(10, 20, 100, -100, 90));
// console.log(Math.pow(2, 4));
// console.log(Math.random());

// console.log(Math.trunc(100.5));
// console.log(parseInt(100.5))

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// find the smallest number and return it integer
// console.log(Math.trunc(Math.min(a, b, c, d))); // 2

// console.log(Math.floor((a + d) * .2) * 500);

// console.log(d.toFixed()); // 2
// console.log(Math.trunc(d).toString());
// console.log(Math.round(d).toString());
// console.log(Math.floor(d).toString());
// console.log(b+d)
// let res = Math.ceil(b+d) / 3 -1 ;

// console.log(res.toFixed(2));

// console.log(Math.floor(res+1 ))

// function powerOfTwo(num){
//     let po = Math.log2(num);
//     return po % 1 === 0;
// };

// console.log(powerOfTwo(32))
// console.log(powerOfTwo(1))
// console.log(powerOfTwo(-7))
// console.log(powerOfTwo(18))

// let name = "  Ahmed. ";
// let ar = [1, 2, 3, 4, 5];
// console.log(name[1], name.charAt(1), name.length);

// console.log(name.charAt(4));
// console.log(name[1]);
// console.log(name.trim())

// console.log(name.toUpperCase(), name.toLowerCase());

// console.log(name.trim().charAt(2).toUpperCase());

// console.log(a.charAt(7))
// console.log(a.indexOf("Web", 11))

// console.log(a.indexOf("o"));
// console.log(a.lastIndexOf("o"));

// console.log(a.slice(2, 8))

// console.log(a.slice(-5, -3))

// console.log("Dawoud ".repeat(5));

// console.log(a.split('', 6));
// let a = "Elzero Web School";

// console.log(a.endsWith("b", 10))
// console.log(a.length)
// console.log(a.slice(6, 2));
// console.log(a.substring(6, 2));
// console.log(a.substring(16));

// console.log(a.substring(a.length-5, a.length-3))
// console.log(a.slice(-5, -3));

// console.log(a.substr(-3));
// console.log(a.substr(-5, 2));

// console.log(a.includes("Web", 8));

// console.log(a.startsWith("Web", 7));

// console.log(a.startsWith('zero', 2))

// let nums = [1, 2, 3, 4, 5];

// console.log(nums.map(function(num)
//     {return num * 2;}
// ))

// let ar = [];
// for (let i = 0; i < nums.length; i++){
//     ar.push(nums[i] * 2);
// };

// console.log(ar);

// let ar = nums.map(function(element, index, array){
//     console.log(`The current element: ${element}`);
//     console.log(`The current index is: ${index}`);
//     console.log(`The array is : ${array}`);
//     console.log(`This => ${this}`);
//     return (element * 2)
// }, 12)

// console.log(ar)

// let addSelf = nums.map(num => num + num);
// console.log(addSelf)

// function addition(ele){
//     return ele + ele;
// }

// let add = nums.map(addition);

// console.log(add);

// let word = "elZERO";

// let swap = word.split("").map(l => {
//    if (l.toUpperCase() === l){
//     return l.toLowerCase();
//    }
//    else {return l.toUpperCase();}
// }).join("");

// console.log(swap);

// let nums = [1, -10, -20, 15, 100, -30];

// let invert = nums.map(n => n * -1);
// console.log(invert);

// let string = "Elz123er4o";
// let ignore = string.split("").map( el => { return Number.isNaN(parseInt(el)) ? el : "";
// }
// ).join("");

// console.log(ignore);

// let names = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// let nums = [11,20,2,5,17,10, ];

// let add = nums.filter(function(ele){
//     return ele + ele;
// });

// console.log(add);

// let a = names.filter(function(name){
//     return name.startsWith("A");
// });

// console.log(a);

// let even = nums.filter(num => !(num % 2) );

// console.log(even);

// let sent = "I love Foood Code Too Playing Much";

// let smallWords = sent.split(" ").filter(word => word.length <= 4);

// console.log(smallWords);

// let string = "A13B2ZX";

// let nums = string.split("").filter(ele => !isNaN(parseInt(ele)));

// console.log(nums.map(n => n * n).join(""));

// let nums = [10, 20, 15, 30];

// let add = nums.reduce((acc, current, index, ar)=>{
//     console.log(`Acc => ${acc}`);
//     console.log(`current => ${current}`);
//     console.log(`current index : ${index}`);
//     // console.log(`array : ${ar}`);
//     console.log(`acc + current : ${acc + current}`);
//     console.log(`#`.repeat(15))
//     return acc + current;

// }, 0);

// console.log(add);
// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let theBiggest = ["Bla", "Propaganda_three", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

// console.log(theBiggest.reduce((acc, ele)=>{

//     return acc.length > ele.length ? acc : ele;

// }))

// console.log(removeChars.filter(l => l !== "@").reduce((acc, current) => acc + current));

// function derivative(b, m){
//     return b * Math.pow(m, b-1);
// };

// console.log(derivative(4, -3));
// console.log(derivative(1, 4), 1)
// console.log(derivative(3, -2), 12)
// console.log(derivative(4, -3), -108)
// console.log(derivative(9, -5) === 3515625)
// console.log(derivative(1254, 0), 0)
// console.log(derivative(-2, 10), -0.002)

// let divs = document.querySelectorAll(".content div");
// let elements = document.querySelectorAll("ul li");

// elements.forEach(function(ele){
//     ele.onclick = function(){
//         elements.forEach(function(el){
//             el.classList.remove('active')
//         })
//         ele.classList.add('active')
//         divs.forEach(function(div){
//             div.style.display = 'none';
//         })
//     };
// });

// let but = document.querySelector(".but");
// but.onclick = function(){
// };

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split(',').filter(ele => isNaN(ele) && !("_Z".includes(ele))).map(ele => ele[0]).reduce((acc, ele)=>{
//     // (ele === ele.toUpperCase()) ? " " + ele : ele;
//     return (ele === ele.toUpperCase())? acc + " " +ele: acc + ele ;
// });

// console.log(solution); // Elzero Web School
// console.log(true);
// console.log(!false);

// console.log(!(10 + 10 === 20));

// console.log(!(10 === '10'))

// console.log(10 == '10' && 10 > 8 && 10 >= '10');

// console.log(10 == '10' || 10 > 8 || 10 > 50);

// let price = 100;
// let discount = true;
// let discountAmount = 30;
// let country = 'KSA';
// if (discount === true){
//     // price = price - 30;
//     price -= 30;
// }
// else if (country === 'Egypt'){
//     price -= 40;
// }
// else if (country === 'Syria'){
//     price -= 50;
//     }

// else{price -= 10;}
// console.log(price);

// const names = ["Khaled", "Hager", "Muhammad", "Sarah"];
// const jobs = ["Acc", "Stu", "Programmer", "Home"];

// function assignPersonToJob(names, jobs){

//     const obj = {};

//     for (let i = 0; i < names.length; i++)
//         obj[names[i]] = jobs[i];

//     return obj;
// };

// console.log(assignPersonToJob(names, jobs));

// let div = document.getElementById("our-div");
// let tags = document.getElementsByTagName("p");
// tags[0].innerHTML = "test";
// for (let tag of tags) console.log(tag.classList);
// console.log(div)

// let cl = document.getElementsByClassName("first");

// for (let c of cl) c.innerHTML = "Hello";
// console.log(cl);

// let query = document.querySelector(".second");
// console.log(query);
// console.log(query.innerHTML, query.className)

// let query = document.querySelector("#our-div");
// console.log(query)

// let query = document.querySelectorAll(".first");

// for (let q of query) console.log(q.innerHTML);

// console.log(document.forms[0].one.value);

// console.log(document.links[1])

// console.log(true, !true);

// console.log(10 == '10');
// console.log(!(10 == '10'))

// console.log(10 === '10' || 10 > 80 || 10 >= 50);

// let string = 'Dawoud | is a clever | and is programmer';
// let ar = [1 , 2, 3, 4, 5];
// let first = string.indexOf("is");

// console.log(string.indexOf("is", first+1))
// console.log(string.indexOf("is"));
// console.log(string.lastIndexOf("is"));

// console.log(string.slice(2, 8));
// console.log(ar.slice(2, ))

// console.log((string + " ").repeat(4))
// console.log(string.slice(-5, -1))

// console.log(string.split('', 6));

// function unrepeated(string){

//     let s = new Set(string);

//     return [...s].join('');
// };

// console.log(unrepeated("altwaff test"));

// let a = "Dawoud is|a good and is programmer";

// console.log(a.indexOf("is"));
// console.log(a.lastIndexOf('is'));
// console.log(a.lastIndexOf("o"));
// console.log(a.indexOf("z"))
// console.log(a.slice(2, 6))

// console.log(a.slice(-5, -3))

// console.log(a.repeat(3))
// console.log(a.split("", 5))
// let a = "Elzero Web School";
// let l = a.length;
// console.log(a.slice(6, 2));
// console.log(a.substring(6, 2));
// console.log(a.substring(-10, 6))

// console.log(a.substring(l-5, l-3))

// console.log(a.substr(-5, 2))

// console.log(a.includes("Elzero", 8));

// console.log(a.startsWith("zero", 2))
// console.log(a.endsWith('l'))

// console.log("Dawoud" > "Khaled")
// console.log("10" == 10);
// console.log('10' === 10);
// console.log('-10' !== -10);
// console.log(10 !== 10);

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = 'ksa';
// if (discount === true){
//     price -= discountAmount;
// }
// else if(country === 'Egypt'){
//     price -= 40;
// }
// else if (country === "Syria")
//     price -= 50;
// else{
//     price -= 10;
// }
// console.log(price)

// let obj = {first:"James", last : "Baker"};
// let {first, last, alias:nickname = "JD"} = obj;

// console.log(first, last, nickname);

// function sayHello(name, age){
//     if (age < 20) console.log("This app is not valid for you.");
//     else console.log( `Hello, ${name}. Your age is ${age}`);

// }

// sayHello("Osama", 38);
// sayHello("Sayed", 40);
// sayHello("Dawoud", 18);

// function genYears(start, end, not){
//     for (let i = start; i <= end; i++)
//     {if (i === not) continue;
//     console.log(i);}
// }

// genYears(1982, 2021, 2020 )

// function sayHello(name){
//     return `Hello, ${name}`;
// }
// console.log(sayHello("Dawoud"));
// let x = sayHello("Dawoud");
// console.log(x);

// function generate(start, end){
//     for(let i = start; i <= end; i++){
//         if (i == 15) return "Interrputing...";
//         console.log(i);
//     }
// };

// console.log(generate(10, 20));

// function sayHello(name = 'default', age = "default"){
//     // age = age || "default";
//     console.log(`Hello, ${name}. Your age is ${age}.`);
// }

// sayHello();

// function calc(...nums){
//     // console.log(Array.isArray(nums));
//     // console.log(typeof SVGAnimatedNumberList)
//     // return nums;
//     let result = 0;
//     for (let i = 0; i < nums.length; i++){
//         // console.log(nums[i]);
//         result += nums[i];
//     }
//     return `The sum of all numbers: ${result}`;
// }

// console.log(calc(10, 20, 4, 3, 10, 30));

// function showInfo(us = "un", ag = "un", rt = 0, show = "Yes", ...sk){
//     document.write("<div>");
//     document.write(`<h2>Welcome, ${us}</h2>`);
//     document.write(`<p>Age: '${ag}'</p>`);
//     document.write(`<p>Our Rate: $${rt}`);
//     if (show === "Yes"){
//         if (sk.length > 0){

//             document.write(`<p>The skills are: ${sk.join(" | ")}</p>`)
//         }else{
//             document.write(`<p>The Skills : No Skills</p>`)
//         }
//     }
//     else{
//         if (sk.length > 0)
//              document.write(`<p>Skills are hidden.</p>`);
//         else{
//             document.write(`<p>The skills: No Skills</p>`);
//         }
//     }
//     document.write("</div>");
// }

// showInfo("Dawoud", 25, 100, "Yes",  );

// function numArgs()
// {
//     return arguments.length;
// }
// console.log(numArgs( 'bar', true, null));

// function puzzlePieces(ar1, ar2){
//     let ar = [];

//     if (ar1.length !== ar2.length) return false;

//     for (let i = 0; i < ar1.length; i++)
//         ar[i] = ar1[i] + ar2[i];

//     return new Set(ar).size === 1;
// }

// console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10]));
// console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]), true)
// console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]), true)
// console.log(puzzlePieces([2, 1, 1], [-2, -1, -1]), true)
// console.log(puzzlePieces([2], [-2]), true)
// console.log(puzzlePieces([5, -1], [-6, 0]), true)
// console.log(puzzlePieces([0, 0, 0, 0, 0], [1, 1, 1, 1, 1]), true)
// console.log(puzzlePieces([1, 2], [-1, -1]), false)
// console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10]), false)
// console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 16]), false)
// console.log(puzzlePieces([1, 1, 1], [1, 1, 2]), false)
// console.log(puzzlePieces([1, 8, 1], [1, -8, -1]), false)
// console.log(puzzlePieces([0, 0, 0, 0, 0], [1, 1, 0, 1, 1]), false)
// console.log(puzzlePieces([0, 0, 0, 0, 0], [1, 1, 1, 1]), false)

// function factorize(num){

//     let ar = [];

//     for (let i =  1; i <= num/2; i++)
//         if (num % i === 0) ar.push(i);

//     ar.push(num);

//     return ar;
// }
// console.log(factorize(12));
// console.log(factorize(4));
// console.log(factorize(17))
// console.log(factorize(12), [1, 2, 3, 4, 6, 12])
// console.log(factorize(4), [1, 2, 4])
// console.log(factorize(17), [1, 17])
// console.log(factorize(24), [1, 2, 3, 4, 6, 8, 12, 24])
// console.log(factorize(1), [1])

// let ourVar = "country";
// let user = {
//     theName: "Dawoud",
//     theAge: 27,
//     "country of": "Egypt",
//     [ourVar] : "KSA",
//     100: "hundred",
//     // Method
//     sayHello:function(){
//         console.log("hello");
//     },
// };
// console.log(user.theName, user.theAge);
// user.sayHello();
// console.log(user['country']);
// console.log(user['country of']);
// console.log(user[100]);
// console.log(user['theName'], user.theName, user.country);
// console.log(user[ourVar], user.country);

// function factorGroup(num){
//     return Math.sqrt(num) % 1 === 0 ? "odd" : "even";
// }

// console.log(factorGroup(33));
// console.log(factorGroup(36));
// console.log(factorGroup(7));
// console.log(factorGroup(33), "even")
// console.log(factorGroup(36), "odd")
// console.log(factorGroup(7), "even")
// console.log(factorGroup(1), "odd")
// console.log(factorGroup(19), "even")
// console.log(factorGroup(27), "even")
// console.log(factorGroup(100), "odd")
// console.log(factorGroup(18), "even")
// console.log(factorGroup(16), "odd")
// let available = false;
// let user = {
//     name: "Dawoud",
//     age: 27,
//     skills:["css", "Html", "JS"],
//     available: true,
//     isAvailable: function(){
//         if (this.available) console.log(`${this.name} is available.`);
//         else console.log(`${this.name} is not available.`);
//     },
//     addresses: {
//         ksa: "Riyadh",
//         egypt:{
//             one: "cairo",
//             two: "Dakahlia"
//         }
//     }
// };
// (user.isAvailable())
// console.log(user.name, user.age, user.skills.at(2));
// console.log(typeof user)
// console.log(user.addresses.ksa);
// console.log(user.addresses.egypt['one']);
// console.log(user['addresses'].egypt.one);
// console.log(user['addresses']['egypt']['one']);
// user.isAvailable();

// let user = {age : 20,
//     country: "ksa"
// };
// let user = new Object(
//     {
//         age: 30, name: "Dawoud"
//     }
// );
// console.log(user);

// user.age = 38;
// user['country'] = "Egypt";
// user.hisAddress = function(){
//     console.log(`His country is: ${this.country}.`)
// }
// console.log(user);
// user.hisAddress();

// function multiSum(num){
//     return num * 55;
// }
// function multiSum(num, i = 1){
//     if (i == 10) return 10 * num;
//     return num * i + multiSum(num, i + 1)
// }
// console.log(multiSum(1));

// function multiSum(num, i = 1){
//     if (i == 10) return  10*num;
//     return num * i + multiSum(num, i + 1) ;
// }
// console.log(multiSum(8));
// console.log(multiSum(1), 55)
// console.log(multiSum(2), 110)
// console.log(multiSum(3), 165)
// console.log(multiSum(4), 220)
// console.log(multiSum(5), 275)
// console.log(multiSum(6), 330)
// console.log(multiSum(7), 385)
// console.log(multiSum(8), 440)
// console.log(multiSum(9), 495)
// console.log(multiSum(10), 550)

// function isAutomorphic(n){
//     return `${Math.pow(n, 2)}`.endsWith(`${n}`);
// }

// console.log(isAutomorphic(5));
// console.log(isAutomorphic(0), true)
// console.log(isAutomorphic(1), true)
// console.log(isAutomorphic(5), true)
// console.log(isAutomorphic(6), true)
// console.log(isAutomorphic(25), true)
// console.log(isAutomorphic(76), true)
// console.log(isAutomorphic(7109376), true)
// console.log(isAutomorphic(36), false)
// console.log(isAutomorphic(100), false)
// console.log(isAutomorphic(11), false)
// console.log(isAutomorphic(6025), false)
// console.log(isAutomorphic(3), false)
// console.log(isAutomorphic(1376), false)

// function changeTypes(ar){

//     return ar.map
//     (
//         ele =>
//         (ele % 2 === 0 && Number.isInteger(ele) ) ? ele + 1
//         :
//         (typeof ele === 'boolean') ? !(ele)
//         :
//         (typeof ele === 'string') ? ele[0].toUpperCase()+ele.slice(1)+"!"
//         :
//         ele
//     );
// }

// console.log(changeTypes([false, 'false', 'true']));
// console.log(changeTypes(["a", 12, true]),["A!", 13, false])
// console.log(changeTypes([13, "13", "12", "twelve"]), [13, "13!", "12!", "Twelve!"])
// console.log(changeTypes([false, "false", "true"]), [true, "False!", "True!"])

// made by @Joshua Señoron

// function hasHiddenFee(ar, t){
//     let total = ar.reduce((acc, price) => acc + parseInt(price.slice(1)), 0);

//     return parseInt(t.slice(1)) > total;
// }

// console.log(hasHiddenFee(["$2", "$4", "$1", "$8"], "$15"));
// console.log(hasHiddenFee(["$2", "$4", "$1", "$8"], "$15"), false)
// console.log(hasHiddenFee(["$1", "$2", "$3"], "$6"), false)
// console.log(hasHiddenFee(["$1"], "$4"), true)
// console.log(hasHiddenFee(["$15", "$40", "$19", "$50", "$22", "$41", "$35", "$10", "$38", "$41"], "$311"), false)
// console.log(hasHiddenFee(["$25", "$6", "$19", "$9", "$32", "$15", "$10", "$9", "$7", "$8", "$37", "$23", "$18"], "$232"), true)
// console.log(hasHiddenFee(["$31", "$30", "$21", "$12", "$10", "$38", "$42", "$27", "$51"], "$297"), true)
// console.log(hasHiddenFee(["$9", "$37", "$21", "$4", "$14", "$10", "$36", "$33", "$17", "$41", "$50", "$48", "$2", "$45", "$6", "$22", "$23"], "$499"), true)
// console.log(hasHiddenFee(["$44"], "$82"), true)
// console.log(hasHiddenFee(["$15", "$30", "$34"], "$79"), false)
// console.log(hasHiddenFee(["$35", "$29", "$9", "$47", "$43", "$4", "$37", "$32", "$49", "$37", "$32", "$38", "$43", "$19", "$26", "$46", "$46", "$31", "$24", "$6"], "$696"), true)
// console.log(hasHiddenFee(["$50", "$28", "$11", "$51", "$8", "$44"], "$192"), false)
// console.log(hasHiddenFee(["$50", "$14", "$45", "$43", "$7", "$45", "$34", "$28", "$46", "$50", "$36", "$23"], "$432"), true)
// console.log(hasHiddenFee(["$45", "$50", "$45", "$16", "$6", "$45", "$33", "$18", "$12", "$3", "$40", "$51"], "$364"), false)
// console.log(hasHiddenFee(["$33", "$26", "$40", "$10", "$24", "$48"], "$181"), false)
// console.log(hasHiddenFee(["$21", "$45", "$6", "$43", "$39"], "$207"), true)
// console.log(hasHiddenFee(["$18", "$44", "$51", "$31", "$22", "$8", "$21", "$27", "$21", "$3", "$42", "$10", "$47", "$29", "$32", "$47"], "$517"), true)
// console.log(hasHiddenFee(["$17", "$31", "$42", "$20", "$28", "$13", "$17", "$4", "$13", "$1", "$29", "$20", "$30", "$34", "$14", "$18", "$20", "$14", "$38", "$30"], "$456"), true)
// console.log(hasHiddenFee(["$48", "$24", "$11"], "$83"), false)
// console.log(hasHiddenFee(["$14", "$15", "$12", "$18", "$29", "$3", "$29", "$9", "$7", "$2", "$15", "$8", "$50", "$4", "$3"], "$218"), false)
// console.log(hasHiddenFee(["$30", "$40", "$2", "$25", "$48", "$42", "$22", "$6", "$48", "$14", "$15", "$2", "$46", "$20", "$5", "$10", "$35"], "$412"), true)
// console.log(hasHiddenFee(["$43", "$49", "$2", "$15", "$6", "$20", "$31", "$7", "$38", "$40", "$17", "$25", "$21", "$29", "$12", "$34", "$22", "$45", "$18", "$19", "$31"], "$524"), false)
// console.log(hasHiddenFee(["$25", "$16"], "$56"), true)
// console.log(hasHiddenFee(["$28", "$11", "$2", "$12", "$22", "$7", "$30", "$46", "$25", "$17", "$28", "$44", "$14", "$43", "$6", "$11", "$23", "$6", "$46"], "$459"), true)
// console.log(hasHiddenFee(["$24", "$31", "$6", "$20", "$35", "$33", "$1", "$46", "$45", "$36", "$43"], "$394"), true)
// console.log(hasHiddenFee(["$18", "$25", "$44", "$36", "$50", "$32", "$7", "$42", "$23", "$38", "$43", "$9", "$7", "$22", "$51", "$35", "$8"], "$557"), true)
// console.log(hasHiddenFee(["$17", "$37", "$43", "$6", "$22", "$39", "$11", "$29", "$11", "$1", "$7", "$30", "$1", "$30", "$42", "$27", "$12", "$16", "$13", "$42", "$19"], "$455"), false)
// console.log(hasHiddenFee(["$40", "$39", "$22", "$19", "$24", "$40", "$16", "$47", "$28", "$23", "$45", "$2", "$45"], "$428"), true)
// console.log(hasHiddenFee(["$32", "$22", "$16", "$34", "$6", "$10", "$19", "$25", "$46"], "$282"), true)
// console.log(hasHiddenFee(["$49", "$43", "$3", "$7", "$35", "$48", "$5", "$47", "$45", "$10", "$18", "$13", "$17", "$32", "$26"], "$398"), false)
// console.log(hasHiddenFee(["$37", "$29", "$22", "$32", "$32", "$51", "$18", "$49", "$19", "$15", "$6", "$18", "$8", "$2", "$36", "$39", "$48", "$25", "$32"], "$518"), false)
// console.log(hasHiddenFee(["$49", "$2", "$10", "$47", "$1", "$5", "$38", "$33", "$7", "$12", "$44", "$50", "$47", "$45", "$37", "$8", "$30"], "$465"), false)
// console.log(hasHiddenFee(["$41", "$38", "$12", "$33", "$34", "$7", "$40", "$19", "$17", "$48", "$41", "$30", "$1", "$38"], "$399"), false)
// console.log(hasHiddenFee(["$30", "$38", "$37", "$13", "$8", "$2", "$43", "$23", "$48", "$50", "$25", "$12", "$34"], "$431"), true)
// console.log(hasHiddenFee(["$11", "$41", "$4", "$6", "$37", "$51", "$1", "$23", "$41", "$18", "$6", "$36", "$40", "$36", "$16", "$10"], "$377"), false)
// console.log(hasHiddenFee(["$45", "$22", "$18", "$3", "$5", "$10", "$30", "$39", "$32"], "$263"), true)
// console.log(hasHiddenFee(["$49", "$32", "$47", "$14", "$47", "$51", "$27", "$51", "$18", "$44", "$16", "$29", "$39", "$16", "$1", "$12", "$16", "$48", "$44", "$41"], "$642"), false)
// console.log(hasHiddenFee(["$37", "$3", "$7", "$5", "$23", "$1", "$11", "$50", "$9", "$5", "$16", "$30"], "$197"), false)
// console.log(hasHiddenFee(["$50", "$12", "$43", "$45", "$44", "$38", "$17", "$2", "$42", "$9", "$37", "$25", "$33", "$35", "$51"], "$510"), true)
// console.log(hasHiddenFee(["$35", "$17", "$35", "$24", "$29", "$21", "$50", "$8", "$44", "$45", "$13", "$44", "$17", "$42", "$51", "$10", "$47", "$46", "$47", "$18"], "$643"), false)
// console.log(hasHiddenFee(["$37", "$29", "$5", "$2", "$27", "$7", "$4", "$32", "$6", "$27", "$24", "$43", "$41", "$15", "$13", "$25", "$27", "$44"], "$501"), true)
// console.log(hasHiddenFee(["$1", "$5", "$19", "$26", "$14", "$51", "$51", "$27", "$6", "$13", "$28", "$40", "$21", "$20", "$10", "$27"], "$412"), true)
// console.log(hasHiddenFee(["$4"], "$84"), true)
// console.log(hasHiddenFee(["$13", "$9", "$49", "$2", "$18"], "$91"), false)
// console.log(hasHiddenFee(["$23", "$14", "$42", "$28", "$18", "$35", "$22", "$37", "$6", "$35", "$33", "$37", "$12", "$45", "$6", "$27", "$3", "$9"], "$530"), true)
// console.log(hasHiddenFee(["$21", "$2", "$16", "$49", "$26", "$32", "$7", "$33", "$4", "$28", "$12", "$24", "$39", "$39", "$28", "$13", "$27", "$33"], "$490"), true)
// console.log(hasHiddenFee(["$9", "$20", "$46", "$36", "$14"], "$151"), true)
// console.log(hasHiddenFee(["$50", "$37", "$27", "$39", "$3", "$10", "$18", "$39", "$27", "$24", "$18", "$6", "$23", "$36", "$33", "$3", "$20"], "$413"), false)
// console.log(hasHiddenFee(["$3", "$15", "$8", "$24", "$41", "$22", "$5", "$21", "$51", "$9", "$45", "$25", "$26", "$9", "$18", "$34", "$16", "$12", "$5", "$24", "$12"], "$438"), true)
// console.log(hasHiddenFee(["$48", "$44", "$15", "$3", "$22", "$33", "$18", "$28", "$12", "$34", "$20", "$21", "$48", "$28", "$6", "$2", "$40", "$49", "$6"], "$477"), false)
// console.log(hasHiddenFee(["$6", "$4", "$27", "$8", "$7", "$48", "$41"], "$236"), true)
// console.log(hasHiddenFee(["$38", "$30", "$24", "$15", "$5", "$1", "$50", "$41", "$20", "$12", "$18", "$48", "$18"], "$320"), false)
// console.log(hasHiddenFee(["$31", "$48", "$15", "$7", "$36", "$32", "$15"], "$184"), false)
// console.log(hasHiddenFee(["$3", "$10", "$39", "$51", "$40", "$21", "$23", "$39", "$1", "$39", "$49", "$47", "$32", "$45", "$37", "$34", "$20", "$33"], "$563"), false)
// console.log(hasHiddenFee(["$51", "$1", "$14", "$26", "$10", "$31", "$25"], "$158"), false)
// console.log(hasHiddenFee(["$2", "$12", "$14", "$50", "$16", "$24", "$9", "$19", "$50", "$3", "$16", "$26", "$31", "$41"], "$317"), true)
// console.log(hasHiddenFee(["$38", "$5", "$4", "$16", "$13", "$2", "$39", "$28", "$35", "$50", "$32", "$26", "$39"], "$327"), false)
// console.log(hasHiddenFee(["$17", "$41", "$26", "$40", "$50", "$36", "$6", "$2", "$28", "$42", "$7", "$35", "$39", "$31", "$33", "$43"], "$476"), false)
// console.log(hasHiddenFee(["$1", "$23", "$46", "$20", "$37", "$42", "$19"], "$188"), false)
// console.log(hasHiddenFee(["$25", "$41"], "$66"), false)
// console.log(hasHiddenFee(["$13", "$1", "$23", "$12"], "$49"), false)
// console.log(hasHiddenFee(["$49", "$38", "$16", "$40", "$20", "$36", "$39", "$46"], "$353"), true)
// console.log(hasHiddenFee(["$33"], "$84"), true)
// console.log(hasHiddenFee(["$40", "$49", "$21", "$14", "$48", "$40", "$13"], "$307"), true)
// console.log(hasHiddenFee(["$38", "$25", "$51", "$30", "$25", "$14", "$39", "$9", "$6", "$46"], "$283"), false)
// console.log(hasHiddenFee(["$3", "$44", "$7", "$33", "$46", "$13", "$8", "$40", "$2"], "$196"), false)
// console.log(hasHiddenFee(["$4", "$23", "$2", "$40", "$35", "$40", "$39", "$18", "$28", "$49", "$15", "$16", "$12", "$3", "$30", "$29", "$38"], "$421"), false)
// console.log(hasHiddenFee(["$47", "$35", "$4", "$49", "$31", "$40", "$48", "$47", "$22", "$51", "$33", "$46", "$50"], "$535"), true)
// console.log(hasHiddenFee(["$42"], "$136"), true)
// console.log(hasHiddenFee(["$18", "$28", "$50", "$1"], "$97"), false)
// console.log(hasHiddenFee(["$25", "$30", "$28", "$17", "$4", "$7", "$24", "$12", "$15", "$15", "$44", "$26", "$47", "$16"], "$310"), false)
// console.log(hasHiddenFee(["$10", "$38", "$7", "$49", "$33", "$18", "$25", "$16", "$2", "$17", "$35", "$11", "$44", "$35", "$49", "$22"], "$411"), false)
// console.log(hasHiddenFee(["$8", "$3", "$28", "$19", "$18", "$28", "$24", "$8", "$20", "$36", "$28", "$37"], "$320"), true)
// console.log(hasHiddenFee(["$7", "$6", "$34", "$10", "$31", "$5", "$29", "$13", "$40", "$30", "$21", "$49", "$44", "$4", "$2", "$10", "$3", "$1", "$7", "$12", "$50"], "$487"), true)
// console.log(hasHiddenFee(["$11", "$51", "$46", "$19", "$25", "$51", "$48", "$18", "$17", "$16", "$18", "$6", "$6", "$48", "$41", "$20", "$7"], "$489"), true)
// console.log(hasHiddenFee(["$6", "$20", "$25", "$41", "$24", "$26", "$41", "$47", "$6", "$17", "$22", "$7", "$3", "$23", "$48", "$48"], "$456"), true)
// console.log(hasHiddenFee(["$15", "$26", "$26", "$23"], "$93"), true)
// console.log(hasHiddenFee(["$21", "$14", "$45", "$20", "$24", "$36", "$34"], "$194"), false)
// console.log(hasHiddenFee(["$5", "$26", "$16", "$47", "$42", "$24", "$40", "$20", "$22", "$20", "$43"], "$305"), false)
// console.log(hasHiddenFee(["$13", "$19", "$36", "$43", "$18"], "$129"), false)
// console.log(hasHiddenFee(["$11", "$19", "$25", "$5", "$11", "$35", "$21"], "$138"), true)
// console.log(hasHiddenFee(["$7", "$42", "$27", "$17", "$13"], "$123"), true)
// console.log(hasHiddenFee(["$41"], "$41"), false)
// console.log(hasHiddenFee(["$3", "$15", "$4", "$7", "$2", "$7", "$4", "$6", "$16", "$24", "$30", "$20", "$8", "$14", "$35", "$15", "$13", "$34", "$26", "$11", "$37"], "$331"), false)
// console.log(hasHiddenFee(["$1", "$24", "$43", "$26", "$32", "$11", "$49", "$20", "$15", "$37", "$24", "$12", "$34", "$41", "$41", "$23", "$32", "$44", "$23", "$42", "$42"], "$681"), true)
// console.log(hasHiddenFee(["$24", "$9", "$27"], "$128"), true)
// console.log(hasHiddenFee(["$25", "$14", "$21", "$26", "$20", "$50", "$26", "$43", "$27", "$16", "$49", "$51", "$33", "$26", "$39", "$29", "$4", "$35", "$39"], "$645"), true)
// console.log(hasHiddenFee(["$9", "$20", "$36", "$51", "$15", "$26"], "$157"), false)
// console.log(hasHiddenFee(["$16", "$28", "$28", "$26", "$22", "$23", "$33", "$8", "$38", "$21", "$4", "$13"], "$302"), true)
// console.log(hasHiddenFee(["$28", "$2"], "$30"), false)
// console.log(hasHiddenFee(["$50", "$44", "$51", "$17", "$29", "$9", "$6", "$14", "$6", "$5", "$38", "$51", "$34", "$18", "$40", "$20", "$7"], "$512"), true)
// console.log(hasHiddenFee(["$37"], "$132"), true)
// console.log(hasHiddenFee(["$38", "$40", "$26", "$51"], "$203"), true)
// console.log(hasHiddenFee(["$8", "$5", "$5"], "$70"), true)
// console.log(hasHiddenFee(["$29", "$16", "$36", "$25"], "$161"), true)
// console.log(hasHiddenFee(["$40", "$7", "$8", "$47", "$19", "$7"], "$128"), false)
// console.log(hasHiddenFee(["$33", "$2", "$43", "$1", "$36", "$33", "$3"], "$220"), true)
// console.log(hasHiddenFee(["$11", "$17", "$43", "$4", "$6", "$8", "$51", "$32", "$15", "$20", "$2", "$41", "$12", "$5"], "$267"), false)
// console.log(hasHiddenFee(["$28", "$2", "$7", "$50", "$28", "$40", "$51", "$29", "$18", "$49", "$18", "$44", "$39", "$44", "$3", "$16", "$10", "$19", "$7"], "$502"), false)
// console.log(hasHiddenFee(["$40", "$37", "$36", "$50", "$33", "$27", "$27", "$50", "$39", "$29", "$3", "$40", "$13", "$10", "$2", "$37", "$35", "$33"], "$641"), true)
// console.log(hasHiddenFee(["$23", "$13", "$5", "$12", "$28"], "$81"), false)

// function evenLast(ar)
// {
//     return ar.reduce
//     ((acc, cur, i) =>
//             i % 2 == 0 ? acc + cur : acc
//         ,0) * ar.slice(-1);
// };

// console.log(evenLast([-11, 3, 3, 1, 10]))
// console.log(evenLast([]), 0)
// console.log(evenLast([1, 3, 3, 1, 10]), 140)
// console.log(evenLast([-11, 3, 3, 1, 10]), 20)
// console.log(evenLast([1, 31, 3, 11, 0]), 0)
// console.log(evenLast([1, 2, 3, 4, 5, 6, 8]), 136)
// console.log(evenLast([2, 3, 4, 5]), 30)
// console.log(evenLast([2, 4, 6, 8, 9, 11]), 187)
// console.log(evenLast([6, 5, 7, 2, 1]), 14)
// console.log(evenLast([2, 2, 2, 2]), 8)
// console.log(evenLast([5, 1, 2, 3, 4, 6, 7, 8, 4]), 88)
// console.log(evenLast([2, 4, 3, 2, 3, 4, 4, 5]), 60)
// console.log(evenLast([7, 23, 22, 6, 8, 2]), 74)
// console.log(evenLast([33, 2, -22, 5, -6, 5]), 25)
// console.log(evenLast([5, 6, 7, 3, 22, 2]), 68)
// console.log(evenLast([3, 4, 5, 6, 7, 8]), 120)
// console.log(evenLast([1, 4, 5, 6, 7, 2, 3]), 48)
// console.log(evenLast([2, 7, 0, 3, 4, 8, 3]), 27)
// console.log(evenLast([9, 3, -6, 2, 7, 8]), 80)
// console.log(evenLast([7, 7, 7, 7, 1]), 15)
// console.log(evenLast([6, 7, 8, 9, 10, 3, 4]), 112)
// console.log(evenLast([9, 8, 7, 6, 5, 4, 3, 2]), 48)
// console.log(evenLast([]), 0)

// function parseURL(url){

//     let result =   /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);

//     let [,protocol, host, path] = result;

//     return {protocol, host, path};
// }

// console.log(parseURL("https://developer.mozilla.org/en-US/Web/JavaScript"))

// console.log(this);

// console.log(window == this)
// var v  =  100;
// console.log(window.v, this.v);
// console.log(window)
//  x = function (){

// function fun(){
//     console.log(this);
//     return this;
// }

// console.log(fun() === window);

// document.getElementById("but").onclick = function(){

//     console.log(this);
// };

// const user = {
//     age: 38,
//     ageInDays: function(){
//         return [this, this.age * 365];
//     }
// }

// console.log(user.age)
// console.log(user.ageInDays())
// let user = {
//     age: 20,
//     doubelAge:function(){
//         return this.age * 2;
//     }
// };
// user.a = 100;
// let obj = Object.create(user);
// console.log(obj.doubelAge());
// console.log(Object.create({}));
// console.log(user.age, user.doubelAge());

// let obj = Object.create({});
// obj.a = 50;
// obj.b = 100;
// console.log(obj);

// let user = {
//     age: 20,
//     doubleAge:function(){
//         return this.age * 2;
//     }
// };

// console.log(user, user.age, user.doubleAge());

// let copyObj = Object.create(user);

// copyObj.age = 50;

// console.log(copyObj, copyObj.age, copyObj.doubleAge())

// function ohmsLaw(v, r, i){

//     let result, ar = [v, r, i].filter(ele => !(ele === ''));

//     if (ar.length === 2){

//         if (v === '')  result = r * i;

//         else if (r === '') result = v / i;

//         else if (i === '') result = v/r;

//         return Math.round(result * 100) / 100;

// }
//     return "Invalid";
// };

// console.log(ohmsLaw(3, 2, 2));
// console.log(ohmsLaw(12, 220, ''), 0.05)
// console.log(ohmsLaw(230, '', 2), 115)
// console.log(ohmsLaw('', 220, 0.02), 4.4)
// console.log(ohmsLaw('', '', 10), "Invalid")
// console.log(ohmsLaw(500, 50, 10), "Invalid")
// console.log(ohmsLaw(12, "", ""), "Invalid")

// let obj1 = {
//     prop1:1,
//     meth1: function(){
//         return this.prop1;
//     }
// };

// let obj2 = {
//     prop2: 2,
//     meth2: function(){
//         return this.prop2;
//     }
// };

// let targetObjet = {
//     prop1: 10,
//     prop3:3
// };

// let final = Object.assign( targetObjet, obj1, obj2);
// final.prop1 = 22;

// console.log(final);

// let newObj = Object.assign({}, obj1, {prop5:5, prop6:6});

// console.log(newObj);

// console.log(typeof console.log);
// console.log(typeof function(){})

// function sayHello(userName, age){
//     if (age <  20) console.log("App is not valid for you!");
//     else
//     console.log(`Hello ${userName}. Your age is ${age}`);
// };

// sayHello("Dawoud", 10);
// sayHello("Muhammad", 30);
// sayHello("Khaled", 21)

// function genYears(s, e, exclude){
//     for (let i =s ; i <= e; i++) {if (i === exclude) continue;
//      console.log(i);}
// };

// genYears(2000, 2011, 2002);

// function sayHello(name){
//     return
//     `Hello ${name}`;
// };
// function calc(n1, n2){
//     return
//     n1 + n2;
// }
// let  result = calc(10, 20);

// console.log(result)

// function generate(start, end ){
//     for (let i=start; i<= end; i++){
//         if (i === 5) return `Interrupting!`;
//         console.log(i);
//     }
// }
// console.log(generate(2, 10));

// function sayHello(name='Unknwon', age='unknown'){
//     // if (age === undefined) age = "unknown"
//     // age = age || "unknown";
//     return `Hello ${name}. Your age is ${age}.`;
// }

// console.log(sayHello());

// function calc(...nums){
//     // console.log(Array.isArray(nums));
//     let result = 0;
//     for (let i = 0; i < nums.length; i++) result += nums[i];
//     return `The sum of nums ${result}`;
// }

// console.log(calc(10, 20, 30, 10, 20, 30));

// function showInfo(us="Un", ag="Un", rt=0, show="yes", ...ski){
//     document.write(`<div>`);
//     document.write(`<h2>Name: ${us}</h2>`);
//     document.write(`<p>Age: ${ag}</p>`);
//     document.write(`<p>Hour rate: $${rt}`);
//     if (show.toLowerCase() === "yes") {
//          (ski.length > 0) ?
//           document.write(`<p>Skills: ${ski.join(" | ")}</p>`)

//           :document.write(`<p>Skills: He has no skills, yet.</p>`)
//     }
//     else {
//         (ski.length > 0)?
//             document.write(`<p>Skills: Hidden`)
//             :
//             document.write(`<p>Skills: No Skills`)
//     }
//     document.write(`</div>`);
// }

// showInfo("Dawoud", 24, 200, 'yes', "html", "CSS")

// function showDetails(...args){
//     let name, age, status;

//     for (let ele of args){

//         (typeof ele === 'string')? name = ele:

//         typeof ele === "number" ? age = ele:

//         status = ele;

//     }
//     return `Hello ${name}, Your age is ${age}, You are ${status? 'available' : "not available"} for hire.`;
// };

// console.log(showDetails(false, 90, "dawoud"))
// console.log(calc(10, 20));
// function calc(n1, n2){
//     return n1 + n2;
// }
// let calculat = function (n1, n2){
//     return n1+n2;
// }
// console.log(calculat(2, 3))

// document.getElementById("show").onclick = sayHello;

// setTimeout(sayHello()
// , 2000);

// function sayHello(){
//     console.log("Hello Dawoud");
// }

// function sayMes(fName, lName){
//     let mes = `Hello`;
//     function concat(){
//         function fullName(){
//             return `${fName} ${lName}`;
//         }
//         return  `${mes} ${fullName()}.`;
//     }
//     return concat();
// }

// console.log(sayMes("Hamed", "Dawoud"))

// let print = function(){
//     return 10;
// }
// let print = _ => 10;
// console.log(print());

// let print = function(n){
//     return n;
// }
// let print = n => n;
// let print = function(n1, n2){
//     return n1 + n2;
// }

// let print = (n1, n2) => {
//     let sum = n1+n2;
//     return sum;
// } ;
// console.log(print(20, 350));

// var a = 1;
// let b = 2;
// function show(){
//     var a = 4;
//     console.log(`From Function Scope: ${a}`);
//     let b = 5;
//     console.log(`From Function Scope: ${b}`);
// }

// console.log(`From Global Scope: ${a}`);
// console.log(`From Global Scope: ${b}`);
// show();

// var  x =  10;
// if (10 === 10){
//     let x = 50;
//     console.log(`From Block Scope: ${x}`);
// }
// console.log(`From Globa ${x}`);

// function parent(){
//     let a = 10;
//     function child(){
//         let a = 20;
//         function grand(){
//             let b = 30;
//             console.log(a);
//         }
//         console.log(b);

//         grand();
//     }
//     console.log(a);
//     child();
// }
// parent();

// let names = function(...names){
//     return `String [${names.join("], [")}] => Done!` ;
// };

// let names = (...name) => `String [${name.join("], [")}] => Done!` ;
// console.log(names("Muhammad", "Ahmed", "Farag", "Dawoud", "Adel"));

// function reverse(string){

//     let re = '';
//     for (let i = string.length-1; i >= 0 ; i--){

//         if (string[i].toUpperCase()===string[i])
//             re += string[i].toLowerCase();

//         else
//             re += string[i].toUpperCase();

//     }
//     return re;
// }

// console.log(reverse('hello'));
// console.log(reverse("Hello World"), "DLROw OLLEh")
// console.log(reverse("ReVeRsE"), "eSrEvEr")
// console.log(reverse(""), "")
// console.log(reverse("Radar"), "RADAr")

// console.log( 10 * -20);

// console.log(20 / 3);

// console.log( 2 ** 4 === 2 * 2 * 2 * 2);

// console.log(11 / 2, 11 % 2);

// console.log(35 % 2 , 34 % 2, 35 / 2 );

// console.log(+100, +'100');
// console.log("100");
// console.log(+"-123");
// console.log(+'Dawoud');
// console.log(+"15.5");
// console.log(+0XFF);
// console.log(+null, +false, +true, +'', +[])

// console.log(-100, -'-100', -"Dawoud", -"15.5", -0xff, -false, -true, -null);

// console.log(Number("100"));
// let a = '10';
// let b = 20;
// let c = true;
// a = "dawoud";
// console.log(+a + +b, Number(a)+Number(b));
// console.log(b - c);
// console.log("" - 2, +"");
// console.log(+false - +true);
// console.log( +a + b + c);
// let a = 10;
// a = a + 20;
// a += 20;
// a += 70;
// a -= 50;
// a /= 5;
// console.log(a)

// let a = 10;
// let b = '20';
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// 11 + 20 + 80 - 11
// a = 12 , b = 21, c = 81
// console.log(a, b, c);

// console.log(++a + -b + +c++ - -a++ + +a );
// 13 - 21 + 81 + 13 + 14

// a = 14 , b = 21, c = 82

// 81 + 21 + 13 * 21 - 2- * 13 + 12 - 1
// console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 -1)
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(-d * e);
// console.log(-d + 2 * +e + f + 3 * +true);

// let day = 3;

// switch(day){
//     default :
//     console.log("No!");
//     break;

//     case 0:
//         console.log("Saturday");
//         break;
//     case 1:
//         console.log('Sunday');
//         break;
//     case 2:
//     case 3:
//         console.log("Monday");
//         break;

// }

// let job = "Develop";
// let salary = 0;

// switch(job){
//     case "Manager":
//         salary = 8;
//         break;
//     case "IT":
//     case "Support":
//         salary = 6;
//         break;
//     case "Developer":
//     case "Designer":
//         salary = 7;
//         break;
//     default :
//         salary = 4;
// };
// console.log(salary * 1000)

// let holidays = 3;
// let money = 0;

// if (holidays === 0){
//     money = 5;
// }

// else if (holidays === 1 || holidays === 2){
//     money = 3;
// }

// else if (holidays === 3){
//     money = 2;
// }

// console.log(money * 1000);

// function getContainer(product){
//     let container;

//     switch(product)
//     {
//         case "Bread":
//             container = "bag";
//             break;

//         case "Beer":
//         case "Milk":
//             container = "bottle";
//             break;

//         case "Cerials":
//             container = "box";
//             break;
//         default :
//             container = null;
//             break;

//         case "Eggs":
//             container = "carton";
//             break;

//         case "Candy":
//             container = "plastic";

//     }

//     return container;
// }

// console.log(getContainer("Bread"));
// console.log(getContainer("Milk"));
// console.log(getContainer("Beer"));
// console.log(getContainer("Eggs"));
// console.log(getContainer("Candy"));
// console.log(getContainer("Cheese"));
// console.log(Array.from("Dawoud"));
// console.log(Array.from('12345'));

// console.log(Array.from("12345").map(ele => Number(ele) * 2));

// console.log(Array.from("24891", (ele)=> 2 * +ele
// ));

// console.log(Array.from("24891",function(ele){
//     return 2 * +ele;
// }))

// let myArray = [1, 1, 1, 1, 2, 3, 4];
// console.log(Array.from(new Set(myArray)));

// console.log([...new Set(myArray)]);

// function af(){
//     return Array.from( arguments);
// }

// console.log(af("Dawoud", "Sayed", "Khaled", "Hager", 2, 4));

// const locations = {
//     20: "Place 1",
//     30: "Place 2",
//     16 : "Place 3",
//     40: "Place 4"
// };

// let mainLocation = 16;

// let locationArray = Object.keys(locations).map(Number);

// console.log(locationArray.every(function(ele){
//     return ele > this
// }, mainLocation));

// console.log(locationArray.every(ele => ele >= mainLocation));

// function incrementToTop(ar){

//     // let max = 0, steps = 0;

//     // for (let num of ar)
//     //     if (num > max) max = num;

//     // for (let num of ar){
//     //     steps += -num + max;
//     // };

//     // return steps;

//     let max = Math.max(...ar);
//     let steps = ar.reduce((steps, num) => steps + (max - num), 0);

//     return steps;

// }

// console.log(incrementToTop([3, 10, 3]));
// console.log(incrementToTop([3, 4, 5]), 3)
// console.log(incrementToTop([4, 3, 4]), 1)
// console.log(incrementToTop([3, 3, 3]), 0)
// console.log(incrementToTop([3, 10, 3]), 14)
// console.log(incrementToTop([1, 2, 3, 4, 5]), 10)

// function invert(string){

//     return [...string].reduce((acc, cur) =>

//         cur.toUpperCase() === cur ?

//         cur.toLowerCase()+acc :

//         cur.toUpperCase() + acc

//     , '');
// };

// console.log(invert("dLROW YM sI HsEt"));
// let [strVector, resVector] = [
//     [
//       "dLROW YM sI HsEt", "This string is CASE and INDEX reversed", "ReVeRsIbLe", "rAmIfIcAtIoN", "IntellectualS",
//       "DESREVER xedni DNA esac SI GNIRTS SIHt", "ElBiSrEvEr", "nOiTaCiFiMaR", "sLAUTCELLETNi",
//       "CoNSaGuiNiTY", "step on NO PETS", "dExtErIty cOmplEx"
//     ], [
//       "TeSh iS my worlD", "DESREVER xedni DNA esac SI GNIRTS SIHt", "ElBiSrEvEr", "nOiTaCiFiMaR", "sLAUTCELLETNi",
//       "This string is CASE and INDEX reversed", "ReVeRsIbLe", "rAmIfIcAtIoN", "IntellectualS",
//       "ytInIUgAsnOc", "step on NO PETS", "XeLPMoC YTiReTXeD"
//     ]
//   ]
//   for (let i in strVector) console.log(invert(strVector[i])  === resVector[i])

// window.console.log("Good");
// window.document.title = "Hello";

// this.alert("Hello");
// window.alert("Hello")
// alert("hello")
// console.log("Good");
// let confi = confirm("Do you want to close or not?");

// if (confi){
//     console.log("Hello OK!");
// }else{
//     console.log("Not Good For You.");
// }

// let prom = prompt("What if the good day for you?", 'Write day with 3 chars');
// console.log(prom);
// if (prom === '1' || prom === '2' || prom === '3'){
// console.log(prom +" is Good.")
// }

// for (let i = 0; i < 3; i++){
//     setTimeout(function(){
//         console.log("Msg");
//     }, 1000)

// }

// setTimeout(function(){
//     console.log("Good")
// }, 1000)
// setTimeout(sayHello, 1000);
// setTimeout(sayHello , 2000);
// function sayHello(){
//     console.log("Hello From Function");
// }

// setTimeout(sayHello, 1000, "Dawoud Khaled", 20);

// function sayHello(name, age){
//     console.log(`Hello ${name}. The age is > ${age}`)
// }

// let button = document.querySelector("button");
// button.addEventListener("click", _ => clearTimeout(1))

// let time = setTimeout(sayHello, 2000);
// console.log(time);
// function sayHello(){
//     console.log("Hello");
// }
// setInterval(sayHello, 1000, "Dawoud", 20);

// function sayHello(name, age){
//     console.log(`Hello ${name}. Age > ${age}`);
// }

// let div = document.querySelector("div");

// function countDown(){

//     // console.log(div.innerHTML);
//     div.innerHTML -= 1;

//     if (div.innerHTML === '0')
//         clearInterval(counter);
//     // div.innerHTML = div.innerHTML;
// }

// let counter = setInterval(countDown, 1000);

// for (let i = 0; i < 10; i++){
//     console.log(i+1);
// }

// let myFriends = [1, 2,"Khaled", "Hager",4, 5, "Zeinab", "Ahmed", "Adel"];
// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);
// let onlyNames = [];
// for (let i = 0; i < myFriends.length; i ++)
//     if (typeof myFriends[i] === 'string')
//         onlyNames.push(myFriends[i]);

// console.log(onlyNames);

// let prods = ["keyboard", "Mouse",1, 5, "Pen",2, 4, 5, "Pad", "Monitor"];
// let colors = ["Red", "Green", "Black"];
// let models = [2020, 2021];

// for (let i = 0; i < prods.length; i++){
//     console.log("#".repeat(15));
//     console.log(`# ${prods[i]}\nColors:`);

//     for (let i = 0; i<colors.length;i++){
//         console.log(`${i+1}: ${colors[i]}`);
//     };
//     console.log("Models:")
//     for (let i= 0; i < models.length;i++){
//         console.log(models[i]);
//     }
// };

// MainLoop:for (let i = 0; i < prods.length;i++){
//     if (typeof prods[i] === "number"){
//         continue  ;
//     }
//     console.log(prods[i]);
//     MinLoop:for (let i = 0; i < colors.length;i++){
//         if (colors[i] === 'Black') break MinLoop;
//         console.log(`- ${colors[i]}`);

//     }
// }

// function magnitude(ar){

//     let sumOfSquares = ar.
//     map(ele => ele ** 2).
//     reduce((sum, x) => sum + x, 0);

//     return Math.sqrt(sumOfSquares);
// }

// console.log(magnitude([2, 3, 6, 1, 8]));
// // Basic tests
// console.log(magnitude([3,4]) === 5,'basic test not met');
// console.log(magnitude([0,0,-10]) === 10,'basic test not met');
// console.log(magnitude([]) === 0,'basic test not met');
// console.log(magnitude([2,3,6,1,8]) === 10.677078252031311,'basic test not met');

// // Extra tests
// console.log(magnitude([9,-9,3]) === 13.076696830622021);
// console.log(magnitude([-24,94,4,0,10]) === 97.61147473529944);

// function getLength(ar){
//     return ar.flat(Infinity).length;
// }

// console.log(getLength([1, [2, [3, 4]]]));
// console.log(getLength([1, [2,3]]), 3)
// console.log(getLength([1, [2, [3, 4]]]), 4)
// console.log(getLength([1, [2, [3, [4, [5, 6]]]]]), 6)
// console.log(getLength([1, 7, 8]), 3)
// console.log(getLength([2]), 1)
// console.log(getLength([2, [3], 4, [7]]), 4)
// console.log(getLength([2, [3, [5, 7]], 4, [7]]), 6)
// console.log(getLength([2, [3, [4, [5]]], [9]]), 5)
// console.log(getLength([]), 0)

// let getStudentsWithNamesAndTopNotes = objs =>
//      objs.map( ({name, notes}) =>
//     ({name,  topNote:notes.length ? Math.max(...notes) : 0})
// );

// console.log(getStudentsWithNamesAndTopNotes([
//     { "name": "John", "notes": [3, 50, 4] },
//     { "name": "Max", "notes": [1, 4, 60] },
//     { "name": "Zygmund", "notes": [2, 3, 22] }
//   ]));

// const  isFirstSuperior = (ar1, ar2) => {

//     for (let i in ar1)
//         if (ar1[i] > ar2[i]) return true;

//     return false;
// };
// console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 3, 3]), true)
// console.log(isFirstSuperior(['a', 'b', 'c'], ['a', 'd', 'c']), false)
// console.log(isFirstSuperior([true, 10, 'zebra'], [true, 10, 'zebra']), false)
// console.log(isFirstSuperior([true, 10, 'zebra'], [true, 10, 'ant']), true)
// console.log(isFirstSuperior([true, true, false, true], [true, true, true, true]), false)
// console.log(isFirstSuperior([9.1, 8.1, 7.1, 6.1], [9.1, 8.1, 7.1, 5.1]), true)
// console.log(isFirstSuperior(['llama', 'alligator'], ['llama', 'buffalo']), false)
// console.log(isFirstSuperior(['zebra', 'ostrich', 'whale'], ['ant', 'ostrich', 'whale']), true)
// console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]), false)
// console.log(isFirstSuperior([true, 10, 'zebra'], [true, 10, 'zebra']))

// function checkTitle(string){
//     return string.split(" ").every(word => word[0].toUpperCase() === word[0]);
// }
// console.log(checkTitle('A Mind Boggling achievement'));
// console.log(checkTitle("A Mind Boggling Achievement"), true, "error")
// console.log(checkTitle("A Simple Java Script Program!"), true, "error")
// console.log(checkTitle("Water is transparent"), false, "error")

// let colors = ["Red", "Green", "Blue"];

// let count = 5;

// document.write(`<h1>Show ${count} Products.</h1>`);

// for (let i = 0; i < count; i++){
//     document.write(`<h3>[${i+1}] ${prods[i]}</h3>`)
//     document.write(`<h5>Colors: ${colors.join(" ")}`)
// }

// let i = 0;
// let l = prods.length;

// while(i < l){
//     console.log(prods[i]);
//     i ++ ;
// }

// let prods = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone" ];

// let i = 0;
// let l = prods.length;

// do {
//     console.log(prods[i]);
//     i++;
// } while (false);

// console.log(i);
// let admins = ["Khamas","Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let employees = ["Amgad", "Samah", "Ameer", "Omar","Anwar", "Othman","Khaled", "Amany", "Samia", "Summer"];

// let i = 0, l = admins.length;

// while(i < l){
//     if (admins[i] === "Stop") break;
//     i++;
// };

// document.write(`<div>We Have ${i} Admins.`);

// for (let j = 0 ; j < i ; j ++){

//     document.write(`<hr><div>`);
//     document.write(`The Admin For Team ${j+1} Is ${admins[j]}.`);
//     document.write(`<h3>Team Members:</h3>`);
//     let num = 1;
//     for (let name of employees){
//         if (name[0] === admins[j][0]){
//             document.write(`<p>- ${num} ${name}</p>`)
//             num ++;
//         }
//     }
//     document.write(`</div>`);
// }

// location.href = "https://google.com";

// location.href = "https://elzero.org/javascript-2021-regular-expression-challenge/";
// console.log(location.href)

// console.log(location.host);
// console.log(location.hostname, "hello");

// console.log(location.protocol)
// console.log(location.hash, "hello");

// setTimeout(() => {
//     window.open("https://www.google.com", "_blank", "width=400,height=400, top=100, left=200");
// }, 2000);

// console.log(history);

// let newWindow = window.open("", "", "width=500,height=500");
// newWindow.document.write(`<p>Hello, I'm a pop up!`)
// setTimeout( () => {
//     newWindow.close();
// }, 2000)

// window.scrollTo({
//     left: 500,
//     top: 500,
//     behavior: 'smooth'
// })

// console.log(window.scrollX, window.scrollY)

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

// document.querySelector(".name").onblur = function(){
//     // console.log(this.value);
//     window.sessionStorage.setItem("name", this.value);
// }

// document.querySelector(".name").value = window.sessionStorage.getItem("name");

// let names = ["Hager", "Muhammad", "Sarah", "Khaled"];
// var a = 4, b = 3,c = 2, d = 1, e;
// [a, b, c, d, e = "hello"] = names;

// console.log(a, b, c, d, e);
// console.log(names[4]);

// let a = 1;

// let b = "hello";

// let ar = [2, 4, 5, 10];
// function saySomething(){
//     return `something`;
// }
// export {a, b , saySomething, ar};

// function sayHello(){
//     return `Hello`;
// };
// export default ()=>{
//     return "Hello an";
// };

// let form = document.getElementById("register");

// form.onsubmit = function(){
//     let phone = document.getElementById("phone").value;
//     let value = /\(\d{4}\)\s\d{3}-\d{4}/g;
//     if(!value.test(phone)) return false;
//     return true;

// }

// function showInfo(us = "un", age = "un", rt=0, show="yes", ...sk){
//    document.write(`<div>`);
//    document.write(`<h2>Welcome ${us}</h2>`);
//    document.write(`<p>Age: ${age}</p>`);
//    document.write(`<p>Hour Rate: ${rt}`);
//    if (show === 'yes' && sk.length > 0) {
//     document.write(`<p>Skills : ${sk.join(" ")}`)
//    }
//    else if (sk.length === 0) {
//     document.write(`<p>No skills`);
//    }
//    else{
//     document.write(`<p>Skills are hidden.`)
//    }
//    document.write(`</div>`);
// };

// showInfo("Dawoud", 38, 20, "no", "html");

// function showDetails( ...details){
//     let name , age , hire;
//     for (let ele of details ){
//         if (typeof ele === "string") name = ele;
//         else if (typeof ele === "number") age = ele;
//         else if (typeof ele === "boolean") hire = ele;
//     }

//     return `Hello ${name}. Your age is ${age}. You are ${hire ? "available for hiring" : "not available for hiring"}`
// };

// console.log(showDetails("dawoud", 22, false))
// console.log(showDetails(22, false, "dawoud"));
// console.log(showDetails(false, 22, "dawoud"));
// console.log(showDetails("dawoud", false, 22))

// function sayHello(){
//     console.log("Hello");
// }
// document.getElementById("hello").onclick = sayHello;;

// setTimeout(function()  {
//     console.log("Good")
// }, 2000);

// function sayMes(first, last){
//     let message = `Hello`;
//     function concat(){
//         function getFull(){
//             return `${first} ${last}`;
//         }
//         message = `${message}, ${getFull()}`;
//         return message;

//     };

//     return concat();
// };
// console.log(sayMes("Hager", "Khaled"))

// let print = function (){
//     return  110;
// };
// let print = _ => 10;
// console.log(print());

// let print = function(num){
//     return num;
// };

// let print = num => num;

// let print = function(n1, n2){
//     return n1 + n2;
// };
// let nums  = [1, 2, 3, 4, 5, 6];

// console.log(nums.map(num => num * 2));
// let ar : number[]= [];

// for  (let i = 0; i < nums.length ; i++) (ar.push(nums[i] * 2))

// console.log(ar);

// let double = nums.map(function(ele, index, ar){
//    console.log( index, ele, ar, this);
// }, 200);

// double;

// let lis = document.querySelectorAll("ul li");
// let button = document.querySelector("#hide");
// let divs = document.querySelectorAll("div");
// lis.forEach(ele => {

//     ele.onclick = function(){
//         lis.forEach(ele => ele.classList.remove("active"));
//         console.log(this);
//         this.classList.add("active");
//         divs.forEach(div => div.style.display = "none")
//     };

// });

// button.onclick = function(){
//     divs.forEach(div => div.style.display = "block")

// }

// console.log(this === window);

// var x =  100;

// console.log(this.x);
// console.log(window.x)

// function sayHello(){
//     return this;
// };

// console.log(sayHello() === window)

// document.getElementById("hide").onclick = function(){
//     console.log(this.);
// }

// let user = {
//     age: 38,
//     ageIndays: function(){
//         console.log(this);
//         return user.age * 365
//     }
// };
// console.log(user.age, user.ageIndays())

// let user = {
//     age: 40,
//     doubleAge: function(){
//         return this.age * 2;
//     }
// };
// let another = Object.create(user);
// another.age = 100;
// console.log(another.age);
// console.log(another.doubleAge());

// let obj1 = {
//     prop1: 1, meth1:function(){return this.prop1;}
// };
// let obj2 = {
//     prop2: 2,meth2: function(){return this.prop2;
//     }
// };

// let targetObject = {
//     prop1: 100,
//     prop3:3
// };

// let final = Object.assign( targetObject, obj1, obj2);
// final.prop1 = 200;
// console.log(final);

// let newObj = Object.assign({name: "Dawoud"}, obj1, {age: 28});

// console.log(newObj);

// let ourdiv = document.getElementById("our-div");
// let tagMethod = document.getElementsByTagName("p");
// let className = document.getElementsByClassName("my-span")
// tagMethod[0].innerHTML = "Test";
// console.log(tagMethod[0])

// console.log(className)

// let special = document.querySelectorAll(".my-span");
// console.log(special[1-1]);

// console.log(document.body)
// console.log(document.forms[0].one.type)

// console.log(document.links[0].href);

// console.log("Hello");

// let count = 5;
// let div = document.getElementById("time");
// let ourTime = setInterval(() => {
//     div.textContent = count;
//     count--;
//     if (count < 0) {
//         div.textContent = "Done";
//         clearInterval(ourTime);
//     };
// }, 1000)

// const bars = document.querySelectorAll(".bar");

// bars.forEach((bar) => {
//     bar.style.width = bar.getAttribute("data-width");
//     // bar.style.height = bar.getAttribute("data-width");

// });

// const ar = [
//     { id: 1, title: "one" },
//     { id: 2, title: "two" },
// ];
// console.log(ar.find((el) => el.id === 2).title);

// const ar = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 50, 12, 100, 13, 14, 15, 16, 17, 18, 19,
//     20,
// ];
// ar.forEach(
//     (el) =>
//         (document.getElementById("show").innerHTML = ar.reduce((acc, cur) =>
//             acc > cur ? acc : cur
//         ))
// );

// let text =
//         "Hello from Elzero Web School This is the type effect writer with js.",
//     i = 0,
//     myButton = document.getElementById("button");

// myButton.onclick = () => {
//     let writer = setInterval(() => {
//         document.getElementById("type").textContent += text[i];
//         i++;
//         if (i === text.length) {
//             clearInterval(writer);
//             myButton.disabled = true;
//         }
//     }, 100);
// };
