function modifyMultiply(str, loc, num) {
    //Code here
    const splitString = str.split(" ")
    console.log(splitString)
    let element = ""
    let res = []
    for (let index = 0; index <= num; index++) {
        res.push(splitString[loc])
        element = res.join('-')
    }
    console.log("res", res);
    return element
}
console.log(modifyMultiply("This is a string", 3, 5));

// function modifyMultiply(str, loc, num) {
//     const arr = Array(num)
//     let fill = arr.fill(str.split(' ')[loc]).join('-')
//     return fill
// }
// console.log(modifyMultiply("This is a string", 3, 5));