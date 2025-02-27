import React, { useState } from 'react'
import { auth  , db} from '../../firebaseConfig'
import {createUserWithEmailAndPassword} from "firebase/auth"
import { Link, useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'

function Signup() {
  let navigate = useNavigate()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")

  const handleSignup = async () =>{
      await createUserWithEmailAndPassword(auth,email,pass).then((res)=>{
        setDoc(doc(db,"Users",res.user.uid),{name,email})
        navigate("/dashboard")
  
      })

      setName("")
      setEmail("")
      setPass("")
      
  }

  return (
    <>
    <input type="text" name="" placeholder='enter your name' id="" onChange={(e)=> setName(e.target.value)} />
    <input type="text" name="" placeholder='enter your email' id="" onChange={(e)=> setEmail(e.target.value)} />
    <input type="text" name="" placeholder='enter your password' id="" onChange={(e)=> setPass(e.target.value)} />
    <button onClick={handleSignup} >sign-up</button>
    <Link to={"/signin"}>Sign-In</Link>

    </>
  )
}

export default Signup
