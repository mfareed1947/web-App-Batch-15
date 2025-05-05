let inputName = document.getElementById("name");
let msgSend = document.getElementById("msg-send")
// let warningDiv = document.getElementById("red-warning")

// console.log(document.getElementsByClassName("p"))
// inputName.addEventListener("blur", (event) => {
//     const paraTage = document.createElement("p")
//     paraTage.className = "para"
//     paraTage.innerText = "name is required"
//     console.log(inputName.value, "paraTage")
//     warningDiv.innerHTML = paraTage.textContent
//     console.log(warningDiv, "warningDiv")
// })

// inputName.addEventListener("change", (event) => {
//     const isNonWhiteSpace = /^\S*$/;
//     console.log(isNonWhiteSpace.test(event.target.value))
//     if (!isNonWhiteSpace.test(event.target.value)) {
//         console.log("Password must not contain Whitespaces.");
//     } else {
//         console.log("white space");
//     }
// })
function sendMsg() {
    console.log("message send")
}


// inputName.addEventListener("keypress", (event) => {
//     console.log(event)
//     if (event.charCode == 13) {
//         sendMsg()
//         inputName.value = ""
//     }
// })

// msgSend.addEventListener("click", () => {
//     msgSend.innerText = inputName.value
//     sendMsg()
//     inputName.value = ""
// })

// inputName.addEventListener("keydown", (event) => {
//     console.log(event)

// })
// inputName.addEventListener("keyup", (event) => {
//     console.log(event)

// })

let bird = document.getElementsByClassName("bird")
// document.body.addEventListener("click", () => {
//     bird[0].style.top = "300px"
// })