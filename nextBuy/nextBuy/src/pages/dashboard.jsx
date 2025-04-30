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










