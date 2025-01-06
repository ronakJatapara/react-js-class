

import React, { useState } from "react";
import "./Navbar.css"



function Navbar()
{
    const [Hide,setHide] = useState(false)
    return(
   <>
    <div className="container-fluid">
     
     <div className="row" id="navbar">
        <div className="col-2 d-flex justify-content-center align-items-center">
            <img src="https://demo-ecomus-global.myshopify.com/cdn/shop/files/Ecomus.svg?v=1699583364&width=136" alt="" id="img1" />
        </div>
        <div className="col-8 d-flex justify-content-center align-items-center ps-3">
       
          <a href="" className="pr-5">Home<i className="fa-solid fa-chevron-down"></i></a>
          <a href="" className="pr-5">Shop<i className="fa-solid fa-chevron-down"></i></a>
          <a href="" className="pr-5">Products<i className="fa-solid fa-chevron-down"></i></a>
          <a href="" className="pr-5">Pages<i className="fa-solid fa-chevron-down"></i></a>
          <a href="" className="pr-5">Blog<i className="fa-solid fa-chevron-down"></i></a>
          <a href="" className="pr-5">Buynow<i className="fa-solid fa-chevron-down"></i></a>


        </div>
        <div className="col-2 d-flex justify-content-evenly align-items-center fs-5">
   
                    <a href=""><i className="fa-solid fa-magnifying-glass"></i></a>
  

                    <a href=""><i className="fa-regular fa-heart"></i></a>
                    <a href=""><i className="fa-solid fa-bag-shopping"></i></a>


        </div>
     </div>

    </div>
   
   </>
    )
}

export default Navbar