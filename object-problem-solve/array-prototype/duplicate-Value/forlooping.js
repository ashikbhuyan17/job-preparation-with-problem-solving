
const findDuplicate = (array) => {
    let countLetter = {}
    array.forEach((element) => {
        // console.log(element)
        if (countLetter[element]) {
            countLetter[element]++;
        } else {
            countLetter[element] = 1
        }
    })
    return countLetter
}


const array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];
const ans = findDuplicate(array_elements)
console.log(ans);

const values = Object.values(ans)
console.log(values);

console.log("max is", Math.max(...values));
console.log("min is", Math.min(...values));

