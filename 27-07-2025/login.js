import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { app } from "./firebase.js";

const btn = document.getElementById("btn");
const email = document.getElementById("email");
const password = document.getElementById("password");

const auth = getAuth(app);

btn.addEventListener("click", () => {
  //   console.log(email.value, password.value);

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (user) {
        window.location.replace("./dashboard.html");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
});
