// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3gZZ94xkFtfElwzE5fftKBL1bAbyLGP4",
  authDomain: "fir-crud-7d763.firebaseapp.com",
  projectId: "fir-crud-7d763",
  storageBucket: "fir-crud-7d763.firebasestorage.app",
  messagingSenderId: "904483084557",
  appId: "1:904483084557:web:b5c3e5ae29245e1ac2f844"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let db = getFirestore(app)

export {auth}
