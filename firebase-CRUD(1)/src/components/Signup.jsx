import React, { useState } from 'react'
import { Link } from 'react-router'
import Signin from './Signin'
import { auth, db } from '../../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { doc, setDoc } from 'firebase/firestore'

export default function Signup() {
    const [name,setname] = useState("")
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")
    const nav = useNavigate()
    
    const handleSignup = async()=>{
        await createUserWithEmailAndPassword(auth,email,password)
        .then((res) => {
          console.log(res)
            setDoc(doc(db,"users",res.user.uid),{name,email})
            nav("/Dashboard")
        })
    }
  
  return (
    <div>
       <input type="text" placeholder='Enter your Name' onChange={(e)=>setname(e.target.value)}/>
       <input type="text" placeholder='Enter your Email' onChange={(e)=>setemail(e.target.value)}/>
       <input type="text" placeholder='Enter your Password' onChange={(e)=>setpassword(e.target.value)}/>
       <button onClick={handleSignup}>Signup</button>
       <Link to={"/Signin"}>Signin</Link>
    </div>
  )
}