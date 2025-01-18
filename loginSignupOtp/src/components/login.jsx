import React, { useState } from "react";
import "./signup.css"




function Login()
{

//    const [login,setLogin] = useState(false)

    return(
        <>
         <div class="form-container">
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="Email" required></input>
                <input type="password" placeholder="Password" required></input>
                <button type="submit">Login</button>
            </form>
           {/* { login == false ? <p >Don't have an account? <a href="#">Sign up</a></p> : true} */}
        </div>
        </>
    )
}


export default Login