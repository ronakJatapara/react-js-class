


import React, { useEffect, useState } from "react"
import "./dog.css"



function Dog()
{
    const[State,setState] =useState(false)
    const [Arr,setArr] = useState([])


    useEffect(()=>{
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((res)=> res.json())
        .then((res)=>{
            // console.log(res);
            setArr(res)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[State])

    return(
        <>
      {
        State == null ? <h1>load</h1> :
        <div className="box">
        <img src={Arr.message} alt="" />
    </div>
      }


        <button onClick={()=>{setState(!State)}}>change</button>
        </>
    )
}



export default Dog