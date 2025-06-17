// const numbers = [23, 55, 21, 87, 56];
// let minValue = Math.min(...numbers);
// let maxValue = Math.max(...numbers);

// console.log({ minValue, maxValue })


// function sum(x, y, z, a) {
//     return x + y + z;
// }

// const numbers = [1, 2, 3, 4];

// console.log(sum(...numbers));

// console.log(sum(2, 4, 5))
// console.log(sum.apply(null, numbers));

// const names = "fareed"
// const newName = [...names]
// console.log(newName)


// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];




// function sum(q, ...hello) {
//     console.log({ hello, q })
//     //   let total = 0;
//     //   for (const arg of theArgs) {
//     //     total += arg;
//     //   }
//     //   return total;
// }

// console.log(sum(1, 2, 3));

// // console.log(sum(1, 2, 3, 4));


// callback
// function names(callback) {
//     callback("fareed")
//     // print("fareed")
// }

// function print(value) {
//     console.log("hello world" + value)
// }

// names(print)


// console.log("first")
// setTimeout(() => {
//     console.log("middle")
// }, 0)
// console.log("last")

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("foo");
//     }, 300);
// });

// myPromise
//     .then(handleFulfilledA, handleRejectedA)
//     .then(handleFulfilledB, handleRejectedB)
//     .then(handleFulfilledC, handleRejectedC);

// const hello = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("hello")
//         reject("foo");
//     }, 3000);
// })

// hello.then((value) => {
//     console.log(value, "value")
// }).then((then) => {
//     console.log("then", then)
// }).catch((error) => {
//     console.log(error, "error")
// }).finally(() => {
//     console.log("finnally")
// })