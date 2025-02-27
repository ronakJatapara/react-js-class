import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth , db } from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'



function Dashboard() {

    const [uid,setUid] = useState(null)
    const [record,setRecord] = useState("")

     useEffect(()=>{
        let subscribe = onAuthStateChanged(auth,(user)=>{
            if(user)
            {
                setUid(user.uid)
            }
            })
     },[])

     useEffect(()=>{
        if(uid)
        {
          fetchUser()
        }
     },[uid])

     
    const fetchUser = async ()=>{
      await getDoc(doc(db,"Users",uid)).then((res)=>{
        let data = res.data()
        setRecord(data)
      })
    }

  return (
    <>
      <h1>welcome {record.name}</h1>
    
    </>
  )
}

export default Dashboard
