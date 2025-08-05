function createStars(num) {
    // Your Code Here
    let stars = 1;
    for (let i = 0; i < num; i++) {
        console.log("*".repeat(stars));
        stars += 2;
    }
}

createStars(8);

// Output Needed
//   *
//   ***
//   *****
//   *******
//   *********
//   ***********
//   *************
//   ***************
