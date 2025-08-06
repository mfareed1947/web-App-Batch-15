import {
  collection,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import { db } from "./firebase.js";

async function renderUserList() {
  const userListElement = document.getElementById("userList");
  userListElement.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "users"));

  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    const { id, email } = doc.data();
    localStorage.setItem("currentUser", id);
    const userElement = document.createElement("div");
    userElement.classList.add("user");
    userElement.innerHTML = `
        <div class="user-info">
          <h4>${id}</h4>
          <p>${email}</p>
        </div>
      `;
    userListElement.appendChild(userElement);
  });
}

const getData = () => {
  const userData = document.getElementById("userList");
  //   console.log(userData.children[0].textContent);
  for (let i = 0; i < userData.children.length; i++) {
    const id = userData.children[i]?.children[i]?.querySelector("h4").innerText;
    userData.children[i].addEventListener("click", (currElem) => {
      console.log(currElem.target.value);
      localStorage.setItem("loginUser", id);
      const currId = localStorage.getItem("currentuser");
      addDoc(collection(db, "room"), {
        id: id + currId,
      })
        .then(() => {
          window.location.replace("./login.html");
        })
        .catch((error) => {
          console.log(error);
        });
      window.location.replace("./chat.html");
    });
  }
};

setTimeout(() => {
  getData();
}, 2000);

setTimeout(() => {
  renderUserList();
}, 1000);

// userData.forEach((currElem) => {
//   console.log(currElem);
// });

// Function to search/filter users
// function searchUsers() {
//   const searchInput = document
//     .getElementById("searchInput")
//     .value.toLowerCase();
//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchInput)
//   );
//   renderUserList(filteredUsers);
// }

// Initial render
let users = [];

// {
//     roomId: 42323,
//     sender:12132,
//     reciver:2424,
// message:"hello"
// }
