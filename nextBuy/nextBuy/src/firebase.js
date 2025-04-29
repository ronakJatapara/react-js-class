import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB_nHHDmar9f9jiqiMLrCzREPq19NEMHq4",
    authDomain: "nextbuyproject.firebaseapp.com",
    projectId: "nextbuyproject",
    storageBucket: "nextbuyproject.firebasestorage.app",
    messagingSenderId: "224111687409",
    appId: "1:224111687409:web:dfbf4d843b2e8e36f89b50",
    databaseURL:"https://nextbuyproject-default-rtdb.firebaseio.com"

  };

  

  export const app = initializeApp(firebaseConfig)


  export const auth = getAuth(app)
  export default app;


