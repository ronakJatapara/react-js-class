import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import {createUserWithEmailAndPassword} from "firebase/auth"
import { Link } from 'react-router-dom'

function Signup() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")

  const handleSignup = async () =>{
      await createUserWithEmailAndPassword(auth,email,pass).then((res)=>{
        console.log(res);
        
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
