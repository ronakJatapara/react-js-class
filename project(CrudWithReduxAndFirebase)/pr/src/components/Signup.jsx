
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../css/Signup.css"
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import toast ,{Toaster} from 'react-hot-toast';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';


 function Signup() {
    
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
   const navigate = useNavigate()
//    const handleSignup = async() =>{
//     try{

//        let res =  await createUserWithEmailAndPassword(auth,email,pass)
//         await setDoc(doc(db,"Users",res.user.uid),{name,email})

//             toast.success('Register Successfully')

//             setTimeout(()=>{
//                 navigate("/")
//             },1500)
            
            
      
//     }
//     catch(error)
//     {
//         toast.error("Email Already register")
//     }
      
//    }

const handleSignup = async () => {
    try {
       await createUserWithEmailAndPassword(auth, email, pass).then((res)=>{
        setDoc(doc(db, "Users", res.user.uid), { name, email });

        toast.success('Register Successfully');

        setTimeout(() => {
            navigate("/");
        }, 1500);
       })
     
    }
    catch (error) {
        toast.error(error.message); // Shows actual error message from Firebase
    }
};

  return (
 <>
        <Toaster></Toaster>
<br />
    <div className="form">
        <br />
        <br />
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label=" Name" variant="outlined" onChange={(e)=> setName(e.target.value)} />
      <br /><br />
      <TextField id="outlined-basic" label=" Your Email" variant="outlined" onChange={(e)=>setEmail(e.target.value)} />
      <br /><br />
      <TextField id="outlined-basic" label=" Your Password" variant="outlined" onChange={(e)=> setPass(e.target.value)} />
      <br /><br /><br />


    </Box>
   <div className="btn d-flex justify-content-center align-items-center">
   <button id='btn1' className='btn btn-success' onClick={handleSignup}>Submit</button>
   
   </div>
   
   <Link to="/Signin">
   <span  >Already have an account?</span>
   
   </Link>
    </div>
 </>
  );
}


export default  Signup




