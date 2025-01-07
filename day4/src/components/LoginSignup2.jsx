



import React, { useState } from "react";
import './ls.css'

function LoginSignup2()
{


   const [State,setState] = useState(true)
   const [Username,setUsername] = useState("")
   const [Email,setEmail] = useState("")
   const [Password,setPassword] = useState("")
   const [Confirm,setConfirm] = useState("")
   const [LoginEmail,setLoginEmail] = useState("")
   const [LoginPass,setLoginPass] = useState("")
   const [Arr,setArr] = useState([])




   const signupfunction = () =>{

   let obj={
    Username,
    Email,
    Password,
    Confirm

   }
 setArr([...Arr,obj])
 alert("Sign-up Confirm")

 setUsername("")
 setEmail("")
 setPassword("")
 setConfirm("")
   }


   const loginfunction = () => {

    let a = Arr.filter((el)=> el.Email == LoginEmail && el.Password == LoginPass);

    if(a[0].Email != LoginEmail && a[0].Password == LoginPass )
    {
        
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
          setLoginEmail("")
          setLoginPass("")
    }
    else {
        alert("error")
    }


   }

    return(
        <>
 {  State == true ?     <div className="login">
            <h2 id="h1">Welcome Back</h2>
            <h6 id="h2">Enter your Username for login</h6>


            <i className="fa-regular fa-user"></i>
            <input type="text" name="" id="user" value={LoginEmail} placeholder="Email" onChange={(e)=> {setLoginEmail(e.target.value)}} />
            <i className="fa-solid fa-lock" id="icon2"></i>
            <input type="text" name="" id="pass" value={LoginPass} placeholder="Password" onChange={(e) => {setLoginPass(e.target.value)}}/>
            <button id="btn" onClick={loginfunction}>Login Now</button>

            <p id="p2">Forgot Password</p>
            <p id="p1" onClick={()=>{setState(false)}}>Don't Have Accoount? <font id="font">Sign up</font></p>
        </div> :
        <div className="signup">

             <h2 id="h1">Sign Up</h2>
            <h6 id="h2">Create Your Account</h6>


            <i className="fa-regular fa-user"></i>
            <input type="text" name="" id="user" value={Username} placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}} />
            <i className="fa-solid fa-envelope"></i>
            <input type="text" name="" id="email"value={Email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <i className="fa-solid fa-lock"></i>
            <input type="text" name="" id="pass" value={Password} placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <i className="fa-solid fa-lock" id="icon1"></i>
            <input type="text" name="" id="pass" value={Confirm} placeholder="Confirm Password" onChange={(e)=>{setConfirm(e.target.value)}}/>
            <button id="btn" onClick={signupfunction}>Sign-up</button>
            <p id="p1" onClick={()=>{setState(true)}}>Already Have Accoount? <font id="font">Login</font></p>
           

        </div>}
        </>
    )
}


export default LoginSignup2;
