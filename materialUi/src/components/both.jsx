import React, { useState } from "react";
import MultilineTextFields from "./form";
import Details from "./details";

function Both()
{
    const [swi,setSwi] = useState(true);
    
    return(
        <>
        



        <button onClick={()=>setSwi(true)}>form</button>
        <button onClick={()=>setSwi(false)}>show</button>
         
               { swi == true ? <MultilineTextFields ></MultilineTextFields>:
                <Details></Details>}
         
        
        </>
    )
}




export default Both