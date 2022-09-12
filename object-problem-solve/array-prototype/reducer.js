const array1 = [1, 2, 3, 4];
const initialValue = 0
const sum = array1.reduce((previousValue, currentValue, currentIndex) => {
    console.log("currentIndex", currentIndex);
    console.log("p", previousValue, "c", currentValue);
    return previousValue + currentValue
})
console.log("the sum is ", sum);



// solution by reducer
// function positiveSum(arr) {
//     const reduceValue = arr.reduce((a, b) => a + (b > 0 ? b : 0));
//     return reduceValue
// }

// const array = [1, -4, 7, 12];
// let sum = positiveSum(array)
// console.log(sum);
