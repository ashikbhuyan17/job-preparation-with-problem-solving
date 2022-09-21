function countPositivesSumNegatives(input) {
    if (input == null) {
        return []
    }
    let positiveCount = 0
    let sumNegatives = 0
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        if (element > 0) {
            positiveCount++;
        } else {
            sumNegatives += element
        }
    }
    const result = [positiveCount, sumNegatives]
    if (!input.length) {
        return []
    } else {
        return result
    }
}

console.log(countPositivesSumNegatives([]))
