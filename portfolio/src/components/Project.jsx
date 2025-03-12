import React from 'react'
import {Swiper} from 'swiper/react'
import { SwiperSlide } from 'swiper/react'

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
             <Swiper slidePerview={1.2} spaceBetWeen={20}
             breakpoints={{

             }}>
              <SwiperSlide>
                <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
                  <img src="pr-1.png" alt="" className='rounded-lg' />
                  <h3>Movie App</h3>
                </div>
              </SwiperSlide>
             </Swiper>
      </div>
     </div>

</section>

    </>
  )
}

export default Project

