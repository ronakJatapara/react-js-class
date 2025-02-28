// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVpTb07NspmuOvMq_FqlsId3M3S2tE9n0",
  authDomain: "crudwithreduxandfirebase.firebaseapp.com",
  projectId: "crudwithreduxandfirebase",
  storageBucket: "crudwithreduxandfirebase.firebasestorage.app",
  messagingSenderId: "536482985671",
  appId: "1:536482985671:web:2b312ba85d91c39f9670e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


export {auth,db}