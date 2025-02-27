import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'


function Signin() {
 
    const [emial,setEmail] = useState("")
    const [pass,setPass] = useState("")
    let navigate = useNavigate()



    const  handleSignin = async() =>{
      try{
        await signInWithEmailAndPassword(auth,emial,pass).then((res)=>{
         alert("success")
         navigate("/dashboard")

        })
      }
      catch(error){
     alert("error")
      }
     
    }

  return (
    <>
    <input type="text" name="" placeholder='enter your email' id="" onChange={(e)=> setEmail(e.target.value)} />
    <input type="text" name="" placeholder='enter your password' id="" onChange={(e)=> setPass(e.target.value)} />
    <button onClick={handleSignin} >sign-in</button>
    <Link to={"/"}>Sign-up</Link>

    </>
  )
}

export default Signin
