import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // ✅ Correct Import
import 'swiper/css';
import 'swiper/css/pagination';


function Project() {
  return (
    <>
    
<section id='projects' className='py-10 text-white'>
<div className='text-center'>
        <h3 className='text-4xl font-semibold'>
            My <span className='text-cyan-600'> Projects</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>My awesome works</p>
     </div>
     <br />

     <div className='flex max-6xl px-5 mx-auto items-center relative'>
      <div className='lg:w-2/3 w-full'>
<Swiper 
  style={{ height: "300px", width: "80%" }} // Adjusting overall Swiper size
  slidesPerView={1.2} 
  spaceBetween={15}
  breakpoints={{
    768: { slidesPerView: 3 },
  }} 
  loop={true} 
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, 
  }}
  pagination={{ clickable: true }}
  modules={[Pagination, Autoplay]}
>
  <SwiperSlide>
    <div className="h-[280px] w-[250px] p-4 bg-[#2c3e50] rounded-lg shadow-md flex flex-col">
      {/* Image Wrapper for Scrolling Effect */}
      <div className="h-[150px] w-full overflow-hidden rounded-md relative">
        <img 
          src="pr-1.png" 
          alt="Project 1" 
          className="w-full h-auto object-cover transition-transform duration-[5000ms] ease-in-out hover:translate-y-[-100%]" 
        />
      </div>
      <h3 className="text-lg text-white mt-3 font-semibold">Jewellery</h3>
      <div className="flex gap-2 mt-2">
        <Link className="text-cyan-600 bg-gray-900 px-3 py-1 rounded-md text-sm">Github</Link>
        <Link className="text-cyan-600 bg-gray-900 px-3 py-1 rounded-md text-sm">Live Demo</Link>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="h-[280px] w-[250px] p-4 bg-[#2c3e50] rounded-lg shadow-md flex flex-col">
      {/* Image Wrapper for Scrolling Effect */}
      <div className="h-[150px] w-full overflow-hidden rounded-md relative">
        <img 
          src="pr-2.png" 
          alt="Project 1" 
          className="w-full h-auto object-cover transition-transform duration-[5000ms] ease-in-out hover:translate-y-[-100%]" 
        />
      </div>
      <h3 className="text-lg text-white mt-3 font-semibold">Jewellery</h3>
      <div className="flex gap-2 mt-2">
        <Link className="text-cyan-600 bg-gray-900 px-3 py-1 rounded-md text-sm">Github</Link>
        <Link className="text-cyan-600 bg-gray-900 px-3 py-1 rounded-md text-sm">Live Demo</Link>
      </div>
    </div>
  </SwiperSlide>


  <SwiperSlide>
    <div className="h-[280px] w-[250px] p-4 bg-[#2c3e50] rounded-lg shadow-md flex flex-col">
      {/* Image Wrapper for Scrolling Effect */}
      <div className="h-[150px] w-full overflow-hidden rounded-md relative">
        <img 
          src="pr-3.png" 
          alt="Project 1" 
          className="w-full h-auto object-cover transition-transform duration-[5000ms] ease-in-out hover:translate-y-[-100%]" 
        />
      </div>
      <h3 className="text-lg text-white mt-3 font-semibold">Jewellery</h3>
      <div className="flex gap-2 mt-2">
        <Link className="text-cyan-600 bg-gray-900 px-3 py-1 rounded-md text-sm">Github</Link>
        <Link className="text-cyan-600 bg-gray-900 px-3 py-1 rounded-md text-sm">Live Demo</Link>
      </div>
    </div>
  </SwiperSlide>


  <SwiperSlide>
    <div className="h-[280px] w-[250px] p-4 bg-[#2c3e50] rounded-lg shadow-md flex flex-col">
      {/* Image Wrapper for Scrolling Effect */}
      <div className="h-[150px] w-full overflow-hidden rounded-md relative">
        <img 
          src="pr-3.png" 
          alt="Project 1" 
          className="w-full h-auto object-cover transition-transform duration-[5000ms] ease-in-out hover:translate-y-[-100%]" 
        />
      </div>
      <h3 className="text-lg text-white mt-3 font-semibold">Jewellery</h3>
      <div className="flex gap-2 mt-2">
        <Link className="text-cyan-600 bg-gray-900 px-3 py-1 rounded-md text-sm">Github</Link>
        <Link className="text-cyan-600 bg-gray-900 px-3 py-1 rounded-md text-sm">Live Demo</Link>
      </div>
    </div>
  </SwiperSlide>

 
</Swiper>
      </div>

      <div>
        
      </div>
     </div>

</section>

    </>
  )
}

export default Project

