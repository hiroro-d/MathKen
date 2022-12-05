// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEICDmGDtDL8kkRXENehe8cnmZZjkW5hc",
  authDomain: "mathken-9c50d.firebaseapp.com",
  projectId: "mathken-9c50d",
  storageBucket: "mathken-9c50d.appspot.com",
  messagingSenderId: "1062404264341",
  appId: "1:1062404264341:web:afe6abe662ac748354e69c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };