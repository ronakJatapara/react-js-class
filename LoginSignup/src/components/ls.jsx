import React , {useState} from "react";
import "./ls.css"
import { use } from "react";
function LoginSignup()
{

    const [State,setState] = useState(true)
    const [username,setUsesrname] = useState("");
    const [email,setEmail] = useState("")
    const[password,setPassword] = useState("");
    const [loginEmail,setLoginEmail] =useState("")
    const [loginPass,setLoginPass] =useState("")
    const [arr,setArr]=useState([])




  
    const submitdetails = () => {

        let obj={       
           username,
           email,
           password
    }   
    
    setArr([...arr,obj])
    // alert("sign up succesfull")
    

    setEmail("")
    setUsesrname("")
    setPassword("")
    
    }
//    console.log(arr);
   

    
   const logindetails=()=>{

const a = arr.filter((el)=> el.email == loginEmail  && el.password == loginPass )
console.log(a);


 if(a[0].email != loginEmail)
 {
    alert("error in email")
 }
 else if(a[0].password != loginPass)
 {
    alert("error in password")
 }
 else{
    alert("welcome")
 }
   
   


   }

   



    

  

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

        <input type="text" name=""  id="email" placeholder="Email*" onChange={(e)=>{setLoginEmail(e.target.value)}}/>
        <br />
        <br />
        <input type="text" name=""  id="password"  placeholder="Password*" onChange={(e)=>{setLoginPass(e.target.value)}}/>
        <p id="p1">Forgot Password?</p>

        <button id="btn3" onClick={logindetails}>Login</button>
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
        <input type="text" name="" id="user" placeholder="Username*" value={username} onChange={(e)=>{setUsesrname(e.target.value)}} />
        <br />
        <br />
        <input type="text" name="" id="email" placeholder="Email*" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <br />
        <br />
        <input type="text" name="" id="password"  placeholder="Password*" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
       

        <button id="btn6" onClick={submitdetails}>Sign-up</button>
        <p id="p3" onClick={()=>{setState(true)}}>Have an Accoount? <font id="p4">Login</font></p>
        
        </div> }
        </>
    )   
}




export default LoginSignup



   
