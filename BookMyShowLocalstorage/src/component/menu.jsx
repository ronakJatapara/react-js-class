import React from 'react'
import "./Menu.css"

function Menu() {
  return (
    <div>
     <div className="container-fluid">

        <div className="row "style={{backgroundColor:"white"}}>
            <div className="col-8 d-flex align-items-center ">
                <font id="menu1" className=" text-dark">Movies</font>
                <font id="menu1" className="ps-3 text-dark">Stream</font>
                <font id="menu1" className="ps-3 text-dark">Events</font>
                <font id="menu1" className="ps-3 text-dark">plays</font>
                <font id="menu1" className="ps-3 text-dark">Sports</font>
                <font id="menu1" className="ps-3 text-dark">Activities</font>

            </div>
            <div className="col-4 d-flex align-items-center">

               
               <font  id="menu2" className=" text-dark">ListYourShow</font>
               <font  id="menu2" className="ps-2 text-dark">Corporates</font>
               <font  id="menu2" className="ps-2 text-dark">Offers</font>
               <font  id="menu2" className="ps-2 text-dark">Gift Card</font>



            </div>
        </div>

     </div>
    </div>
  )
}

export default Menu
