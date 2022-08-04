
function linearSearch(list, item) {
    // let result = []
    let data = ''
    list.forEach(element => {
        // console.log(element, item);
        if (element === item) {
            // result.push(element)
            data = element
        }
    });
    // console.log("..........", result);
    // return result
    return data
}

const item = 'd'
const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const searchValue = linearSearch(list, item)
// searchValue[0] ? console.log("search item found", searchValue) : console.log("search item not found")
searchValue ? console.log("search item found", searchValue) : console.log("search item not found")




// function linearSearch(array, num) {
//     for (i = 0; i < array.length; i++) {
//         if (array[i] === num) {
//             return array[i]
//         }
//     }
//     return -1
// }

// const numbers = [2, 4, 67, 8, 44, 6, 12];
// const findData = linearSearch(numbers, 8)
// // console.log(findData);
// findData > 0 ? console.log("search item found", findData) : console.log("search item not found")