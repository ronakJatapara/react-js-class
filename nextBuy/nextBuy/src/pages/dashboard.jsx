import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebaseConfig';

function Dashboard() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User UID:', user.uid);
      } else {
        console.log('No user logged in');
      }
    });

    return () => unsubscribe();
  }, []);

  return null;
}

export default Dashboard;










// const handleSubmit = (e) => {
//   e.preventDefault();

//   fname.length === 0 ? setFnameError(true) : setFnameError(false);
//   lname.length === 0 ? setLnameError(true) : setLnameError(false);
//   email.length === 0 ? setEmailError(true) : setEmailError(false);
//   pass.length === 0 ? setPassError(true) : setPassError(false);

//   if (fname.length === 0 || lname.length === 0 || email.length === 0 || pass.length === 0) {
//     toast.error("Please fill all required fields!", {
//       position: "top-right",
//       autoClose: 2000,
//     });
//       return;
//   }

//   let obj = { id: Date.now(), fname, lname, email, pass };
//   setArr([...arr, obj]);


//   setFname("");
//   setLname("");
//   setEmail("");
//   setPass("");

//   toast.success("Registered Successfully!", {
//     position: "top-right",
//     autoClose: 2000,
//   });
// };