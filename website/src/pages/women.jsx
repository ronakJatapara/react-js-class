import React from "react";
import "../components/home2.css"; // Custom CSS
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper components
import { Pagination, Autoplay } from "swiper/modules"; // Swiper modules
import { Link, useNavigate } from "react-router-dom";



function Women() {


   let navigate = useNavigate();

  const handleWomenProduct =()=>{
     navigate("/Women-product")
  }
   

  return (
  <>

    {/* categories start  */}




<div className="container-fluid">
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
        onClick={handleWomenProduct}
        centeredSlides={true} // Center the slides
        breakpoints={{
          0: { slidesPerView: 1 },    // 1 slide on very small screens
          576: { slidesPerView: 2 },  // 2 slides on small screens
          768: { slidesPerView: 3 },  // 3 slides on medium screens
          // 4 slides on large screens
        }}


      >
        
     
   
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/1x1-joggers-27jan-women-1737995148.jpg" alt="Slide 3"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/1x1-Women-Cargo-Pants-1737909555.jpg" alt="Slide 4"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/Buy-2-OS-Women-1x1-HC-Banner--1--1738056775.jpg" alt="Slide 2"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/Buy-2-CFT-Women-1x1-HC-Banner-1738078782.jpg" alt="Slide 3"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/1x1-jeans-women--1--1737613002.jpg" alt="Slide 4"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/1x1-pjs-women-1737699451.jpg" alt="Slide 2"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/Spiderman-DOTW-Women-1x1--1--1738049251.jpg" alt="Slide 3"  style={{height:'530px'}}/>
        </SwiperSlide>
        <SwiperSlide className="slider1" style={{height:"560px"}}>
          <img src="https://images.bewakoof.com/uploads/grid/app/1xa1-Limited-wintersteals-women-1737967796.jpg" alt="Slide 2"  style={{height:'530px'}}/>
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
        onClick={handleWomenProduct}
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
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Hoodies---Sweatshirts-Women--1--1738081015.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Jackets-women--1--1738081015.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Baggy-Joggers-Women-jpg-1738081016.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Graphic-Printed-OS-Tshirts-Women-1738081738.jpg",
          "https://images.bewakoof.com/uploads/grid/app/Boyfriend-T-Shirts-Women-1737820241.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Crop-Tops-Women-1738079489.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Pyjamas-Women--2--1738081016.jpg",
          "https://images.bewakoof.com/uploads/grid/app/548x669-Banners-Plus-Size-women--3--1738081737.jpg",

          
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
<div className="row row1" onClick={handleWomenProduct}>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-OS-T-Shirts-women-1735907920.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Hoodies-women-1735907956.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Boyfriend-Tee-Trending-Category-Icon--1--1736168508.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Full-Sleeve-Tshirts-Women--1--1735908076.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Dresses-women-1736156063.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Sweaters-Womenn--1--1736164892.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>

   

</div>



<div className="row row1 mt-3" onClick={handleWomenProduct}>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Sweatshirts-women-1735907987.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Jeans-women-1735907956.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Cargos-women-1735907986.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Joggers-women-1735907920.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-parachute-pants-women-1735907986.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Pyjamas-women-1735907955.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>

   

</div>




<div className="row row1 d-flex justify-content-center mt-3" onClick={handleWomenProduct}>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-1735908017.jpg")`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
  }}>
   
  </div>
  <div className="col-sm-12 col-md-6 col-lg-3 images" style={{backgroundImage:`URL("https://images.bewakoof.com/uploads/grid/app/444x666-Trending-Category-Icon-Co-ords-women-1735907955.jpg")`,
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
{/* men category ............................................... */}
</div>








      
  </>
  );
}

export default Women;







