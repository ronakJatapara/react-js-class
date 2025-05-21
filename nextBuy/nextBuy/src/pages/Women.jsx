import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/navbar'
import Navbar2 from '../components/navbar2'
import Footer from '../components/Footer'

import "../style/home.css"
import "../style/women.css"

import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../feature/CrudSlice';
import SidebarFilter from '../components/SidebarFilter'; 
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



const [currentPage,setCurrentPage]  = useState(1)
const cardsPerPage = 12;

let indexOfLastCard = currentPage * cardsPerPage;
let indexOfFirstCard = indexOfLastCard-cardsPerPage
const currentCards = record.data.slice(indexOfFirstCard,indexOfLastCard)
const totalPages = Math.ceil(record.data.length / cardsPerPage)


// search filter sort //
const [searchTerm, setSearchTerm] = useState("");     // for search input
const [FilterTerm, setFilterTerm] = useState("all");  // for filter dropdown
const [sortTerm, setSortTerm] = useState("a to z");   // for sort dropdown
const [sortedData, setSortedData] = useState([]);
const [dataSearch, setDataSearch] = useState([]);     // final list to display after filtering


useEffect(() => {
  let updatedData = [...currentCards];


  // if (FilterTerm !== "all") {
  //   updatedData = updatedData.filter(item =>
  //     item.type.toLowerCase().includes(FilterTerm.toLowerCase())
  //   );
  // }


  if (searchTerm !== "") {
    updatedData = updatedData.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }


  if (sortTerm === "Alphabetically, A to Z") {
    updatedData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortTerm === "Alphabetically, Z to A") {
    updatedData.sort((a, b) => b.name.localeCompare(a.name));
  }



  setDataSearch(updatedData);
}, [searchTerm, currentCards, FilterTerm, sortTerm]);


     

  return (
    <>
      <Navbar/>
      


      <Navbar2/>


    <div className="mainDiv p-4">
     
     <div className="grid grid-cols-12 gap-4">
     <div className="col-span-12 md:col-span-3 pl-2 md:pl-6 pt-4" style={{marginLeft:"20px"}}>
      <br className="hidden md:block" /><br className="hidden md:block" />
  <div className="mb-6 group w-fit md:pl-[50px]">
    <h2 className="text-2xl md:text-3xl font-bold text-black">Filters</h2>
    <div className="h-[2px] w-16 bg-black mt-1 transition-all duration-300 group-hover:w-24"></div>
  </div>
  <br />

 <div className="mainBox w-full md:w-70 px-2 md:ml-[50px]">
   <SidebarFilter title="Availability" >
    <label className="block mb-2">
      <input type="checkbox" className="mr-2" />
      In Stock
    </label>
    <label className="block">
      <input type="checkbox" className="mr-2" />
      Out of Stock
    </label>
  </SidebarFilter>
 </div>
<br /><br />
  <div className="mainBox w-full md:w-70 px-2 md:ml-[50px]">
    <SidebarFilter title="Price">
      <br />
      <div className="flex flex-col md:flex-row items-center gap-4">
        <input type="text" name="price" className="h-12 w-full md:w-25 border border-gray-300 rounded-md text-center" placeholder='₹      0'/>
        
        <span className="md:px-4">to</span>
        <input type="text" name="price" className="h-12 w-full md:w-25 border border-gray-300 rounded-md text-center" placeholder='₹    22500'/>
      </div>
  </SidebarFilter>
  </div>
</div>

      <div className="col-span-12 md:col-span-9 px-2 md:px-4">
        <div className="flex flex-wrap gap-3 my-4" id='topBtn'>
          {[1, 2, 3, 4].map(num => (
            <button
              key={num}
              id='btns'
              onClick={() => setCardView(num)}
              className={`px-4 py-2 border rounded ${cardView === num ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
              {num}
            </button>
          ))}
        </div>
        <br className="hidden md:block" /><br className="hidden md:block" />
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-4 py-2 rounded w-full md:w-[300px]"
          />

          <select 
            onChange={(e) => setSortTerm(e.target.value)} 
            className="px-4 py-2 rounded w-full md:w-[200px]"
            style={{border: "none"}}
          >
            <option value="Alphabetically, A to Z">Alphabetically, A to Z</option>
            <option value="Alphabetically, Z to A">Alphabetically, Z to A</option>
            <option value="Price High to Low">Price High to Low</option>
            <option value="Price Low to High">Price Low to High</option>
          </select>
        </div>

        <div className="grid grid-cols-12">
        
          {dataSearch.map((el, i) => {
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

    <Footer></Footer>
 
    </>
  )
}

export default Women
