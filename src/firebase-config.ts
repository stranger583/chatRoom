// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGP5wZOaqLc_okQyspB_Tg2mIWzZeViP8",
  authDomain: "messenger-d46d6.firebaseapp.com",
  projectId: "messenger-d46d6",
  storageBucket: "messenger-d46d6.appspot.com",
  messagingSenderId: "931434626108",
  appId: "1:931434626108:web:79ec5cde2b703367279739",
  measurementId: "G-T60W5MEBKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);