import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCXeKzC_gJIGpKnP1yY6uYOC7nwAVpl7ik",
  authDomain: "fir-1-f0d23.firebaseapp.com",
  projectId: "fir-1-f0d23",
  storageBucket: "fir-1-f0d23.firebasestorage.app",
  messagingSenderId: "208722827859",
  appId: "1:208722827859:web:644318ff7c74a99096c4a6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}