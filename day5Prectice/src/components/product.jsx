import React, {useState , useEffect } from "react";
import "./product.css"


function Product()
{
   
    const[product,setProduct] = useState([])

 


      
    useEffect(()=>{

            fetch(`https://dummyjson.com/products`)
            .then((res)=> res.json())
            .then((Res)=>{
                console.log(Res.products)
                setProduct(Res.products)
            
            })
            .catch((err)=>{console.log(err);
            })
    },[])

           





    return(
        <>
     
<div className="container-fluid">
<div className="row">
 {
       product ? product.map((el)=>{
            return  <div className="col-3" id="boxes">
<div className="card" >
 <img src={el.thumbnail} alt="" />
  <div className="card-body d-flex justify-content-center align-items-center flex-column">
    <h5 className="card-title fs-5">{el.title}</h5>
    <p className="card-text text-center">{el.description}</p>
    <a href="#" className="btn btn-primary">Add to card</a>
  </div>
</div>
</div>  
        }): <img src="2.gif" alt="" id="img2" />
      }
 </div>
</div>
   
        </>
    )
}



export default Product







