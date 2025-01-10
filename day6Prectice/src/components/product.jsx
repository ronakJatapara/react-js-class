// product page 

import React , {useEffect, useState} from "react";
import ProductFrom from "./productForm";
import ProductList from "./productList";

function Product()
{
    const[hide,setHide] = useState(true)
    const[State,setState] = useState({
        img:"",
        title:"",
        price:""
    })

    const[Arr,setArr] = useState([])
    const InputValue = (e)=>{
        const{name,value} = e.target;
        setState({...State, [name]:value})

    }
    // console.log(State);
   
    const FormValue =(e)=>{
        e.preventDefault();
        setArr([...Arr,State])
        setHide({})

    }
    // console.log(Arr);

    
   
     return( 
       <div>
        <button onClick={()=>{setHide(true)}}>form</button>
        <button onClick={()=>{setHide(false)}}>product</button>
        {hide ? <ProductFrom InputValue={InputValue} FormValue={FormValue} />:<ProductList arr={Arr} /> }
        </div>
     )
}


export default Product



