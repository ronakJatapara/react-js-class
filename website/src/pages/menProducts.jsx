import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../components/menProduct.css"
import { colors } from '@mui/material';

function MenProducts() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/product')
      .then((res) => {
        setArr(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);



  console.log(arr);


  useEffect(() => {

    const filterTitles = document.querySelectorAll(".filter-title");
    filterTitles.forEach(title => {
      title.addEventListener("click", () => {
        const options = title.nextElementSibling;
        const arrow = title.querySelector(".arrow");

        if (options) {
          options.style.display = options.style.display === "block" ? "none" : "block";
          arrow.style.transform = options.style.display === "block" ? "rotate(180deg)" : "rotate(0deg)";
        }
      });
    });

  }, [])
  // Ensure filter functionality works when React updates the component



  return (
    <>

      <div className="container-fluid">



        <div className="row mb-2">
          <div className="col-12">
            <div className="free">
              <i class="fa-solid fa-truck"></i>  <font className='text-center ps-3'>FREE SHIPPING on all orders above ₹399</font>
            </div>
          </div>
        </div>

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
          <div className="row d-flex">
            <div className="col-3 id">
              <div class="sidebar">
                <div class="sidebar-header">
                  <h5>Filters<span></span></h5>
                  {/* <a href="#" class="clear-all">Clear All</a> */}
                </div>

                <div class="filter">
                  <div class="filter-title active">
                    <span class="dot active-dot mb-3"></span><font className="pr-5 pb-3" id="sideText"> Category</font>
                    {/* <span class="arrow">&#9662;</span> */}
                    <i class="fa-solid fa-chevron-down" style={{fontSize:"14px"}}></i>

                  </div>
                  <div class="filter-options pt-4">
                    <label><input type="checkbox" /> Hoodies</label>
                    <label><input type="checkbox" /> Sweatshirts</label>
                  </div>
                </div>

                <div class="filter">
                  <div class="filter-title">
                    <span class="dot  mb-3"></span> <font className="pr-5 pb-3" id="sideText">

                    Sizes
                    </font>
                    {/* <span class="arrow">&#9662;</span>
                     */}
                     <i class="fa-solid fa-chevron-down" style={{fontSize:"14px"}}></i>
                  </div>
                  <div class="filter-options pt-4">
                    <label><input type="checkbox" /> S</label>
                    <label><input type="checkbox" /> M</label>
                    <label><input type="checkbox" /> L</label>
                    <label><input type="checkbox" /> XL</label>
                  </div>
                </div>

                <div class="filter">
                  <div class="filter-title active">
                    <span class="dot active-dot  mb-3 "></span><font className="pr-5 pb-3" id="sideText">
                    Brand
                      </font> 

                    {/* <span class="arrow">&#9662;</span> */}
                    <i class="fa-solid fa-chevron-down" style={{fontSize:"14px"}}></i>

                  </div>
                  <div class="filter-options pt-4">
                    <label><input type="checkbox" /> Bewakoof</label>
                    <label><input type="checkbox" /> Heavy Duty</label>
                  </div>
                </div>

                <div class="filter">
                  <div class="filter-title">
                    <span class="dot  mb-3"></span><font className="pr-5 pb-3" id="sideText">
                    Color
                    </font>
                    {/* <span class="arrow">&#9662;</span> */}
                    <i class="fa-solid fa-chevron-down" style={{fontSize:"14px"}}></i>

                  </div>
                </div>

                <div class="filter">
                  <div class="filter-title">
                    <span class="dot  mb-3"></span><font className="pr-5 pb-3" id="sideText">
                    Design</font> 
                    {/* <span class="arrow">&#9662;</span> */}
                    <i class="fa-solid fa-chevron-down" style={{fontSize:"14px"}}></i>

                  </div>
                </div>

                <div class="filter">
                  <div class="filter-title">
                    <span class="dot  mb-3"></span><font className="pr-5 pb-3" id="sideText">
                    Fit</font> 
                    {/* <span class="arrow">&#9662;</span> */}
                    <i class="fa-solid fa-chevron-down" style={{fontSize:"14px"}}></i>

                  </div>
                </div>

                <div class="filter">
                  <div class="filter-title">
                    <span class="dot  mb-3"></span><font className="pr-5 pb-3" id="sideText">
                    Sleeve</font> 
                    {/* <span class="arrow">&#9662;</span> */}
                    <i class="fa-solid fa-chevron-down" style={{fontSize:"14px"}}></i>

                  </div>
                </div>

                <div class="filter">
                  <div class="filter-title">
                    <span class="dot  mb-3"></span><font className="pr-5 pb-3" id="sideText">
                    Neck</font> 
                    {/* <span class="arrow">&#9662;</span> */}
                    <i class="fa-solid fa-chevron-down" style={{fontSize:"14px"}}></i>

                  </div>
                </div>

                <div class="filter">
                  <div class="filter-title">
                    <span class="dot  mb-3"></span><font className="pr-5 pb-3" id="sideText">
                    Type</font> 
                    {/* <span class="arrow">&#9662;</span> */}
                    <i class="fa-solid fa-chevron-down" style={{fontSize:"14px"}}></i>

                  </div>
                </div>

                <div class="filter">
                  <div class="filter-title">
                    <span class="dot  mb-3"></span><font className="pr-5 pb-3" id="sideText">
                    Ratings
                    </font>
                    {/* <span class="arrow">&#9662;</span> */}
                    <i class="fa-solid fa-chevron-down" style={{fontSize:"14px"}}></i>

                  </div>
                </div>

              </div>
            </div>



            <div className="col-9 id1">
    
    <div className="row mb-3" style={{cursor:"pointer"}}>
     <div className="col-6"> <span ><font className='fs-4'>Oversized T Shirt Men</font><font className="ps-3" style={{fontSize:"16px", color:"gray"}}>1168 Products</font></span></div>
     <div className="col-6 d-flex justify-content-end">
      <div className="sort  d-flex justify-content-center align-items-center">
      <i class="fa-solid fa-bars " style={{color:"gray"}}></i>
      <font className="ps-2" style={{color:"gray"}}>Sort by: </font>
      <font className="ps-2" style={{color:"black" }} id="Popularity">Popularity</font>
      </div>
     </div>
      
    </div>

              <div className="row">
                {
                  arr.map((el, ind) => {
                    return (
                      <div className="col-4">
                        <div className="mainBox">
                          <div className="card-img">
                            <img src={el.img} alt="" />
                            <div id='star'>
                              <img src="data:image/jpeg;base64,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" alt="" />
                              <font id="star-text">4.5</font>
                              </div>
                           <div id="fit">
                            <p>OVERSIZED FIT</p>
                           </div>
                          </div>
                          <div className="card-text position-relative">
                            <p id='p11'>{el.name}</p>
                            <i class="fa-regular fa-heart"></i>
                            <p id='p22'>{el.description}</p>
                            <font id="p33">{el.price}</font>
                            <font id="p44">{el.real}</font>
                            <font id="p55">{el.off}</font>
                            <div className="smallBox">
                              <p id='p66'>
                                {el.button}
                              </p>


                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>




            </div>
          </div>
        </div>

      </div>


    




    </>
  );

}

export default MenProducts;



