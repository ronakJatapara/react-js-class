import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../../firebaseConfig'



function Dashboard() {

    const [uid,setUid] = useState(null)

     useEffect(()=>{
        let subscribe = onAuthStateChanged(auth,(user)=>{

            if(user)
            {
                setUid(user.uid)
            }
        })

     },[])

     console.log(uid);
     


  return (
    <>
      <h1>Dashboard</h1>
    </>
  )
}

export default Dashboard
