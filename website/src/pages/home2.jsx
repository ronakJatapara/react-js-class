import React from "react";
import "../components/home2.css"; // Custom CSS
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper components
import { Pagination, Autoplay } from "swiper/modules"; // Swiper modules
import { Link, useNavigate } from "react-router-dom";

// Use Swiper modules
// Swiper.use([Navigation, Pagination, Autoplay]);
// import { Navigation, Pagination, Autoplay } from "swiper";
// SwiperCore.use([Navigation, Pagination, Autoplay]);

function Slider() {

   let navigateMen = useNavigate()
   let navigateWomen = useNavigate()


   const handleMenProduct = () =>{
    navigateMen("/men-product")
   }
   const handleWomenProduct=()=>{
    navigateWomen("/Women-product")
   }

  return (
  <>

    {/* categories start  */}

 
   <div className="container">
   <div className="row position-relative">
        <div className="col-12 d-flex justify-content-evenly align-items-center pt-2" style={{position:"sticky" , top:"80px"}} >
         <Link to={"/men"}> <p id="p5" style={{ cursor: "pointer", color: "black"}}> MEN</p></Link>
        <Link to={"/women"}>  <p id="p5" style={{cursor:"pointer", color: "black"}}>WOMEN</p></Link>
          <p id="p5" style={{cursor:"pointer"}}>WINTERWEAR</p>
          <p id="p5" style={{cursor:"pointer"}}>PLUS SIZE</p>
          <p id="p5" style={{cursor:"pointer"}}>ACCESSORIES</p>
          <p id="p5" style={{cursor:"pointer"}}>OFFICIAL MERCH</p>
          <p id="p5" style={{cursor:"pointer"}}>SNEAKERS</p>
          <p id="p5" style={{cursor:"pointer"}}>BEWAKOOF AIR</p>
          <p id="p5" style={{cursor:"pointer"}}>HEAVY DUTY</p>
          <p id="p5" style={{cursor:"pointer"}}>CUSTOMIZATION</p>
  
        </div>
      </div>
   </div>


    <div className="swiper-container">
      <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{clickable:true}}
        spaceBetween={10} // Space between slides
        slidesPerView={3} // Show 3 slides at once
        loop={true} // Enable loop
        autoplay={{
          delay: 3000, // Auto-slide interval
        }}
        centeredSlides={true} // Center the slides
        breakpoints={{
          0: { slidesPerView: 1 },    // 1 slide on very small screens
          576: { slidesPerView: 2 },  // 2 slides on small screens
          768: { slidesPerView: 3 },  // 3 slides on medium screens
          // 4 slides on large screens
        }}


      >
        
     
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/1x1-Limited-wintersteals-common-1737967799.jpg" alt="Slide 2"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/1x1-joggers-common--2--1737699398.jpg" alt="Slide 3"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/1x1-Common-Cargo-Pants-1737911091.jpg" alt="Slide 4"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/Buy-2-OS-Common-1x1-HC-Banner-1737699399.jpg" alt="Slide 2"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/Buy-2-CFT-Common-1x1-HC-Banner-1737699396.jpg" alt="Slide 3"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/1x1-jeans-common--3--1737604909.jpg" alt="Slide 4"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/1x1-pjs-common--2--1737699397.jpg" alt="Slide 2"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/Spiderman-DOTW-Common-1x1--1--1737977765.jpg" alt="Slide 3"  style={{height:'530px'}}/>
        </SwiperSlide>
       
    
      </Swiper>

      {/* Custom pagination */}
      <div className="swiper-pagination"></div>
    </div>



<p className="text-center fs-4 pt-5">Latest Collections</p>

    <div className="swiper-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={10} // Space between slides
        slidesPerView={4} // Show 4 slides at once
        loop={true} // Enable loop
        autoplay={{
          delay: 3000, // Auto-slide interval
        }}
        centeredSlides={false} // Don't center slides
        breakpoints={{
          0: { slidesPerView: 1 },    // 1 slide on very small screens
          576: { slidesPerView: 2 },  // 2 slides on small screens
          768: { slidesPerView: 3 },  // 3 slides on medium screens
          1024: { slidesPerView: 4 }, // 4 slides on large screens
        }}
      >
        {/* Swiper Slides */}
        {[
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Hoodies---Sweatshirts-Common-1738079273.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Jackets-Common-1738079272.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Baggy-Joggers-Common-1738079271.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Graphic-Printed-OS-Tshirts-Common-1738079271.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Pyjamas-Common-1738079491.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Shirts-men-1738079490.jpg",
          "https://images.bewakoof.com/uploads/grid/app/Boyfriend-T-Shirts-Women-1737828271.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Crop-Tops-Women-1738079489.jpg",
          // "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Plus-Size-Common-1738079490.jpg",
        ].map((image, index) => (
          <SwiperSlide key={index} className="slider2" style={{ height: "520px" }}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ height: "480px", width: "100%" }} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination */}
      <div className="swiper-pagination"></div>
    </div>


{/* men category ............................................... */}
<p className="text-center fs-4 pt-3">Shop by Category- Men</p>
<div className="container-fluid">
<div className="row row1" onClick={handleMenProduct}>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-OS-T-Shirts-1735907878.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Hoodies-1735907894.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Joggers-1735907896.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Jeans-1735907918.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Classic-Fit-T-Shirts-1735907878.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Men--1--1735908077.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>

   

</div>



<div className="row row1 mt-3" onClick={handleMenProduct}>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Sweatshirts-1735907896.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Msite-Trending-Category-Icon-joggers--2--1736157469.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Sweaters--1--1735908076.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon--2--1736160194.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Pyjamas-1735907919.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-Jackets-Trending-Category-Icon-1736162737.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>

   

</div>




<div className="row row1 d-flex justify-content-center mt-3" onClick={handleMenProduct}>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Full-Sleeve-T-shirts--1--1735908017.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-Sneakers-Trending-Category-Icon-Plus-size-1737372173.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-Trending-Category-Icon-plus-size-1737365777.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon--3--1737370241.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>


   

</div>
</div>
{/* men category ............................................... */}



{/* Women category ............................................... */}
<p className="text-center fs-4 pt-3">Shop by Category- Women</p>
<div className="container-fluid">
<div className="row row2" onClick={handleWomenProduct}>
  <div className="col-sm-12 col-md-6 col-lg-3 images2" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-OS-T-Shirts-women-1735907920.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images2" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Hoodies-women-1735907956.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images2" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Jeans-women-1735907956.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images2" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Cargos-women-1735907986.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images2" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Cargos-women-1735907986.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images2" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Full-Sleeve-Tshirts-Women--1--1735908076.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>

   

</div>



<div className="row row2 mt-3" onClick={handleWomenProduct}>
  <div className="col-sm-12 col-md-6 col-lg-3 images2" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Sweatshirts-women-1735907987.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images2" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-parachute-pants-women-1735907986.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images2" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Joggers-women-1735907920.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images2" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Sweaters-Womenn--1--1736164892.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images2" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Pyjamas-women-1735907955.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images2" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Co-ords-women-1735907955.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>

   

</div>




<div className="row row2 d-flex justify-content-center mt-3" onClick={handleWomenProduct}>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Dresses-women-1736156063.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Jackets-women-1735907987.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-1735908017.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-Trending-Category-Icon-1736162738.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>

  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Desktop-women-Trending-Category-Icon-Plus-size--1--1737366437.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>

  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon--3--1737370241.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>


   

</div>
</div>
{/* Women category ............................................... */}




      
  </>
  );
}

export default Slider;







