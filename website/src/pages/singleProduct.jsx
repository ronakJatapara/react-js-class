import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/singleProduct.css";
import { Height } from "@mui/icons-material";
import { fontSize, fontWeight } from "@mui/system";

function SingleProduct() {
  const { id } = useParams();
  const [state, setState] = useState({});
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const images = [
    state.img,
    state.img1,
    state.img2,
    state.img3,
    state.img4,
    state.img5,
    state.img6,
    state.img7,
    state.img8,
  ].filter((img) => img); // Filter out undefined images

  const mainSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
  };

  const thumbnailSliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    focusOnSelect: true,
    vertical: true, // Enables vertical thumbnails
    verticalSwiping: true, // Enables vertical swipe
    arrows: false, // Hide arrows for better UI
  };

  return (

<>

        
 <div className="container-fluid">


 <div className="row">
        <div className="col-12">
          <div className='' style={{cursor:"pointer"}}>
            <font style={{color:"#B5B5B5", fontSize:"13px"}} className="ps-5">Home</font>
          <i class="fa-solid fa-chevron-right ps-2" style={{color:"#B5B5B5" , fontSize:"13px"}}></i>
<font style={{color:"#B5B5B5", fontSize:"13px"}} className="ps-2">Men Clothing</font>
<i class="fa-solid fa-chevron-right ps-2" style={{color:"#B5B5B5", fontSize:"13px"}}></i>
<font style={{color:"#B5B5B5", fontSize:"13px"}} className="ps-2">Men's T-shirts</font>
<i class="fa-solid fa-chevron-right ps-2" style={{color:"#B5B5B5", fontSize:"13px"}}></i>
<font className="ps-2" style={{fontSize:"13px"}}>Oversized T-Shirts for Men</font></div>
        </div>
       </div>      




       <div className="container-fluid mt-5">
    <div className="row mt-3 border">
        <div className="col-6  position-relative">
        <div className="row d-flex align-items-center">
        <div className="col-md-2">
          {/* 🔹 Vertical Thumbnail Slider */}
          <Slider {...thumbnailSliderSettings} className="thumbnail-slider">
            {images.map((img, index) => (
              <div key={index} className="thumbnail-item">
                <img
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="thumbnail-img"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="col-md-5">
          {/* 🔸 Main Image Slider */}
          <Slider {...mainSliderSettings} className="main-slider" style={{Height:"600px"}}>
            {images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Product ${index}`} className="main-img" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
        </div>
        <div className="col-6  border-danger position-relative">



      <p id="a1">{state.name}</p>
      <p id="a2">{state.description}</p>
      <p id="a3">{state.price}</p>
      <p id="a4">{state.real}</p>
      <p id="a5">{state.off}</p>
      <p id="a6">inclusive of all taxes</p>
      <br /><br /><br /><br />
      <div id="bought">
      <i class="fa-solid fa-cart-shopping pr-3" style={{fontSize:"14px"}}></i> 
     <font className="ps-2"> 80 people bought this in the last 7 days</font></div>

     <div className="row">
      <div className="col-8 d-flex justify-content-start align-items-center mt-3">
        <div className="green d-flex justify-content-center align-items-center">
        BUY 2 FOR 999
        </div>
        <div className="gray ms-3 d-flex justify-content-center align-items-center">
        OVERSIZED FIT
        </div>
        <div className="trans ms-3 d-flex justify-content-center align-items-center">
        PREMIUM DENSE FABRIC
        </div>
      </div>
     </div>


     <div className="review">
      <img id="star1" src="https://media.istockphoto.com/id/1135769825/vector/star-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=6jMpeAqUVM2db6kdhzj-nxA52Sqk3ImpN-GP9lIeaXE=" alt="" />
      <p id="a7">4.6</p>
      <font id="a8">|</font>
      <p id="a9">16 Review</p>
     </div>
<br />


     <p id="" style={{fontSize:"18px"}}>Select Size</p>


     <div className="button  d-flex">
      <div className="btn1 d-flex justify-content-center align-items-center" style={{cursor:"pointer"}}>S</div>
      <div className="btn2 ms-2 d-flex justify-content-center align-items-center" style={{cursor:"pointer"}}>M</div>
      <div className="btn3 ms-2 d-flex justify-content-center align-items-center" style={{cursor:"pointer"}}>L</div>
      <div className="btn4 ms-2 d-flex justify-content-center align-items-center" style={{cursor:"pointer"}}>XL</div>
      <div className="btn5 ms-2 d-flex justify-content-center align-items-center" style={{cursor:"pointer"}}>2Xl</div>
     </div>

     <p id="a10">SIZE GUIDE</p>


<div id="mainBtns" className="d-flex  mt-5">
     <button id="bagBtn" className="d-flex justify-content-center align-items-center position-relative">
     <i class="fa-solid fa-briefcase"></i>
      <p id="a11">ADD TO BAG</p>
    
     </button>
     <div id="wishBtn" className="position-relative  ms-3">

     <i class="fa-regular fa-heart font-dark" id="fa-heart1" style={{fontSize:"14px"}}></i>
     <p id="a12">WISHLIST</p>

     </div>
     </div>
     <br />
    <span>
    <i class="fa-solid fa-location-dot ps-1" style={{fontSize:"20px"}}></i>
      <font className="ps-3" style={{fontSize:"20px", fontWeight:"bold"}}>Check for Delivery Details</font>
    </span>
      





        </div>
    </div>
    </div>


 </div>

</>

  
  );
}

export default SingleProduct;
