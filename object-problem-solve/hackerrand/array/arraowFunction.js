
function modifyArray(nums) {
    let newArr = []
    nums.map((num) => {
        if (num % 2 == 0) {
            const even = num * 2
            newArr.push(even)
        } else newArr.push(num * 3)
    })
    return newArr
}

const arr = [1, 2, 3, 4, 5]
console.log(modifyArray(arr))
