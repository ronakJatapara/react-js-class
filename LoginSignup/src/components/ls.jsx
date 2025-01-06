import React , {useState} from "react";
import "./ls.css"
function LoginSignup()
{

    const [State,setState] = useState(true)


    return(
        <>
        {State == true ? <div id="login">
        <h1 className="fs-2 pt-4 font-bold">Login Form</h1>
        <div className="button">
            <div className="btn1" >
               <h2 id="loginFont">Login</h2>
            </div>
            <div className="btn2" onClick={()=>{setState(false)}}>
               <h2 id="signupFont">Sign-up</h2>

            </div>
        </div>
        <br /><br />

        <input type="text" name="" id="email" placeholder="Email*" />
        <br />
        <br />
        <input type="text" name="" id="password"  placeholder="Password*"/>
        <p id="p1">Forgot Password?</p>

        <button id="btn3">Login</button>
        <p id="p2" onClick={()=>{setState(false)}}>Not a Member? <font id="p3">Sign-up</font></p>
        
        </div>   :


        <div id="signup">
        <h1 className="fs-2 pt-4 font-bold">Sign-up Form</h1>
        <div className="button">
            <div className="btn4">
               <h2 id="loginFont" onClick={()=>{setState(true)}}>Login</h2>
            </div>
            <div className="btn5" >
               <h2 id="signupFont">Sign-up</h2>

            </div>
        </div>
        <br /><br />
        <input type="text" name="" id="user" placeholder="Username*" />
        <br />
        <br />
        <input type="text" name="" id="email" placeholder="Email*" />
        <br />
        <br />
        <input type="text" name="" id="password"  placeholder="Password*"/>
       

        <button id="btn6">Sign-up</button>
        <p id="p3" onClick={()=>{setState(true)}}>Have an Accoount? <font id="p4">Login</font></p>
        
        </div> }
        </>
    )
}

export default LoginSignup