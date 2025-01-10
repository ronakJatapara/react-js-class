import React from "react";
import ProductForm from "./productForm";
import ProductList from "./productlist";
import { useState } from "react";



function Product()
{
    const[swi,setSwi] = useState(true)

    const[State,setState] = useState({
        img :"",
        title:"",
        price:""
        

    })



    const [arr,setArr] = useState([])
    const getValue =(e)=>{
    const {name,value} = e.target;
    setState({...State,[name]:value})
    }

  

    const submitDetail=(e)=>{
             e.preventDefault();
             setArr([...arr,State])

    }
    console.log(arr);




    return(
      <div>

      
          <button onClick={()=>{setSwi(true)}}>form</button>
          <button onClick={()=>{setSwi(false)}}>product</button>
        { swi ? <ProductForm getValue={getValue} submitDetail={submitDetail} /> : <ProductList arr={arr} />}
        </div>
    )
}

export default Product