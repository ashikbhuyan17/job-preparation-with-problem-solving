// function repeatStr(n, s) {
//     let count = ''
//     for (i = 0; i < n; i++) {
//         count += s
//     }
//     return count
// }

function repeatStr(n, s) {
    return s.repeat(n);
}


console.log(repeatStr(3, "abc"));