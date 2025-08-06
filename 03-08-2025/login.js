import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { app } from "./firebase.js";
const auth = getAuth(app);

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const errorMessage = document.getElementById("login-error-message");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) window.location.replace("./dashboard.html");
      })
      .catch((error) => {
        errorMessage = error.message;
      });
    document.getElementById("loginForm").reset();
  });
