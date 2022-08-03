function getUser(resolve, reject) {
    console.log("..............execute hoice..........");
    console.log(resolve, reject);
    setTimeout(() => {
        const users = ['jamal', 'kamal', 'rana']
        resolve(users)
    }, 2000)
}

// class Promise {
//     constructor(cb) {
//         this.resolve = function () { }
//         this.reject = function () { }
//         this.callback = cb
//         this.callback()
//     }
//     then(cb1) {
//         return this
//     }
//     catch(cb2) {
//         return this
//     }
// }

console.log("start");
const prms1 = new Promise(getUser) //promise object
// prms1.then(function () { }).catch(function () { })
console.log("end");
console.log(prms1);