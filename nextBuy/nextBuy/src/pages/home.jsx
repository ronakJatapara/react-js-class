import React, { useRef, useEffect } from 'react';
import Navbar from '../components/navbar'
import Navbar2 from '../components/navbar2'
import "../style/home.css"

function Home() {
  const sliderRef = useRef();

  // Auto-scroll effect for the slider
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

      if (Math.round(slider.scrollLeft) >= Math.round(maxScrollLeft)) {
        // If at end, scroll back to start
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll forward
        slider.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 3000); // every 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  
  

  return (
    <>
      <Navbar />
      <Navbar2 />

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <div className="grid grid-cols-12">
            {/* First row of categories */}
            <div className="col-span-3 flex justify-center items-center flex-col mainCircle" id='circle1'>
              <div className="circle1 h-23 w-23 rounded-full">
                <div className="img1 h-23 w-23 rounded-full"></div>
              </div>
              <div className="text h-8 w-40 flex justify-center items-center">
                <p className='text-center' style={{ fontSize: "13px" }}>New Arrivals</p>
              </div>
            </div>

            <div className="col-span-3 flex justify-center items-center flex-col mainCircle" id='circle1'>
              <div className="circle2 h-23 w-23 rounded-full">
                <div className="img2 h-23 w-23 rounded-full"></div>
              </div>
              <div className="text h-8 w-40 flex justify-center items-center">
                <p className='text-center' style={{ fontSize: "13px" }}>Desi Diva Kurtis</p>
              </div>
            </div>

            <div className="col-span-3 flex justify-center items-center flex-col mainCircle" id='circle1'>
              <div className="circle3 h-23 w-23 rounded-full">
                <div className="img3 h-23 w-23 rounded-full"></div>
              </div>
              <div className="text h-8 w-40 flex justify-center items-center">
                <p className='text-center' style={{ fontSize: "13px" }}>Lahengas</p>
              </div>
            </div>

            <div className="col-span-3 flex justify-center items-center flex-col mainCircle" id='circle1'>
              <div className="circle4 h-23 w-23 rounded-full">
                <div className="img4 h-23 w-23 rounded-full"></div>
              </div>
              <div className="text h-8 w-40 flex justify-center items-center">
                <p className='text-center' style={{ fontSize: "13px" }}>Co-ord Sets</p>
              </div>
            </div>
          </div>

          <br /><br /><br />

          <div className="grid grid-cols-12 flex justify-evenly gap-3">
            {/* Second row of categories */}
            <div className="col-span-3 flex justify-center items-center flex-col mainCircle" id='circle1'>
              <div className="circle5 h-23 w-23 rounded-full">
                <div className="img5 h-23 w-23 rounded-full"></div>
              </div>
              <div className="text h-8 w-40 flex justify-center items-center">
                <p className='text-center' style={{ fontSize: "13px" }}> Women's western's clothing</p>
              </div>
            </div>

            <div className="col-span-3 flex justify-center items-center flex-col mainCircle" id='circle1'>
              <div className="circle6 h-23 w-23 rounded-full">
                <div className="img6 h-23 w-23 rounded-full"></div>
              </div>
              <div className="text h-8 w-40 flex justify-center items-center">
                <p className='text-center' style={{ fontSize: "13px" }}>sharees</p>
              </div>
            </div>

            <div className="col-span-3 flex justify-center items-center flex-col mainCircle" id='circle1'>
              <div className="circle7 h-23 w-23 rounded-full">
                <div className="img7 h-23 w-23 rounded-full"></div>
              </div>
              <div className="text h-8 w-40 flex justify-center items-center">
                <p className='text-center' style={{ fontSize: "13px" }}>Mens Fashion </p>
              </div>
            </div>

            <div className="col-span-3 flex justify-center items-center flex-col mainCircle" id='circle1'>
              <div className="circle8 h-23 w-23 rounded-full">
                <div className="img8 h-23 w-23 rounded-full"></div>
              </div>
              <div className="text h-8 w-40 flex justify-center items-center">
                <p className='text-center' style={{ fontSize: "13px" }}>Royal Vibe Watches</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5"></div>
      </div>

      <br /><br /><br /><br /><br /><br />

     
      <div className="relative px-4 py-4">
        {/* Scroll buttons */}
        <button
          onClick={() => sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' })}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          prev
        </button>

        <button
          onClick={() => sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' })}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          next
        </button>

        {/* Slider content */}
        <div
          className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide  "
          ref={sliderRef}
        >
          <div className="flex gap-8">
            <div className="box1 inline-block text-center">
              <p className='text-black' id='sliderTitle1'>SmartPhone Accessories</p>
              <div className="sliderImage1 mt-4">
                <img src="slider1.jpg" alt="" />
              </div>
              <p className='text-gray-500' id='sliderItem1'>25 Items</p>
            </div>

            <div className="box1 inline-block text-center">
              <p className='' id='sliderTitle1'>Sharees</p>
              <div className="sliderImage1 mt-4">
                <img src="slider2.webp" alt="" />
              </div>
              <p className='text-gray-500' id='sliderItem1'>158 Items</p>
            </div>

            <div className="box1 inline-block text-center">
              <p className='' id='sliderTitle1'>Luxury Vide Shoes</p>
              <div className="sliderImage1 mt-4">
                <img src="slider3.jpg" alt="" />
              </div>
              <p className='text-gray-500' id='sliderItem1'>23 Items</p>
            </div>

            <div className="box1 inline-block text-center">
              <p className='' id='sliderTitle1'>Royal Vide Watches</p>
              <div className="sliderImage1 mt-4">
                <img src="circle8.jpeg" alt="" />
              </div>
              <p className='text-gray-500' id='sliderItem1'>89 Items</p>
            </div>

            <div className="box1 inline-block text-center">
              <p className='' id='sliderTitle1'>Women Fashion</p>
              <div className="sliderImage1 mt-4">
                <img src="slider5.jpg" alt="" />
              </div>
              <p className='text-gray-500' id='sliderItem1'>173 Items</p>
            </div>
          </div>
        </div>
      </div>

      <br /><br /><br />
      <h2 className='text-4xl text-center'>Latest Fashion in Motion</h2>
      <br /><br /><br />


   <div className="womenSection flex justify-evenly">
    <div className="wSection1"></div>
    <div className="wSection1"></div>
    <div className="wSection1"></div>
    <div className="wSection1"></div>
    <div className="wSection1"></div>

   </div>



    
    </>
    
  );
}

export default Home;
