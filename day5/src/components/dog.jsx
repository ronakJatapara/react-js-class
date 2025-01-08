import React, { useEffect, useState }  from "react";
import "./dog.css"



function Dog()
{

    const[dog, setDog] = useState(false)
    const [arr,setArr] =useState([])



    useEffect(()=>{
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((res)=> res.json())
        .then((res)=>{
            // console.log(res);
            setArr(res.message)
            
        })
        .catch((err)=>{console.log(err);
        })
    },[dog])


    return(
        <>
       
      {
         dog == null ? <h2>load</h2> : <div className="main">
            <img src={arr} alt="" id="img1" />
            {/* <p className="text-center">{dog.status}</p> */}
        </div> 
      }


      <button onClick={()=>{setDog(!dog)}}>change</button>
     




     

        </>
    )
}




export default Dog





{/* <button onClick={()=>{setDog()}}>change</button> */}