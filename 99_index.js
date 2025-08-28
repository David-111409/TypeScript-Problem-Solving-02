let myStr = "Elzero";
String.prototype.addLove = function () {
    return `I love ${this} Web School`;
};
console.log(myStr.addLove(), "dawoud".addLove()); // I Love Elzero Web School // I love dawoud Web School
