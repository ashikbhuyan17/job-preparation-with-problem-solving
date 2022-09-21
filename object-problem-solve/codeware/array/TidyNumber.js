function tidyNumber(num) {
    let prev = 10;
    while (num != 0) {
        let rem = num % 10;
        num /= 10;
        if (rem > prev)
            return false;
        prev = rem;
    }

    return true;
}
let num = 1556;
console.log(tidyNumber(num));