import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
         <footer className='grid grid-cols-12'>
            <div className="col-span-2 flex justify-center items-center">
<p style={{color:"white",paddingTop:"60px"}}> 
© VISHAL GROUP 2025

</p>
            </div>
            <div className="col-span-10 text-white flex justify-center items-center" style={{fontSize:"12px"}}>
            <Link>About Us   </Link>    <font style={{paddingLeft:"10px",paddingRight:"10px"}}>|</font>

    <Link>Website Privacy Policy</Link><font style={{paddingLeft:"10px",paddingRight:"10px"}}>|</font>
    <Link>Payment Policy</Link><font style={{paddingLeft:"10px",paddingRight:"10px"}}>|</font>
    <Link>NextBuy App Private Policy</Link><font style={{paddingLeft:"10px",paddingRight:"10px"}}>|</font>
    <Link>Return & Refund Policy</Link><font style={{paddingLeft:"10px",paddingRight:"10px"}}>|</font>
    <Link>Shipping Policy</Link><font style={{paddingLeft:"10px",paddingRight:"10px"}}>|</font>
    <Link>Term of Service</Link><font style={{paddingLeft:"10px",paddingRight:"10px"}}>|</font>
    <Link>Contact Us</Link><font style={{paddingLeft:"10px",paddingRight:"10px"}}>|</font>
    <Link>Request Data Deletion</Link><font style={{paddingLeft:"10px",paddingRight:"10px"}}>|</font>
            </div>
        </footer>
    </>
  )
}

export default Footer
