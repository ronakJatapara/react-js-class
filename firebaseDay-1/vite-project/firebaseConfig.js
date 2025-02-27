// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE_3lZw0A3dPMZx-RDgwGUwJtXa80bQ3k",
  authDomain: "reactproject-685ef.firebaseapp.com",
  projectId: "reactproject-685ef",
  storageBucket: "reactproject-685ef.firebasestorage.app",
  messagingSenderId: "891921050759",
  appId: "1:891921050759:web:3326e09c628d370de91c22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}