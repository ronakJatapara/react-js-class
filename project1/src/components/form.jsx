
import React from "react";
import "./navbar.css"
import { useState } from "react";
import Product from "./product";




function Form(props)
{


    const [img,setImg] = useState("")
    const [name,setName] = useState("")
    const [price,setPrice] = useState("")
    const[arr,setArr]= useState([])


const submitdetails=()=>{
    const obj = {
        name,
        img,
        price
    }
    setArr([...arr,obj])
// console.log(arr);    
setImg("")
setName("")
setPrice("")

}


    return(
<>
{props.data == true ?
<div className="main">
<input type="text" name="" id="" value={img} placeholder="product img" onChange={(e)=>{setImg(e.target.value)}}/>
<br /><br />
<input type="text" name="" id="" value={name} placeholder="product name"onChange={(e)=>{setName(e.target.value)}}/>
<br /><br />

<input type="text" name="" id="" value={price} placeholder="product price" onChange={(e)=>{setPrice(e.target.value)}}/>
<br /><br />
<input type="submit" name="" id="" onClick={submitdetails}/>
</div>
:
<Product list={arr}/>
}

</>
    )

}


export default Form