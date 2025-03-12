import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { auth ,db } from '../../firebaseConfig'
function Signup() {

  const [name,setName] = useState("")
  const [pass,setPass] = useState("")
  const [uid,setUid] = useState(null) 
  const [record,setRecord] = useState([])

  const addData = async ()=>{
     
    await addDoc(collection(db,"Tasks"),{userId:uid,name,pass}).then((data)=>{
    setRecord([...record,{userId:uid,name,pass}])
    })
    console.log(record);
    
    
    
  }


  return (
    <>
      <input type="text" name="" id="" placeholder='name' onChange={(e)=> setName(e.target.value)} />
      <input type="text" name="" id="" placeholder='password' onChange={(e)=> setPass(e.target.value)} />

      <button onClick={addData}>Add Data</button>
    </>
  )
}

export default Signup

