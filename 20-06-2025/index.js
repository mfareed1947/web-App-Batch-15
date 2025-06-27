// console.log("start")
// setTimeout(() => {
//     console.log("callback")
// }, 0);
// console.log("end")

const fetchData = () => {
    try {
        fetch('https://dummyjson.com/users').then((res) => {
            return res.json()

        }).then((data) => {
            console.log(data, "qrqrq")
        }).catch((error) => {
            console.log(error, "error")
        })
    } catch (error) {
        console.log(error, "error")
    }
}
fetchData()

// get
// post
// put
// delete

// CRUD