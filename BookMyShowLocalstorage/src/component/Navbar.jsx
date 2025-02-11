import React from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom'


function Navbar() {
let navigate = useNavigate()

  return (
    <div>
      <div className="container-fluid border border-danger" >
     
     <div className="row">
        <div className="col-2 border d-flex justify-content-end align-items-center p-3">

     
     <img src="download.svg" alt="" />

        </div>
        <div className="col-6 border position-relative d-flex justify-content-start align-items-center">
 

      <input type="text" name="" id="input1" className='ms-4' placeholder='Search for Movies , Events,Plays,Sport and Activities'/>
      <i class="fa-solid fa-magnifying-glass"></i>

        </div>
        <div className="col-3 border d-flex justify-content-evenly align-items-center">

<select name="" id="">
  <option value="">rajkot</option>
  <option value="">Mumbai</option>
  <option value="">Delhi</option>
  <option value="">Pune</option>
  <option value="">Ahmadabad</option>

</select>
   
   <button className='p-1 btn btn-danger' onClick={()=> navigate("/form")}>Add Movie</button>
   <i class="fa-solid fa-bars"></i>

        </div>
     </div>

      </div>
    </div>
  )
}

export default Navbar
