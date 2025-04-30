// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB_nHHDmar9f9jiqiMLrCzREPq19NEMHq4",
  authDomain: "nextbuyproject.firebaseapp.com",
  projectId: "nextbuyproject",
  storageBucket: "nextbuyproject.appspot.com", // ✅ FIXED
  messagingSenderId: "224111687409",
  appId: "1:224111687409:web:dfbf4d843b2e8e36f89b50",
  databaseURL: "https://nextbuyproject-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);

// Initialize Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export auth and db to use in other parts of your app
export { auth, db };// Default export for app instance
