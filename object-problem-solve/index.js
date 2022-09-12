// const user = {
//     name: "ashik bhuyan",
//     age: 24,
//     furit: ["mango", "banana", "apple"]
// }
// const user1 = {
//     ...user
// }
// user1.age = 44
// user1 && user1.furit.splice(1, 1)
// console.log("user", user)
// console.log("user1", user1)



const user = {
    name: "ashik bhuyan",
    age: 24,
    fruit: ["mango", "banana", "apple"]
}

const user1 = {
    // deep copy or clone
    ...user, fruit: [...user.fruit]
}
user1.age = 44
user1 && user1.fruit.splice(1, 1)
console.log("user", user)
console.log("user1", user1)
