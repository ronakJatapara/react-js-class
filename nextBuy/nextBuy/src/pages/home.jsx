import React from 'react'
import Navbar from '../components/navbar'
import Navbar2 from '../components/navbar2'
import "../style/home.css"

function Home() {
  return (
    <>
      <Navbar />
      <Navbar2 />

      {/* <Options></Options> */}

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div className="grid grid-cols-12">
        <div className="col-span-4  " id='fMain'>
          <div className="grid grid-cols-12">
            
            <div className="col-span-3 flex justify-center items-center flex-col" id='circle1'>
              <div className="circle1 h-23 w-23 rounded-full">
                <div className="img1 h-23 w-23 rounded-full"></div>
              </div>
              <div className="text h-8 w-40 flex justify-center items-center">
                <p className='text-center' style={{ fontSize: "13px" }}>New Arrivals</p>
              </div>
            </div>


            <div className="col-span-3 flex justify-center items-center flex-col" id='circle1'>
              <div className="circle2 h-23 w-23 rounded-full">
                <div className="img2 h-23 w-23 rounded-full"></div>
              </div>
              <div className="text h-8 w-40 flex justify-center items-center">
                <p className='text-center' style={{ fontSize: "13px" }}>Desi Diva Kurtis</p>
              </div>
            </div>

            <div className="col-span-3 flex justify-center items-center flex-col" id='circle1'>
              <div className="circle3 h-23 w-23 rounded-full">
                <div className="img3 h-23 w-23 rounded-full"></div>
              </div>
              <div className="text h-8 w-40 flex justify-center items-center">
                <p className='text-center' style={{ fontSize: "13px" }}>Lahengas</p>
              </div>
            </div>

            <div className="col-span-3 flex justify-center items-center flex-col" id='circle1'>
              <div className="circle4 h-23 w-23 rounded-full">
                <div className="img4 h-23 w-23 rounded-full"></div>
              </div>
              <div className="text h-8 w-40 flex justify-center items-center">
                <p className='text-center' style={{ fontSize: "13px" }}>Co-ord Sets</p>
              </div>
            </div>

            

          </div>

           <br /><br /><br />

          <div className="grid grid-cols-12">
            
            <div className="col-span-3 flex justify-center items-center flex-col" id='circle1'>
              <div className="circle5 h-23 w-23 rounded-full">
                <div className="img5 h-23 w-23 rounded-full"></div>

              </div>
              <div className="text h-8 w-40 flex justify-center items-center">
                <p className='text-center' style={{ fontSize: "13px" }}> Sharees</p>
              </div>
            </div>

            <div className="col-span-3 flex justify-center items-center flex-col" id='circle1'>
              <div className="circle6 h-23 w-23 rounded-full">
                <div className="img6 h-23 w-23 rounded-full"></div>
              </div>
              <div className="text h-8 w-40 flex justify-center items-center">
                <p className='text-center' style={{ fontSize: "13px" }}>Women's Western Clothing </p>
              </div>
            </div>

            <div className="col-span-3 flex justify-center items-center flex-col" id='circle1'>
              <div className="circle7 h-23 w-23 rounded-full">
                <div className="img7 h-23 w-23 rounded-full"></div>
              </div>
              <div className="text h-8 w-40 flex justify-center items-center">
                <p className='text-center' style={{ fontSize: "13px" }}>Mens Fashion </p>
              </div>
            </div>

            <div className="col-span-3 flex justify-center items-center flex-col" id='circle1'>
              <div className="circle8 h-23 w-23 rounded-full">
                <div className="img8 h-23 w-23 rounded-full"></div>
              </div>
              <div className="text h-8 w-40 flex justify-center items-center">
                <p className='text-center' style={{ fontSize: "13px" }}>Royal Vibe Watches</p>
              </div>
            </div>

          </div>
        </div>

        <div className="col-span-6"></div>
      </div>
    </>
  )
}

export default Home
