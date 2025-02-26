import React from 'react'
import './Navbar.css'
import { Link } from 'react-router'


function Navbar() {
  return (
    <div>
   <nav class="navbar navbar-expand-lg navbar-light  position-fixed " style={{top:"0px", left: "0", zIndex: "1000", background: "white" , width:"100%"}}>
  <div class="container ">
      <a class="navbar-brand"><img src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" width={"150px"} className="" alt="" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse mt-2" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <a class="nav-link" >Men</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" >Women</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" >Mobile Covers</a>
              </li>
          </ul>
          <form class="d-flex">
              <input class="form-control" type="search" placeholder="Search by products" id='in1' aria-label="Search"></input>
          </form>
          <p id='line'>|</p>
          <Link to="/login"><i class="fa-solid fa-user"></i></Link>
          <a class="icon"><i class="fa-regular fa-heart" id="fa-heart"></i></a>
          <a class="icon"><i class="fa-solid fa-bag-shopping"></i></a>
      </div>
  </div>
</nav>

{/* Main content (Add margin or padding here) */}


    </div>
  )
}

export default Navbar