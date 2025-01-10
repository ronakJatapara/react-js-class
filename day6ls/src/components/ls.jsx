
import React, { useState } from "react";
import LsForm from "./lsForm";



function Ls()
{


    const[State,setState] =useState({
        user:"",
        email:"",
        price:""
    })




    const
   

    return(
        <>
       <LsForm    inputvalue={InputValue}/>
        </>
    )
}

export default Ls