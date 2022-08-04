// function removeChar(str) {
//     //You got this!
//     const splitValue = str.split("")
//     // console.log(splitValue)

//     // remove first element
//     let shiftedValue = splitValue.shift()

//     // last value deleted
//     let popped = splitValue.pop()

//     // join
//     let joinValue = splitValue.join('')


//     // console.log(joinValue);
//     return joinValue
//     // console.log(splitValue.shift());

// };

function removeChar(str) {
    return str.slice(1, 5);
}
console.log(removeChar("hello"));