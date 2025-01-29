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

function Men() {


   let navigate = useNavigate();

  const handleMenProduct =()=>{
     navigate("/men-product")
  }
   

  return (
  <>

    {/* categories start  */}




    <div className="swiper-container" >
      <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{clickable:true}}
        spaceBetween={10} // Space between slides
        slidesPerView={3} // Show 3 slides at once
        loop={true} // Enable loop
        autoplay={{
          delay: 2000, // Auto-slide interval
          
        }}
        onClick={handleMenProduct}
        centeredSlides={true} // Center the slides
        breakpoints={{
          0: { slidesPerView: 1 },    // 1 slide on very small screens
          576: { slidesPerView: 2 },  // 2 slides on small screens
          768: { slidesPerView: 3 },  // 3 slides on medium screens
          // 4 slides on large screens
        }}


      >
        
     
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/1x1-Limited-wintersteals-men-1737967797.jpg" alt="Slide 2"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/1x1-joggers-27jan-men-1737995147.jpg" alt="Slide 3"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/Doctor-Doom-1x1-HC-Banner-1738079034.jpg" alt="Slide 4"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/1x1-Men-Cargo-Pants-1737909554.jpg" alt="Slide 2"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/Buy-2-OS-Men-1x1-HC-Banner--1--1738056775.jpg" alt="Slide 3"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/Buy2-CFT-999-1X1-Men-Banner-1737305226.jpg" alt="Slide 4"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/1x1-jeans-men--1--1737613251.jpg" alt="Slide 2"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/1x1-PJs-men-1736489199.jpg" alt="Slide 3"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/Spiderman-DOTW-Men-1x1--1--1738049250.jpg" alt="Slide 3"  style={{height:'530px'}}/>
        </SwiperSlide>
       
    
      </Swiper>

      {/* Custom pagination */}
      <div className="swiper-pagination"></div>
    </div>



<p className="text-center fs-4 pt-5">Latest Collections</p>

    <div className="swiper-container" >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={10} // Space between slides
        slidesPerView={4} // Show 4 slides at once
        loop={true} // Enable loop
        autoplay={{
          delay: 3000, // Auto-slide interval
        }}
        onClick={handleMenProduct}
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
          "http://images.bewakoof.com/uploads/grid/app/548x669-Banners-Hoodies---Sweatshirts-Men--1--1738080436.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Jackets-men--1--1738080437.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Baggy-Joggers-Men-jpg-1738080435.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Graphic-Printed-OS-Tshirts-Men-1738080349.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Shirts-men--1--1738080348.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Pyjamas-Men--2--1738080349.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Plus-Size-men--3--1738080348.jpg",
          
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








      
  </>
  );
}

export default Men;







