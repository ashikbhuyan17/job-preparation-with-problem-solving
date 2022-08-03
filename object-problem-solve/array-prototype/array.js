var arr = [1, 2, 3, 4];
console.log(arr.length); // 4
arr[20] = 2;
console.log(arr.length); // 21 - even though there are no elements between index 5 and 19
console.log(arr[20]);
