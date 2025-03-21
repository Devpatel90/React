
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZFbSrAC9PYYdHNaGadtGzfACfXlCqm7w",
  authDomain: "fir-1-6325f.firebaseapp.com",
  projectId: "fir-1-6325f",
  storageBucket: "fir-1-6325f.firebasestorage.app",
  messagingSenderId: "1095232016133",
  appId: "1:1095232016133:web:282845653aeac7b731f16c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };