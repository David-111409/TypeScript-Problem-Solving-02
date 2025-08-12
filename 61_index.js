
function createStars(num) {
    let str = "";
    // let stars = 1;
    // for (let i = 0; i < num; i++) {
    //     console.log("*".repeat(stars));
    //     stars += 2;
    // }
    // stars -= 4;
    // for (let i = 0; i < num - 1; i++){
    //     console.log("*".repeat(stars));
    //     stars -= 2;
    // }
    let stars = 1;
    for (let i = 0; i < num; i++) {
        str += ("*".repeat(stars)) + "\n";
        stars += 2;
    }
    stars -= 4;
    for (let i = 0; i < num - 1; i++){
        str += ("*".repeat(stars)) + "\n";
        stars -= 2;
    }
    return str;

}

console.log(createStars(7));
