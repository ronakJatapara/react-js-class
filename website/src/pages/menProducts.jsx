import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../components/menProduct.css"
import { colors } from '@mui/material';
// import Link from '@mui/material';
import { Link } from 'react-router-dom';
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
    
    <div className="row " style={{cursor:"pointer"}}>
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
                        <div className="mainBox" onClick={el.id}>
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

              <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center">
            <img src="https://www.bewakoof.com/images/bwkf-loader.gif" alt="" id='gif'/>
          </div>
        </div>


            </div>
          </div>
        </div>





    
   <div className="container mt-5">

   <div className="row mt-5">
          <div className="col-12 mt-5">
            <p id='pp1' className='pt-5' style={{fontWeight:"bold"}}>Oversized T-Shirts for Men</p>
          </div>
          <div className="col-12">
            <p id='pp2'>The Power Of Oversized T Shirt Men In Modern Fashion</p>
            <p style={{color:"#777677" , fontSize:"14px"}}>Why settle for ordinary when you can go oversized?</p>
            <p style={{color:"#777677" , fontSize:"14px"}}>Oversized tees for men are the answer to every modern wardrobe dilemma. Wondering if they’re still in trend? Absolutely! These loose-fitting essentials have taken the fashion scene by storm and show no signs of slowing down. Loved for their laid-back vibe and versatility, oversized T-shirts perfectly balance comfort and style, making oversized t shirt men a must-have for your collection.

</p>

<p style={{color:"#777677" , fontSize:"14px"}}>At Bewakoof, we bring you a wide range of oversized t shirt for men, tailored for the trend-savvy yet comfort-loving man. Dive into this blog to explore why oversized tees are more than just a trend—they’re a lifestyle statement

</p>

            
          </div>


          <div className="col-12">
            <p id='pp2'>The Range Of Male Oversized T Shirt We Offer</p>
            <p style={{color:"#777677" , fontSize:"14px"}}>
            When it comes to over sized t shirt men, Bewakoof ensures you have plenty of options to choose from. here’s a glimpse of the types :</p>
            <p style={{color:"#777677" , fontSize:"14px"}}>
Oversized T-Shirts:

<br />
<br />

Classic oversize men tees are a staple for those who love a relaxed and effortless vibe. With bold graphic prints, catchy slogans, and minimalist designs, these T-shirts let you make a statement without trying too hard.

</p>

<p style={{color:"#777677" , fontSize:"14px"}}>
Oversized Polo T-Shirts:

<br /><br />
For a more refined yet casual look, oversized polo T-shirts are your go-to option. Blending oversized comfort with a classic polo collar, these are ideal for semi-casual outings and adding a hint of elegance to your look.

</p>

            
          </div>




          <div className="col-12">
            <p id='pp2'>Occasions Call For Oversized Tees: Looks For Every Event
            </p>
            <p style={{color:"#777677" , fontSize:"14px"}}>Tuitions: Study In Comfort
<br /><br />


Pair a classic oversizedt shirt men with slim-fit denim jeans for men for a balanced and relaxed look. Add sneakers and a backpack to keep it casual yet organised for those long study sessions.</p>
            <p style={{color:"#777677" , fontSize:"14px"}}>Oversized tees for men are the answer to every modern wardrobe dilemma. Wondering if they’re still in trend? Absolutely! These loose-fitting essentials have taken the fashion scene by storm and show no signs of slowing down. Loved for their laid-back vibe and versatility, oversized T-shirts perfectly balance comfort and style, making oversized t shirt men a must-have for your collection.

</p>

<p style={{color:"#777677" , fontSize:"14px"}}>At Bewakoof, we bring you a wide range of oversized t shirt for men, tailored for the trend-savvy yet comfort-loving man. Dive into this blog to explore why oversized tees are more than just a trend—they’re a lifestyle statement

</p>

            
          </div>








          <div className="col-12">
            <p id='pp2'>All You Need In Oversized Male T Shirt At Bewakoof
            </p>
            <p style={{color:"#777677" , fontSize:"14px"}}>Sizes For Everyone:
<br /><br />

We offer over size tshirts for men in sizes ranging from XS to 2XL+ including xxxl t-shirts. No matter your body type, you can enjoy the relaxed and trendy vibe of our tees.



Trusted Brands:

<br /><br />


Our collection includes trusted brands like Bewakoof®, Bewakoof Air® 1.0, and Weezy, each offering unique styles to suit your taste.

<br /><br />


Vibrant Colours:
<br /><br />


