


import React, { useState } from "react";
import Signup from "./signup";
import Login from "./login";




function Change()
{

    const [swi,setSwi] = useState(true)
    const [State,setState] =useState({
        name:"",
        email:"",
        pass:""
    })

    const[Arr,setArr] = useState([])
    const handleInput = () =>{
      
    }
    const handelSubmit = () =>{

    }

    return(
        <>




        <button onClick={()=>{setSwi(false)}}>Login</button>
        <button onClick={()=>{setSwi(true)}}>Signup</button>

       { swi == true ? <Signup handelInput={handleInput} handelSubmit={handelSubmit} ></Signup> :

                          <Login></Login>}
        </>
    )
}



export default Change;