
let getKeys = function (obj) {
    let keysArr = [];
    for (var key in obj) {
        console.log("key", key);
        keysArr.push(key);
    }
    return keysArr
}
let obj = {
    name: 'Jack',
    age: 25
}
console.log(getKeys(obj));


const color = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }
console.log("property", Object.keys(color));
console.log("value", Object.values(color));
