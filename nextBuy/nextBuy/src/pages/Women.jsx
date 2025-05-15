
import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/navbar'
import Navbar2 from '../components/navbar2'
import "../style/home.css"
import "../style/women.css"

import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../feature/CrudSlice';
// import React from 'react';


function Women() {
    let dispatch  = useDispatch()
    useEffect(()=>{
       dispatch(fetchApi())
    },[])
    
    const record =  useSelector((state)=>{
      return state.SliceReducer
    })


    const [selectedColors, setSelectedColors] = useState({});
    
    const getSelectColor = (el,i)=>{
        const selectedColor = selectedColors[i]
        switch(selectedColor)
        {
          case "Pink":
            return el.image;
    
          case "Black":
            return el.blackImage;
    
          case "Red":
            return el.redImage;
           
          case "Yellow":
            return el.yellowImage;
            
            case "White":
              return el.whiteImage;
      
            case "Orange":
              return el.orangeImage;
      
            case "Brandy Punch":
              return el.brandyImage;
    
              default:
                return el.image
        }
    }
    
     const [dressType,setDressType] = useState({})
    
     const getDressType = (el,i)=>{
        const Type = dressType[i]
    
    
        switch(Type)
        {
          case "Horizon":
            return el.image;
            case "BoysenBerry":
            return el.boysenberry;
            
            case "Indian Yellow":
            return el.indianYellow;
    
            default:
              return el.image
            
        }
     }


     const [visible,setVisible] = useState(4)    // for extra image add
     const [cardView,setCardView] = useState(4)
     

     const getColClass = () => {
  if (cardView === 2) return 'col-span-6';   // 2 cards per row
  if (cardView === 3) return 'col-span-4';   // 3 cards per row
  return 'col-span-3';                          // default 4 cards per row
};

// const [currentPage,setCurrentPage] = useState(1)
// const cardsPerPage = 12

// const indexOfLastCard = currentPage * cardsPerPage;
// const indexOfFirstCard = indexOfLastCard - cardsPerPage;
// const currentCards = record.data.slice(indexOfFirstCard, indexOfLastCard);
//  const totalPages = Math.ceil(record.data.length / cardsPerPage);

const [currentPage,setCurrentPage]  = useState(1)
const cardsPerPage = 12;

// const totalItems = data.length;
let indexOfLastCard = currentPage * cardsPerPage;
let indexOfFirstCard = indexOfLastCard-cardsPerPage
const currentCards = record.data.slice(indexOfFirstCard,indexOfLastCard)
const totalPages = Math.ceil(record.data.length / cardsPerPage)




     

  return (
    <>
      <Navbar/>
      


      <Navbar2/>


    <div className="mainDiv">
     
     <div className="grid grid-cols-12 ">
      <div className="col-span-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit illo suscipit dignissimos quae fugiat repellendus enim quod quam animi excepturi? Distinctio fuga et iure ea harum numquam soluta maxime ducimus.
      </div>
      <div className="col-span-9">

                 <div className="flex gap-3 my-4" id='topBtn'>
  {[1, 2, 3, 4].map(num => (
    <button
      key={num}
      id='btns'
      onClick={() => setCardView(num)} // Jo button dabayega, vo state change karega
      className={`px-4 py-2 border rounded ${cardView === num ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      {num}
    </button>
  ))}
</div>

<br /><br />

        <div className="grid grid-cols-12">
         
          {currentCards.map((el, i) => {
    return (
      <div key={i} className={` ${getColClass()}  p-2 rounded shadow text-center`}id='WomenSectionDetails'>
        <div className="womenSectionImage2">
        {el.mainData && <img src={el.image} alt=""  className="w-full h-40 object-cover" />}

        {el.moreData &&    <img src={getSelectColor(el,i)} alt="" className="w-full h-40 object-cover"/>}
         
        {el.moreData2 && <img src={getDressType(el,i)} alt="" className="w-full h-40 object-cover" /> } 
        <button id='imgBtn1'><i className="fa-regular fa-heart"></i>
        
        
        </button>
        <button id='imgBtn2'><i className="fa-solid fa-eye"></i></button>
        <button id='imgBtn3' className='rounded'>Quick Add</button>
        <button id="imgBtn4">{el.dis}</button>


        
        </div>
        <div className="womenSectionAllText">
        <p className="mt-2 text-bold" id='title'>{el.name}</p>
       <div className=" flex justify-center gap-4 " style={{marginTop:"10px"}}>
       <font id="price1" className="" style={{fontSize:"18px"}} >{el.rs}</font><font id="price2" style={{paddingTop:"2px",fontSize:"15px",textDecoration:"line-through"}} >{el.ors}</font>
       </div>
       {el.moreData &&
  <select name=""  onChange={(e)=>setSelectedColors({[i]:e.target.value})} className='border border-gray-200 rounded'  id="select" >
  <option value="Pink">Pink</option>
  <option value="Black">Black</option>
  <option value="Red">Red</option>
  <option value="Yellow">Yellow</option>
  <option value="White">White</option>
  <option value="Orange">Orange</option>
  <option value="Brandy Punch">Brandy Punch</option>
</select>
    
}

{el.moreData2 && <select name='' onChange={(e)=> setDressType({[i]:e.target.value}) } className='border border-gray-200 rounded' id="select">
  <option value="Horizon">Horizon</option>
  <option value="BoysenBerry">Boysenberry</option>
  <option value="Indian Yellow">Indian Yellow</option>

</select> }


<div className="inStock flex justify-center gap-1 " style={{paddingTop:"10px"}}>
<font><i className="fa-solid fa-circle" style={{fontSize:"6px",color:"#479043"}}></i></font><font id="stock"  style={{paddingTop:"1px",color:"#479043"}}>{el.in}</font>

</div>


        </div>
      </div>
    );
  })}


   




        </div>
        <br /><br />

          {/* Custom Pagination Buttons with Dots */}
<div className="flex justify-evenly items-center gap-2 my-6" id="allBtns">
  {/* Prev Button */}
  <button
  id='prevBtns'
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className="px-3 py-1 border rounded bg-gray-200"
  >
    {/* Prev */}
    <i class="fa-solid fa-backward"></i>
  </button>

  {(() => {
    const pages = [];

    // Always show first page
    pages.push(
      <button
      id='fBtns'
        key={1}
        onClick={() => setCurrentPage(1)}
        className={`px-3 py-1 border rounded ${currentPage === 1 ? 'bg-black text-white' : ''}`}
      >
        1
      </button>
    );

    // Show dots if currentPage > 4
    if (currentPage > 4) {
      pages.push(<span key="startDots" className="px-2">...</span>);
    }

    // Show middle three pages: currentPage - 1, currentPage, currentPage + 1
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
      id='fBtns'

          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 border rounded ${currentPage === i ? 'bg-black text-white' : ''}`}
        >
          {i}
        </button>
      );
    }

    // Show dots if currentPage < totalPages - 3
    if (currentPage < totalPages - 3) {
      pages.push(<span key="endDots" className="px-2">...</span>);
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(
        <button
      id='fBtns'

          key={totalPages}
          onClick={() => setCurrentPage(totalPages)}
          className={`px-3 py-1 border rounded ${currentPage === totalPages ? 'bg-black text-white' : ''}`}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  })()}

  {/* Next Button */}
  <button
  id='nextBtn'
    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
    className="px-3 py-1 border rounded bg-gray-200"
  >
    {/* Next */}
    <i class="fa-solid fa-forward"></i>
  </button>
</div>
<br /><br />

 
      </div>
     </div>

    </div>
 
    </>
  )
}

export default Women
