

function rotateLeft(d, arr) {
    // Write your code here
    const rotateArray = arr.concat()
    console.log("rotateArray", rotateArray);
    for (let i = 0; i < d; i++) {
        const frontItem = rotateArray.shift()
        console.log("frontItem", frontItem);
        rotateArray.push(frontItem)
    }
    return rotateArray
}

const numRotation = 4
const sampleArray = [1, 2, 3, 4, 5]
console.log(rotateLeft(numRotation, sampleArray));