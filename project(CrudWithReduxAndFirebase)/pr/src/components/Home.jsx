import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllData } from '../feature/CrudSlice';
import "../css/home.css"

function Home() {

  let dispatch = useDispatch();
    

  let datas = useSelector((state) => state.crudslice.data);


  console.log(datas);
  


useEffect(()=>{
   dispatch(fetchAllData())
},[])


   


  return (
      <>
      <Navbar/>
      
      <br />
      <br />
      <br />
      <br />
     


    


<div className="container">

      {
       datas ? (
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1">
          {datas.map((el, ind) => (
        <div key={ind} className="main">

         <div className="img">
                  <img src={el.url} alt="" className='img-fluid' style={{width:"100%"}} />
         </div>

         <div className="text">
          <p className='font-bold ps-1'>{el.title}</p>
          <p className='ps-1'>Language : {el.language}</p>
          <p className='font-bold ps-1'>{el.type}</p>
          <p className='font-bold ps-1 pb-3'>Realease Year : {el.year}</p>

         </div>

        </div>
      ))}
        </div>
       ):(
        <p>Loading.....</p>
       )
      }

</div>
     






      </>
  )
}

export default Home








  