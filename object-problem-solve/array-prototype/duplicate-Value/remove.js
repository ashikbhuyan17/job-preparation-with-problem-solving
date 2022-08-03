let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = chars.filter((c, index) => {
//     // return chars.indexOf(c) === index;
//     console.log(chars.indexOf(c));
// });

// console.log(uniqueChars);
var newarr = (function (arr) {
    var m = {}, newarr = []
    for (var i = 0; i < arr.length; i++) {
        var v = arr[i];
        if (!m[v]) {
            newarr.push(v);
            m[v] = true;
        }
    }
    return newarr;
})(chars);
console.log(newarr);