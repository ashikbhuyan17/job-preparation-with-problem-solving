function getLength(obj) {
    console.log(obj);
    let count = 0
    for (let key in obj) {
        console.log("key",key)
        key && count++;
    }
    return count
}

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log("length",student.length);
console.log("length",Object.keys(student).length);


console.log("getLength", getLength(student));