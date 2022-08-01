const array1 = [1, 2, 3, 4];
const initialValue = 0
const sum = array1.reduce((previousValue, currentValue, currentIndex) => {
    console.log("currentIndex", currentIndex);
    console.log("p", previousValue, "c", currentValue);
    return previousValue + currentValue
})
console.log("the sum is ", sum);