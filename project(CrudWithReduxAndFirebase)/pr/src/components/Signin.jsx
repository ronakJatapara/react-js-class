
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import "../css/Signup.css"
import { useState } from 'react';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { Link, replace, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import "../css/Signup.css"



 function Signin() {
    
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")

    const navigate =  useNavigate()

   const handleSignin = async() =>{
    try{
        await signInWithEmailAndPassword(auth,email,pass).then((res)=>{

            toast.success("Login Successfully") 

            setTimeout(()=>{
                navigate("/",{replace:true})  
            },1500)
            
        })
    }
    catch(error)
    {
        toast.error("please check details")
    }
   }

  return (
 <>
 <Toaster></Toaster>
  <div className="mainBox d-flex justify-content-center align-items-center">
  <div className="form">
        <br /><br />
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
      noValidate
      autoComplete="off"
    >
   
      <TextField id="outlined-basic" label=" Your Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)} />
      <br /><br />
      <TextField id="outlined-basic" label=" Your Password" variant="outlined" onChange={(e)=> setPass(e.target.value)} />
      <br /><br /><br />


    </Box>
   <div className="btn d-flex justify-content-center align-items-center">
   <button id='btn10' className='btn btn-success' onClick={handleSignin}>Login</button>
   
   </div>
 <Link to="/Signup">  <span >Create anAcoount ?</span></Link>

    </div>
  </div>
 </>
  );
}


export default  Signin



