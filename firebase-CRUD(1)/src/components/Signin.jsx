import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig';
import { Link, Navigate, useNavigate } from 'react-router';

export default function Signin() {
    const[pass,setpassword] = useState("");
    const[email,setemail] = useState("");
   const nav = useNavigate()
    const handleSignin = async()=>{
        await signInWithEmailAndPassword(auth,email,pass).then((res)=>{
            console.log(res);
            nav("/Dashboard")
        })
    }
  return (
   
    <div>
       <h1>Signin</h1>
      
       <input type="text" placeholder="email"  onChange={(e)=>setemail(e.target.value)}/>
       <input type="text"  placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
       <button onClick={handleSignin}>signup</button>
       <Link to={"/"}>Signin</Link>
    </div>
  )
}