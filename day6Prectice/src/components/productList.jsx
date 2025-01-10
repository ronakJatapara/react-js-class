import React from "react";
import "./product.css"

function ProductList({arr}) {

    return (
        <>
            <div>
                
          
          {
            
           arr ? arr.map((el)=>{
                   return <div>
                   
                  <div className="main">
                    <div className="img">
                        <img src={el.img} alt="" />
                       
                    </div>
                    <div className="title">
                    <p>{el.title}</p>
                    </div>
                    <div className="price">
                    <p>{el.price}</p>

                    </div>
                  </div>
                   </div>
            }) : <h1></h1>
            
          }
              
            </div>
        </>
    );

}
export default ProductList