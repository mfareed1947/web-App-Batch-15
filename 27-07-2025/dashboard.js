import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { app } from "./firebase.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const auth = getAuth(app);
const db = getFirestore(app);
const heading = document.getElementById("email-heading");
const name = document.getElementById("name-heading");
const signoutBtn = document.getElementById("signout");
const userImage = document.querySelector("img");
const addBtn = document.getElementById("add-task");
const taskInput = document.getElementById("task");
const createdTask = document.getElementById("created-task");

let userId;

onAuthStateChanged(auth, (user) => {
  if (user) {
    // const uid = user.uid;
    console.log(user, "user");
    heading.innerText = user?.email;
    name.innerText = user?.displayName;
    userImage.src = user.photoURL;
    userId = user?.uid;
  } else {
  }
});

signoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then((user) => {
      console.log(user);
      window.location.replace("./login.html");
    })
    .catch((error) => {
      console.log(error);
    });
});

addBtn.addEventListener("click", async () => {
  try {
    const docRef = doc(collection(db, "task"));
    await setDoc(docRef, {
      task: taskInput.value,
      date: new Date(),
      creatorId: userId,
    });
    console.log("Document successfully written!");
    getData();
  } catch (error) {
    console.error("Error writing document: ", error);
  }
});

const getData = async () => {
  const docSnap = await getDocs(collection(db, "task"));
  docSnap.forEach((curr) => {
    console.log(curr.data());
  });
  // if (docSnap.exists()) {
  //   console.log(docSnap.data());
  //   createdTask.innerHTML = `<p>${docSnap.data()?.task}</p>`;
  // }
};

setTimeout(() => {
  getData();
}, 2000);
