
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

// get array of value
const getValue = Object.values(color)
for (let i = 0; i < getValue.length; i++) {
    const element = getValue[i];
    console.log("element", element)
}

getValue.map((data) => console.log("map", data))
