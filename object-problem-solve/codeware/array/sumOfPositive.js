// function positiveSum(arr) {
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i]
//         if (element > 0) {
//             count += element
//         }
//     }
//     return count
// }

// solution by reducer
// function positiveSum(arr) {
//     return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
// }

//solution by filter and reducer
// function positiveSum(arr) {
//     // return arr.filter(x => x > 0).reduce((a, b) => a + b, 0);
//     let positiveValue = arr.filter(x => x > 0)
//     return positiveValue.reduce((a, b) => a + b, 0);
// }

//solution by map and reducer
function positiveSum(arr) {
    let positiveValue = arr.filter(el => el < 0 ? 0 : el)
    return positiveValue
}

const array = [1, -4, 7, 12];
let sum = positiveSum(array)
console.log(sum);
