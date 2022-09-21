const stantonMeasure = (arr) => {
    const countOne = arr.filter(element => element == 1).length
    console.log(countOne);
    const result = arr.filter(element => element == countOne).length
    console.log(result)
    return result
}
console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]))

// function stantonMeasure(intArr) {
//     var count1 = 0;
//     var count2 = 0;
//     for (var i = 0; i < intArr.length; i++) {
//         if (intArr[i] === 1) {
//             count1++;
//         }
//     }
//     for (var j = 0; j < intArr.length; j++) {
//         if (intArr[j] === count1) {
//             count2++
//         }
//     }
//     return (count2)
// }