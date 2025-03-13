import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // ✅ Correct Import
import 'swiper/css';
import 'swiper/css/pagination';


function Project() {

const projects = [
  {img:'pr-1.png',name:"jewellery", github_link:'https://github.com/ronakJatapara/react-js-class/tree/main/w-5' , live_link:'file:///C:/Users/ronak/OneDrive/Desktop/coding/react-js-class/w-5/index.html'},
  {img:'pr-2.png',name:"weapons", github_link:'https://github.com/ronakJatapara/react-js-class/tree/main/w-6' , live_link:'file:///C:/Users/ronak/OneDrive/Desktop/coding/react-js-class/w-6/index.html'},
  {img:'pr-3.png',name:"purses", github_link:'https://github.com/ronakJatapara/react-js-class/tree/main/w-14' , live_link:'file:///C:/Users/ronak/OneDrive/Desktop/coding/react-js-class/w-14/index.html'},

]


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
{
    projects.map((project_info,i)=>(
      <SwiperSlide>
      <div className="h-[280px] w-[250px] p-4 bg-[#2c3e50] rounded-lg shadow-md flex flex-col">
      
        <div className="h-[150px] w-full overflow-hidden rounded-md relative">
          <img 
            src={project_info.img}
            alt="Project 1" 
            className="w-full h-auto object-cover transition-transform duration-[5000ms] ease-in-out hover:translate-y-[-100%]" 
          />
        </div>
        
        <h3 className="text-lg text-white mt-3 font-semibold">{project_info.name}</h3>
        
        <div className="flex gap-2 mt-2">
          {/* GitHub Link */}
          <a
            className="text-cyan-600 bg-gray-900 px-3 py-1 rounded-md text-sm"
            href={project_info.github_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
    
          {/* Live Demo Link */}
          <a
            className="text-cyan-600 bg-gray-900 px-3 py-1 rounded-md text-sm"
            href="http://127.0.0.1:5500/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
        
      </div>
    </SwiperSlide>
    
  
  
    )) 
}


</Swiper>
      </div>

      <div className='lg:block hidden'>
        <img src="download(3).png" alt=""  style={{height:"400px"}}/>
      </div>
     </div>

</section>

    </>
  )
}

export default Project

