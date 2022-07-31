function getLength(obj) {
    console.log(obj);
    let count = 0
    for (let key in obj) {
        key && count++;
    }
    return count
}

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log("getLength", getLength(student));