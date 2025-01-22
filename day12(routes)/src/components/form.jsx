import React, {useEffect, useState} from "react";
import {v4}  from 'uuid';


function Form()
{ 
    const[state,setState] = useState({
      name:"",
      email:"",
      password:"",
      id:v4()
    })

const[arr,setArr] = useState(JSON.parse(localStorage.getItem("data"))||[])

const handleChange = (e)=>{
    const {name,value} =e.target;
    setState({...state,[name]:value}) 
}

const handleSubmit=(e)=>{
    e.preventDefault();
    setArr([...arr,state])
    console.log(state);

}
useEffect(()=>{
     localStorage.setItem("data",JSON.stringify(arr))
 },[arr])



    return(
        <>
        
     <form action="" onSubmit={handleSubmit}>
        <input type="text" name="name" value={state.name} id="" onChange={handleChange} />
        <input type="text" name="email" value={state.email}   id="" onChange={handleChange} />
        <input type="text" name="password" value={state.password}  id="" onChange={handleChange} />
        <input type="submit"  name=""  id="" />

     </form>
        
        </>
    )
}



export default Form