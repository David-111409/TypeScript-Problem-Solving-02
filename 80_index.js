function dashBetweenOdd(num) {
    let ar = num.toString().split("");
    let n = ar.length - 1;

    return ar
        .map((el, ind) =>
            +el % 2 && +ar[ind + 1] % 2 && ind < n ? el + "-" : el
        )
        .join("");
}

console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922
