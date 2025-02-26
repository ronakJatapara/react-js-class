

import React from 'react'
import {useState} from "react"
import Counter2 from "../components/counter2"

function Counter()
{
    const plus = () =>{
        setState(State+1)
    }
    const minus = ()=>{
        if(State <= 0)
        {
            alert("please increase your value")
        }
        else{
            setState(State-1)
        }
    }

    let[State,setState] = useState(0)
    return(
    <>
   <button onClick={minus}>-</button>
   <h2>{State}</h2>
   <Counter2   ronak={State}/>
   <Counter2   ronak={State}/>

   {/* // <Counter2 ronak={State} /> */}

   <button onClick={plus}>+</button>
    </>
    )
}



export default Counter;