With a wide colour palette, including black, white, blue, green, and brown, you’ll never run out of options. Whether you prefer classic shades or bold hues, we’ve got oversized t shirt male for every mood.


<br /><br />

Unique Designs:
<br /><br />


Bold and Expressive Styles

<br /><br />

Designs like graphic prints, typography, and unique printed patterns let you showcase your personality effortlessly. Whether it's fandom merch or quirky slogans, these styles are perfect.
<br /><br />



Timeless Classics
<br /><br />


Solid colours, stripes, checks, and subtle self-designs bring a polished and minimal look to your outfit. These versatile options are ideal for everyday wear with a touch of sophistication.


<br /><br />

Creative and Vibrant Patterns

<br /><br />

Artistic designs like tie & dye, abstract prints, and ombre gradients add a playful and colourful flair to your wardrobe. These styles are perfect for casual days when you want to stand out.
<br /><br />



Edgy and Dynamic Designs

<br /><br />

Camouflage, animal prints, colour block patterns, and cut & sew styles offer a bold and modern appeal. These striking designs add a touch of adventure and energy to your everyday look.


<br /><br />

Detailed and Premium Touches


Textured fabrics and intricate embroidery elevate your style with subtle elegance. These refined options are perfect for when you want something stylish.

<br /><br />


Versatile Fits:

<br /><br />

Our mens oversized tee shirts come in both regular oversized and super loose fits to match your comfort level. They are ideal for creating a relaxed, modern look that’s easy to style.


<br /><br />

Sleeve And Neck Options:
<br /><br />


Choose from half sleeves, full sleeves, or raglan sleeves, depending on your preferred style. Neck options include round neck, polo, v-neck, hooded, and Henley necks for added versatility.

<br /><br />


Unbeatable Discounts And Tribe Membership Perks:

<br /><br />

Enjoy discounts ranging from 10% to 70%, making our collection budget-friendly. Tribe members also benefit from exclusive deals and savings, making your shopping experience even more rewarding.



</p>
            

            
          </div>


<br /><br />
<br /><br /><br />
          <div className="col-12">
            <p id='pp2'>Shop Popular Products
            </p>
            
            <div className="row">
              <div className="col-11">
            <p style={{color:"black" , fontSize:"14px"}}>Oversized T-shirts for Men<br /><br /></p>
            <p ><Link style={{textDecoration:"", color:"gray"}} to="/singleProduct">Price Men's Grey Eternity Graphic Printed Oversized T-shirt</Link></p>
            <p ><Link style={{textDecoration:"", color:"gray"}} to="/singleProduct">Men's Black The Panda Way Graphic Printed Oversized T-shirt</Link></p>
            <p ><Link style={{textDecoration:"", color:"gray"}} to="/singleProduct">Men's Purple Beast Within Graphic Printed Oversized T-shirt</Link></p>
            <p ><Link style={{textDecoration:"", color:"gray"}} to="/singleProduct">Men's Black Oversized T-shirt</Link></p>
            <p ><Link style={{textDecoration:"", color:"gray"}} to="/singleProduct">Men's White & Blue Partner In Crime Tie & Dye Oversized T-shirt	699</Link></p>
            <p ><Link style={{textDecoration:"", color:"gray"}} to="/singleProduct">Men's Black Space Adventure Graphic Printed Oversized T-shirt	599</Link></p>
            <p ><Link style={{textDecoration:"", color:"gray"}} to="/singleProduct">Men's Black The Boys Typographic Oversized T-shirt	607</Link></p>
            <p ><Link style={{textDecoration:"", color:"gray"}} to="/singleProduct">Men's Grey Wakanda Forever Graphic Printed Oversized T-shirt	739 </Link></p>
            <p ><Link style={{textDecoration:"", color:"gray"}} to="/singleProduct">Men's Blue Luffy Graphic Printed Oversized T-shirt	799</Link></p>
            <p ><Link style={{textDecoration:"", color:"gray"}} to="/singleProduct">Men's Blue Rick and Morty Graphic Printed Oversized T-shirt</Link></p>




            




              </div>
              <div className="col-1">
            <p style={{color:"#777677" , fontSize:"14px"}}>Price<br /><br /></p>
            <p>799</p>
            <p>599</p>
            <p>579</p>
            <p>699</p>
            <p>599</p>
            <p>607</p>
            <p>739</p>
            <p>799</p>
            <p>899</p>
            <p>699</p>


              </div>
            </div>

            
          </div>

        </div>
   </div>




 




     

      </div>




  


    




    </>
  );

}

export default MenProducts;



