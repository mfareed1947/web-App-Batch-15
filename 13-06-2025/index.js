// import { captlize, add } from "./utils.js"

// const helloo = captlize("hello")
// console.log(helloo)


// console.log("first")
// setTimeout(() => {
//     console.log("middle")
// }, 0)
// console.log("end")





// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("foo");
//     }, 1000);
// });

// myPromise
//     .then((state) => {
//         console.log(state, 'state')
//     }).catch((error) => {
//         console.log(error, "error")
//     })

// const callData = async () => {
//     const response = await fetch()
// }

// localStorage

const users = [{
    name: "fareed",
    age: 24,
    gender: "male"
},
{
    name: "ali",
    age: 21,
    gender: "male"
}]

localStorage.setItem("users", JSON.stringify(users))




const deleteUser = () => {
    const data = localStorage.getItem("users")
    console.log(JSON.parse(data))
    const remainUser = data.filter((obj) => {
        obj.name !== "ali"
    })
    localStorage.setItem("users", JSON.stringify(remainUser))
    return remainUser
}