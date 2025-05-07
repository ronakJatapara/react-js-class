import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/navbar'
import Navbar2 from '../components/navbar2'
import "../style/home.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../feature/CrudSlice';
import { colors } from '@mui/material';

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


  let dispatch  = useDispatch()
  useEffect(()=>{
     dispatch(fetchApi())
  },[])
  
  const record =  useSelector((state)=>{
    return state.SliceReducer
  })

  const [visibleProducts,setVisibleProducts] = useState(4)




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


   <div className="womenSection ">
 
   <div className="grid grid-cols-12  grid place-items-center min-h-screen">
  {record.data.map((el, i) => {
    return (
      <div key={i} className="col-span-3  p-2 rounded shadow text-center" id='WomenSectionDetails'>
        <div className="womenSectionImage">
        <img src={el.image} alt={el.name} className="w-full h-40 object-cover " />
        <button id='imgBtn1'><i class="fa-regular fa-heart"></i>
        
        
        </button>
        <button id='imgBtn2'><i class="fa-solid fa-eye"></i></button>
        <button id='imgBtn3' className='rounded'>Quick Add</button>
        <button id="imgBtn4">{el.dis}</button>


        
        </div>
        <div className="womenSectionAllText">
        <p className="mt-2 text-bold" id='title'>{el.name}</p>
       <div className=" flex justify-center gap-4 " style={{marginTop:"10px"}}>
       <font id="price1" className="" style={{fontSize:"18px"}} >{el.rs}</font><font id="price2" style={{paddingTop:"2px",fontSize:"15px",textDecoration:"line-through"}} >{el.ors}</font>
       </div>
<div className="inStock flex justify-center gap-1 " style={{paddingTop:"10px"}}>
<font><i class="fa-solid fa-circle" style={{fontSize:"6px",color:"#479043"}}></i></font><font id="stock"  style={{paddingTop:"1px",color:"#479043"}}>{el.in}</font>

</div>

        </div>
      </div>
    );
  })}
</div>




   </div>

   <div className="seeMore flex justify-center">
    <button id='seeMore' className='rounded'>see More Product</button>

   </div>

   



    
    </>
    
  );
}

export default Home;





// import React, { useRef, useEffect, useState } from 'react';
// import Navbar from '../components/navbar';
// import Navbar2 from '../components/navbar2';
// import "../style/home.css";
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchApi } from '../feature/CrudSlice';

// function Home() {
//   const sliderRef = useRef();

//   // State to control how many products are visible
//   const [visibleProducts, setVisibleProducts] = useState(4);

//   // Auto-scroll effect for the slider
//   useEffect(() => {
//     const slider = sliderRef.current;
//     if (!slider) return;

//     const interval = setInterval(() => {
//       const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

//       if (Math.round(slider.scrollLeft) >= Math.round(maxScrollLeft)) {
//         // If at end, scroll back to start
//         slider.scrollTo({ left: 0, behavior: 'smooth' });
//       } else {
//         // Scroll forward
//         slider.scrollBy({ left: 300, behavior: 'smooth' });
//       }
//     }, 3000); // every 3 seconds

//     return () => clearInterval(interval); // cleanup on unmount
//   }, []);

//   let dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchApi());
//   }, [dispatch]);

//   const record = useSelector((state) => state.SliceReducer);

//   // Function to handle "See More" button click
//   const handleSeeMore = () => {
//     setVisibleProducts(visibleProducts + 4);
//   };

//   return (
//     <>
//       <Navbar />
//       <Navbar2 />

//       <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

//       <div className="grid grid-cols-12">
//         <div className="col-span-5">
//           {/* Your first grid code here */}
//         </div>

//         <div className="col-span-5"></div>
//       </div>

//       <br /><br /><br /><br /><br /><br />

//       <div className="relative px-4 py-4">
//         {/* Scroll buttons */}
//         <button
//           onClick={() => sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' })}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
//         >
//           prev
//         </button>

//         <button
//           onClick={() => sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' })}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
//         >
//           next
//         </button>

//         {/* Slider content */}
//         <div
//           className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide"
//           ref={sliderRef}
//         >
//           {/* Slider content here */}
//         </div>
//       </div>
//       <br /><br /><br />
//       <h2 className="text-4xl text-center">Latest Fashion in Motion</h2>
//       <br /><br /><br />

//       <div className="womenSection">
//         <div className="grid grid-cols-12 grid place-items-center min-h-screen">
//           {record.data.slice(0, visibleProducts).map((el, i) => {
//             return (
//               <div key={i} className="col-span-3 p-2 rounded shadow text-center" id="WomenSectionDetails">
//                 <div className="womenSectionImage">
//                   <img src={el.image} alt={el.name} className="w-full h-40 object-cover" />
//                   <button id="imgBtn1"><i className="fa-regular fa-heart"></i></button>
//                   <button id="imgBtn2"><i className="fa-solid fa-eye"></i></button>
//                   <button id="imgBtn3" className="rounded">Quick Add</button>
//                   <button id="imgBtn4">{el.dis}</button>
//                 </div>
//                 <div className="womenSectionAllText">
//                   <p className="mt-2 text-bold" id="title">{el.name}</p>
//                   <div className="flex justify-center gap-4" style={{ marginTop: "10px" }}>
//                     <font id="price1" className="" style={{ fontSize: "18px" }}>{el.rs}</font>
//                     <font id="price2" style={{ paddingTop: "2px", fontSize: "15px", textDecoration: "line-through" }}>{el.ors}</font>
//                   </div>
//                   <div className="inStock flex justify-center gap-1" style={{ paddingTop: "10px" }}>
//                     <font><i className="fa-solid fa-circle" style={{ fontSize: "6px", color: "#479043" }}></i></font>
//                     <font id="stock" style={{ paddingTop: "1px", color: "#479043" }}>{el.in}</font>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* See More Button */}
//       <div className="seeMore flex justify-center">
//         <button id="seeMore" className="rounded" onClick={handleSeeMore}>See More Products</button>
//       </div>
//     </>
//   );
// }

// export default Home;




