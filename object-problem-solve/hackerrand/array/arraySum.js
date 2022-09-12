// const arr = [1, 2, 3, 4, 10, 11]

// function simpleArraySum(arr) {
//     const reduce = arr.reduce((prev, pre) => {
//         return prev + pre;
//     })
//     return reduce
// }
// const result = simpleArraySum(arr)
// console.log(result)

const arr = [1, 2, 3, 4, 10, 11]

function simpleArraySum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += element
    }
    return sum
}
const result = simpleArraySum(arr)
console.log(result)