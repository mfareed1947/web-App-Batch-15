// let btn = document.querySelector("button");
// let para = document.getElementById("para");
// let bulb = document.getElementsByClassName("container");
// console.log(bulb[0]);
// console.log(document.getElementById("para").innerHTML);

// btn.addEventListener("click", function () {
//   para.style.color = "green";
//   //   para.innerHTML;
//   para.innerHTML =
//     "<b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempore odio <b>repudiandae</b> reiciendis ad labore, culpa officia dolorum quo reprehenderit, voluptatum nulla a accusantium distinctio fugaiste laborum facilis maxime?</b>";
// });

// let toggle = false;
// btn.addEventListener("click", () => {
//   if (toggle == false) {
//     console.log(toggle, "toggle if before");
//     bulb[0].style.backgroundColor = "yellow";
//     toggle = true;
//     console.log(toggle, "toggle if after");
//   } else {
//     console.log(toggle, "toggle else before");
//     bulb[0].style.backgroundColor = "";
//     toggle = false;
//     console.log(toggle, "toggle else after");
//   }
// });

// let ul = document.getElementById("ul");
// console.log(ul.firstChild);
// console.log(ul.firstElementChild);
// console.log(ul.childNodes);
// console.log(ul.children);

// Events

//click
//mouse

// btn.addEventListener("mousedown", () => {
//   bulb[0].style.backgroundColor = "green";
// });
// btn.addEventListener("mouseup", () => {
//   bulb[0].style.backgroundColor = "red";
// });

// btn.addEventListener("mouseenter", () => {
//   bulb[0].style.backgroundColor = "green";
// });
// btn.addEventListener("mouseleave", () => {
//   bulb[0].style.backgroundColor = "red";
// });

// let drag = document.querySelector(".moveable");
// console.log(drag);
// drag.addEventListener("mousemove", (event) => {
//   let x = event.clientX;
//   let y = event.clientY;
//   console.log({ x, y });
//   drag.style.top = x + "px";
//   drag.style.bottom = y + "px";
//   drag.style.bottom = y + "px";
//   drag.style.bottom = y + "px";
// });
