



import React, { useState } from "react";
import './ls.css'

function LoginSignup2()
{


   const [State,setState] = useState(true)

    return(
        <>
 {  State == true ?     <div className="login">
            <h2 id="h1">Welcome Back</h2>
            <h6 id="h2">Enter your Username for login</h6>


            <i class="fa-regular fa-user"></i>
            <input type="text" name="" id="user" placeholder="Username" />
            <i class="fa-solid fa-lock" id="icon2"></i>
            <input type="text" name="" id="pass" placeholder="Password"/>
            <button id="btn">Login Now</button>

            <p id="p2">Forgot Password</p>
            <p id="p1" onClick={()=>{setState(false)}}>Don't Have Accoount? <font id="font">Sign up</font></p>
        </div> :
        <div className="signup">

             <h2 id="h1">Sign Up</h2>
            <h6 id="h2">Create Your Account</h6>


            <i class="fa-regular fa-user"></i>
            <input type="text" name="" id="user" placeholder="Username" />
            <i class="fa-solid fa-envelope"></i>
            <input type="text" name="" id="email" placeholder="Email" />
            <i class="fa-solid fa-lock"></i>
            <input type="text" name="" id="pass" placeholder="Password"/>
            <i class="fa-solid fa-lock" id="icon1"></i>
            <input type="text" name="" id="pass" placeholder="Confirm Password"/>
            <button id="btn">Sign-up</button>
            <p id="p1" onClick={()=>{setState(true)}}>Already Have Accoount? <font id="font">Login</font></p>
           

        </div>}
        </>
    )
}


export default LoginSignup2;
