import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/singleProduct.css";
import { Height } from "@mui/icons-material";
import { fontSize, fontWeight } from "@mui/system";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
            <div className='' style={{ cursor: "pointer" }}>
              <font style={{ color: "#B5B5B5", fontSize: "13px" }} className="ps-5">Home</font>
              <i class="fa-solid fa-chevron-right ps-2" style={{ color: "#B5B5B5", fontSize: "13px" }}></i>
              <font style={{ color: "#B5B5B5", fontSize: "13px" }} className="ps-2">Men Clothing</font>
              <i class="fa-solid fa-chevron-right ps-2" style={{ color: "#B5B5B5", fontSize: "13px" }}></i>
              <font style={{ color: "#B5B5B5", fontSize: "13px" }} className="ps-2">Men's T-shirts</font>
              <i class="fa-solid fa-chevron-right ps-2" style={{ color: "#B5B5B5", fontSize: "13px" }}></i>
              <font className="ps-2" style={{ fontSize: "13px" }}>Oversized T-Shirts for Men</font></div>
          </div>
        </div>




        <div className="container-fluid mt-5">
          <div className="row mt-3 ">
            <div className="col-6  position-relative position-sticky" id="sidebar" style={{ top: "60px" }}>
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
                  <Slider {...mainSliderSettings} className="main-slider" style={{ Height: "600px" }}>
                    {images.map((img, index) => (
                      <div key={index}>
                        <img src={img} alt={`Product ${index}`} className="main-img" />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-6   position-relative" id="sidebar2">



              <p id="a1">{state.name}</p>
              <p id="a2">{state.description}</p>
              <p id="a3">{state.price}</p>
              <p id="a4">{state.real}</p>
              <p id="a5">{state.off}</p>
              <p id="a6">inclusive of all taxes</p>
              <br /><br /><br /><br />
              <div id="bought">
                <i class="fa-solid fa-cart-shopping pr-3" style={{ fontSize: "14px" }}></i>
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


              <p id="" style={{ fontSize: "18px" }}>Select Size</p>


              <div className="button  d-flex">
                <div className="btn1 d-flex justify-content-center align-items-center" style={{ cursor: "pointer" }}>S</div>
                <div className="btn2 ms-2 d-flex justify-content-center align-items-center" style={{ cursor: "pointer" }}>M</div>
                <div className="btn3 ms-2 d-flex justify-content-center align-items-center" style={{ cursor: "pointer" }}>L</div>
                <div className="btn4 ms-2 d-flex justify-content-center align-items-center" style={{ cursor: "pointer" }}>XL</div>
                <div className="btn5 ms-2 d-flex justify-content-center align-items-center" style={{ cursor: "pointer" }}>2Xl</div>
              </div>

              <p id="a10">SIZE GUIDE</p>


              <div id="mainBtns" className="d-flex  mt-5">
                <button id="bagBtn" className="d-flex justify-content-center align-items-center position-relative">
                  <i class="fa-solid fa-briefcase"></i>
                  <p id="a11">ADD TO BAG</p>

                </button>
                <div id="wishBtn" className="position-relative  ms-3">

                  <i class="fa-regular fa-heart font-dark" id="fa-heart1" style={{ fontSize: "14px" }}></i>
                  <p id="a12">WISHLIST</p>

                </div>
              </div>
              <br />
              <span>
                <i class="fa-solid fa-location-dot ps-1" style={{ fontSize: "20px" }}></i>
                <font className="ps-3" style={{ fontSize: "20px", fontWeight: "bold" }}>Check for Delivery Details</font>
              </span>

              <br /><br />

              <div className="row">
                <div className="col-12 position-relative">
                  <input type="text" name="" id="pincode" placeholder="Enter Pincode" className="ps-3" />
                  <p id="a13">CHECK</p>

                </div>
              </div>


              <div className="row mt-3">
                <div className="col-12 d-flex jsutify-content-center align-items-center" id="free" style={{ cursor: "pointer" }}>
                  <i class="fa-solid fa-truck"></i>
                  <font id="freeFont" className="ps-2">This product is eligible for FREE SHIPPING</font>
                </div>
              </div>

              <br />
              <div className="row">
                <div className="col-12 " style={{ width: "80%" }}>
                  <img src="/all.png" alt="" className="img-fluid" />
                </div>
              </div>


              <div className="row">
                <div className="col-10" color="gray" size="2px" style={{ width: "80%" }}>
                  <hr />
                </div>
              </div>

              <p id="a14">Key Highlights
              </p>


              <div className="row">
                <div className="col-6 position-relative">
                  <font className="pb-3" id="a15">Design</font>
                  <br />

                  <font className="" style={{}} id="a16"> Graphic Print</font>
                  <br />
                  <hr width="70%" />
                </div>
                <div className="col-6 position-relative">

                  <font className="pb-3" id="a15">Fit</font>
                  <br />

                  <font className="" style={{}} id="a16"> Oversized Fit</font>
                  <br />
                  <hr width="70%" />

                </div>
              </div>


              <div className="row">
                <div className="col-6 position-relative">
                  <font className="pb-3" id="a15">Neck</font>
                  <br />

                  <font className="" style={{}} id="a16">Round Neck</font>
                  <br />
                  <hr width="70%" />
                </div>
                <div className="col-6 position-relative">

                  <font className="pb-3" id="a15">Occasion</font>
                  <br />

                  <font className="" style={{}} id="a16"> Casual Wear</font>
                  <br />
                  <hr width="70%" />

                </div>
              </div>




              <div className="row">
                <div className="col-6 position-relative">
                  <font className="pb-3" id="a15">Sleeve Style</font>
                  <br />

                  <font className="" style={{}} id="a16">Half Sleeve</font>
                  <br />
                </div>
                <div className="col-6 position-relative">

                  <font className="pb-3" id="a15">Wash Care</font>
                  <br />

                  <font className="" style={{}} id="a16"> Gentle Machine Wash</font>
                  <br />

                </div>
              </div>
              <br /><br />

              <div className="row">
                <div className="col-12" id="Description">
                  <div className="row">
                    <div className="col-12" style={{ boxShadow: "none" }}>
                      <Accordion id="acc">
                        <AccordionSummary
                          className="position-relative"
                          expandIcon={<ArrowDropDownIcon />}
                          aria-controls="panel2-content"
                          id="panel2-header"
                        >
                          <i class="fa-solid fa-clipboard"></i>
                          <Typography component="span">
                            <font id="a23" className="ps-4">Product Description</font>
                            <br />
                            <font id="a24" className="ps-4">Manufacture, Care and Fit</font>

                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                            <p id="a25">
                              The Men's Green Wakanda Forever Graphic Printed Oversized T-shirt brings the bold, iconic energy of Wakanda to your wardrobe. It is part of Official Marvel Merchandise. Whether you're a die-hard fan of Black Panther or simply love bold, empowering designs, this printed t-shirt is a perfect way to showcase your admiration for the iconic superhero and his legacy. This oversized t-shirt is more than just casual wearit's a tribute to the Black Panther universe.
                              <br /><br />
                              Crafted from single jersey, classic, lightweight jersey fabric comprising 100% cotton, this Black Panther Wakanda Forever t-shirt offers comfort and breathability, making it perfect for all-day wear. The oversized fit and the round neck provides a relaxed silhouette with a loose structure that feels light and roomy on the body, ensuring maximum ease of movement.
                              <br /><br />

                              When it comes to care, the gentle machine wash ensures easy maintenance. Just toss it in with similar colours, and you're good to go. The durable single jersey fabric, with its classic, lightweight feel, helps maintain the quality wash after wash, keeping it fresh and vibrant.
                              <br /><br />

                              Pair this oversized t-shirt with slim-fit jeans or joggers for a balanced look that keeps the focus on the bold print. Layer it with a denim jacket or bomber for added style, and complete the look with your favourite sneakers.
                              <br /><br />

                              Complete your look with a Wakanda Forever t-shirt and bring the spirit of Wakanda into your everyday wardrobe. Whether you're relaxing at home or heading out with friends, this t-shirt is the perfect go-to choice. Also, while you're at it, explore vests, sweatshirts, caps, and more from the Official Marvel Merchandise to celebrate the legacy of Black Panther with pride!
                              <br /><br />

                            </p>


                            <font id="a26">Country of Origin -</font>
                            <font id="a27"> India</font>
                            <br />
                            <br />
                            <font id="a26" className="pt-3">Manufactured By -</font>
                            <font id="a27"> Bewakoof Brands Pvt Ltd,
                              <br />
                              Sairaj logistic hub #A5, BMC pipeline road, Opposite all saints high school, Amane, Bhiwandi, Thane, Maharashtra 421302
                            </font>
                            <br /><br />


                            <font id="a26" className="pt-3">Packed By -</font>
                            <font id="a27"> Bewakoof Brands Pvt Ltd,
                              <br />
                              Sairaj logistic hub #A5, BMC pipeline road, Opposite all saints high school, Amane, Bhiwandi, Thane, Maharashtra 421302
                            </font>
                            <br /><br />
                            <font id="a26">Commodity -</font>
                            <font id="a27"> Men's T-Shirt</font>
                            <br /><br />
                            <font id="a28"> Product Specifications</font>
                            <ul>
                              <li style={{ fontSize: "10px" }}>
                                <font id="a29">Oversized fit - Super Loose On Body Thoda Hawa Aane De</font>
                              </li>
                              <li style={{ fontSize: "10px" }}>
                                <font id="a29">Single Jersey - Classic, lightweight jersey fabric comprising 100% cotton.</font>
                              </li>
                            </ul>

                          </Typography>
                        </AccordionDetails>
                      </Accordion>


<br />

                      <Accordion id="acc">
                        <AccordionSummary
                          className="position-relative"
                          expandIcon={<ArrowDropDownIcon />}
                          aria-controls="panel2-content"
                          id="panel2-header"
                        >
                          <i class="fa-solid fa-left-right"></i>
                          <Typography component="span">
                            <font id="a23" className="ps-4">P15 Days Returns & Exchange</font>
                            <br />
                            <font id="a24" className="ps-4">Know about return & exchange policy</font>

                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>



                            <font id="a27">Easy returns upto 15 days of delivery. Exchange available on select pincodes</font>



                          </Typography>
                        </AccordionDetails>
                      </Accordion>




                    </div>
                  </div>

<br /><br />
            <div className="row">
              <div className="col-10">
              <div className="row">
                    <div className="col-4 d-flex justify-content-center align-itemss-center">
                      <img src="/1.png" alt="" className="img-fluid" style={{ width: "100px" }} />
                    </div>
                    <div className="col-4  d-flex justify-content-center align-itemss-center">
                      <img src="/2.png" alt="" className="img-fluid" style={{ width: "100px" }} />
                    </div>

                    <div className="col-4 d-flex justify-content-center align-itemss-center">
                      <img src="/3.png" alt="" className="img-fluid" style={{ width: "100px" }} />
                    </div>
                  </div>
              </div>
            </div>
            <br />

                <div className="row">
                  <div className="col-10">
                  <div className="row">
                    <div className="col-12 ">
                      <img src="/4.png" alt="" className="img-fluid" style={{ width: "100%", height: "100#" }} />
                    </div>
                  </div>
                  </div>
                </div>

<div className="row">
  <div className="col-10">
  <div className="row">
                    <div className="col-12 ">
                      <button id="btnn1">Veiw All Reviews</button>
                    </div>
                  </div>
  </div>
</div>
                 





                </div>

              </div>





            

              


        
              {/* <div className="row">
  <div className="col-10">
  </div>
</div> */}












            </div>
          </div>



<br /><br /><br /><br />

          <div className="row">
            <div className="col-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat corrupti tempore, ipsum nihil adipisci praesentium cum eaque? Rem, rerum incidunt harum nihil deleniti possimus pariatur ratione adipisci quae, itaque recusandae.
            </div>
          </div>
        </div>


      </div>

    </>


  );
}

export default SingleProduct;










