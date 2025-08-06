import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { app } from "./firebase.js";
const btn = document.getElementById("btn");
const email = document.getElementById("email");
const password = document.getElementById("password");
const googleBtn = document.getElementById("google-btn");

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
btn.addEventListener("click", () => {
  console.log(email.value, password.value);
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential?.user;
      if (user) {
        window.location.replace("./login.html");
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
    });
});

googleBtn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential, "credential");
      //   const token = credential.accessToken;
      //   const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error, "error");
    });
});
