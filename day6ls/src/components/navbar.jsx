import React, { useState } from "react";
import Login from "./login";
import Signup from "./signup";

function Navbar()
{
    const[swi,setSwi] = useState(true)
    const[State,setState] = useState({

        user:"",
        email : "" ,
        pass:""

  })


  const[Arr,setArr] = useState([])
  const InputValue =(e)=>{
     const{name,value} = e.target;
     setState({...State,[name]:value})
  }

  const SubmitValue=(e)=>{
      e.preventDefault();
      setArr([...Arr , State])
  }
  console.log(Arr);
    return(
       <>
       <button onClick={()=>{setSwi(true)}}>login</button>
       <button onClick={()=>{setSwi(false)}}>signup</button>
      { swi == true ?   <Login arr={Arr} />: <Signup InputValue={InputValue}  SubmitValue={SubmitValue} />}
       </>
    )
}



export default Navbar