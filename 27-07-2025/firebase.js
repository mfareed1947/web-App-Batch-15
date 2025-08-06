import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCv_MUgxybHTDQTX5s-3jkDIvqyIMz5Ztg",
  authDomain: "testing-7c365.firebaseapp.com",
  projectId: "testing-7c365",
  storageBucket: "testing-7c365.firebasestorage.app",
  messagingSenderId: "483596584090",
  appId: "1:483596584090:web:b224e95aa3e8e599810b23",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
