import React from "react";
import "../components/slider.css"; // Custom CSS
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper components
import { Pagination, Autoplay } from "swiper/modules"; // Swiper modules

// Use Swiper modules
// Swiper.use([Navigation, Pagination, Autoplay]);
// import { Navigation, Pagination, Autoplay } from "swiper";
// SwiperCore.use([Navigation, Pagination, Autoplay]);

function Slider() {
  return (
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
  );
}

export default Slider;
