// const array1 = [1, 2, 3, 4];
// const initialValue = 0
// const sum = array1.reduce((previousValue, currentValue, currentIndex) => {
//     console.log("currentIndex", currentIndex);
//     console.log("p", previousValue, "c", currentValue);
//     return previousValue + currentValue
// })
// console.log("the sum is ", sum);


// var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// var petCounts = pets.reduce(function (obj, pet) {
//     if (!obj[pet]) {
//         obj[pet] = 1;
//     } else {
//         obj[pet]++;
//     }
//     return obj;
// }, {});

// console.log(petCounts); 


const counts = {};
const sampleArray = ['a', 'a', 'b', 'c'];
sampleArray.forEach((x) => { console.log(counts[x] = counts[x] || 0) });
// console.log(counts)