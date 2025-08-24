function pyramid(n) {
    for (let i = n; i > 0; i--) {
        // spaces = n - i
        let spaces = " ".repeat(n - i);

        // stars = 2 * i - 1
        let stars = "*".repeat(2 * i - 1);

        console.log(spaces + stars);
    }
  
    for (let i = 1; i <= n; i++) {
        // spaces = n - i
        let spaces = " ".repeat(n - i);

        // stars = 2 * i - 1
        let stars = "*".repeat(2 * i - 1);

        console.log(spaces + stars);
    }
}

pyramid(6);
