import React, { useState } from "react";
import "./signup.css"



function Signup()
{
    // const [signup,setSignup] = useState(false)
    return(
        <>
       
        <div class="form-container">
            <h2>Sign Up</h2>
            <form>
                <input type="text" placeholder="Full Name" ></input>
                <input type="email" placeholder="Email" ></input>
                <input type="password" placeholder="Password" ></input>
                <button type="submit">Sign Up</button>
            </form>
           {/* { signup == true ? <p>Already have an account? <a href="#">Login</a></p> : false} */}
        </div>
        </>
    )
}


export default Signup