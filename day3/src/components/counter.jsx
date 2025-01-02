
import React from "react"
import {useState} from "react"
import Counter2 from "./counter2"


function Counter(props)
{
    let [State,setState] = useState(0)
    
    const plus = ()=>{
      
        setState(State+1)
      
      

     
    }


    const minus=()=>{
       
        if(State <= 0)
            {
               alert("sss")
            }
            else{
                setState(State-1)
            }
    }

   return(
    <>
  



    <button className="ms-2" onClick={minus}>-</button>
    <div className="d-flex">
    <h2 >{State}</h2>
    <Counter2 ronak={State} />
    </div>

    <button className="ms-2" onClick={plus}>+</button>
  

    </>
   )
}

export default Counter;