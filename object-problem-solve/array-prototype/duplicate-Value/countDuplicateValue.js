/**
 
he function we passed to the Array.forEach method gets called with each element in the array.

On each iteration, we check if the current value is already present as a key in the count object. If it is present, we increment it by 1.

If the value is not present, we initialize it to 1.
 */




const arr = ['one', 'two', 'one', 'one', 'two', 'three'];
const count = {};

arr.forEach(element => {
    count[element] = (count[element] || 0) + 1;
});

// 👇️ {one: 3, two: 2, three: 1}
console.log(count);


var arr1 = ['a', 'b', 'c', 'd', 'd', 'e', 'a', 'b', 'c', 'f', 'g', 'h', 'h', 'h', 'e', 'a'];
var map = arr1.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
}, {});

// map is an associative array mapping the elements to their frequency:
console.log(map);
// prints {"a": 3, "b": 2, "c": 2, "d": 2, "e": 2, "f": 1, "g": 1, "h": 3}