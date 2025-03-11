import React from 'react'
import "../index.css"

function Home() {

 const Social = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter"

 ]

  return (
    <>
    <section
     id='home'
    className='min-h-screen flex py-10 md:flex-row flex-col items-center'  style={{height:"800px"}}>
   
   <div className='flex-1 flex items-center justify-center  h-full border border-red' style={{ width:"300px"}}>
    <img src="download2.webp" alt=""  className='md:w-11/12 h-full object-cover rounded-full' style={{height:"300px", width:"300px"}}/>
   </div>

   <div className='flex-1 text-white'>
    <div className='md:text-left text-center'>
        <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
            <span className='text-cyan-600 md:text-6xl text-5xl'>Hello!<br /></span>
            My Name is <span>Ronak Jatapara</span>
        </h1>
        <h4 className='ms:text-2xl  text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>Fullstack-developer</h4>
        <button className='btn-primary rounded-full mt-2' id='btn1'>Contact me</button>
        <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-3'>
            {
                Social.map(icon=>(
                    <div key={icon}
                    className='text-gray-600 hover:text-white cursor-pointer'
                    >
                        <ion-icon name={icon} className="text-white"></ion-icon>
                    </div>
                ))
            }
        </div>
    </div>
   </div>

    </section>
    </>
  )
}

export default Home
