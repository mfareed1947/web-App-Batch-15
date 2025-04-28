
let box = document.getElementById("cont")
let para = document.getElementsByClassName("para12")
// let btn2 = document.querySelectorAll("button")
let btn = document.querySelector(".para12")
let btn2 = document.querySelectorAll("#cont")
console.log(document.querySelectorAll("#cont"))

// function changeColor() {
//     box.style.backgroundColor = "red";
// }

para[0].addEventListener("change", () => {
    box.style.backgroundColor = "red";
})

