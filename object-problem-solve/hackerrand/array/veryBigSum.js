const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(ar) {
    let sum = 0
    for (let i = 0; i < ar.length; i++) {
        const element = ar[i];
        sum += element
    }
    return sum
}
const result = aVeryBigSum(arr)
console.log(result)