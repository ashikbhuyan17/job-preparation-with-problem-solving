const user = {
    name: "ashik bhuyan",
    age: 24,
    furit: ["mango", "banana", "apple"]
}
const user1 = {
    ...user
}
user1.age = 44
user1 && user1.furit.splice(1, 1)
console.log("user", user)
console.log("user1", user1)
