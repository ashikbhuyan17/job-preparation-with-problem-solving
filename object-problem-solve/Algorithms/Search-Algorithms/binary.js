/* 
    1. sort array
    2. find middle index
*/


function binarySearch(arr, target) {
    let sortArr = arr.sort()
    console.log(sortArr);
    let startIndex = 0;
    let endIndex = sortArr.length - 1
    while (startIndex <= endIndex) {
        // Find the mid index
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        if (target == sortArr[middleIndex]) {
            console.log(middleIndex)
            return true
        }
        if (target > sortArr[middleIndex]) {
            startIndex = middleIndex + 1
        }
        if (target < sortArr[middleIndex]) {
            endIndex = middleIndex - 1
        }
    }
}
const array = [10, 20, 40, 60, 30, 50, 70, 90, 80, 100]
const target = 50
console.log(binarySearch(array, target))

