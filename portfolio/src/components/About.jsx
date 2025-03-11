import React from 'react'
import { Link } from 'react-router-dom'

function About() {

 const info = [ 
  {text:'Fresher in work' , count : "00"},
  {text:'Complate Project' , count : '24'},
  {text:'Companies Work' , count : "00"}

 ]

  return (
    <>
      <section id='about' className='py-10 text-white' style={{height:"800px"}}>
        <div className='text-center mt-8'>
          <h3 className='text-4xl font-semibold'>
            <br />
            About <span className='text-cyan-600'>Me</span>
          </h3>
          <p>My Introduction</p>
          <div className='flex md:flex-row flex-col-reverse items-center md:gap gap-12 px-10 max-w-6xl mx-auto'>
            <div>
              <div className='text-gray-300 my-3'>
                <p className='text-justify leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, accusantium minima quos repudiandae magni ipsa tempore libero cum ducimus a maxime quibusdam illum recusandae expedita necessitatibus id, sed laboriosam, magnam autem saepe minus. Voluptates, iure. Porro blanditiis, molestias voluptates atque aspernatur ea! Quibusdam nobis assumenda nemo nesciunt minima quia, laboriosam officiis ab tempora commodi. Voluptatem ?</p>
                <br /><br />
                 <div className='flex mt-10 items-center gap-20'>
                {
                  info.map(content=>(
                    <div key={content.text}>
                       <h3 className='md:text-4xl text-2xl font-semibold text-white' >
                        {content.count}
                        <span className='text-cyan-600'>+</span>{" "}
                       </h3>
                       <span>{content.text}</span>
                    </div>
                  ))
                }
               
                 </div>
                  <br />
                  <br />

                  <Link href="#" className="flex justify-center md:justify-start">
    <button 
        className="rounded-full w-[180px] h-[45px] bg-[#0092B8] text-white font-semibold"
        id="btn2"
    >
        Download CV
    </button>
</Link>



              </div>
            </div>

            <div className='flex-1 flex justify-center items-center'>
                 <div className='lg:w-96 h-full relative sm:w-10/12 max-w-sm aboutImg' style={{height:"500px" }}>
                  <img src='download3.webp' alt="" className='w-full object-cover bg-cyan-600 rounded' style={{height:"500px", width:"100%"}}/>
                 </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default About
