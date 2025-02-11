

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import "./home.css";
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [getData, setGetData] = useState([]);

  let navigate = useNavigate();



  useEffect(() => {
    let datas = JSON.parse(localStorage.getItem("data"));
    
      setGetData(datas);
    
  }, []);



    const handleDelete = (dataId) =>{
     
// alert( dataId)

      let deleteData = getData.filter((item)=> item.id !== dataId)
      setGetData(deleteData)


   localStorage.setItem("data",JSON.stringify(deleteData))


      if(!dataId)
      {
        alert("error")
      }
      

   

    }

  return (
    <div className="container">
      <Swiper
        spaceBetween={20}
        slidesPerView={3} 
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          320: { slidesPerView: 1 }, 
          768: { slidesPerView: 2 }, 
          1024: { slidesPerView: 5 } 
        }}
      >
        {getData ? 
          getData.map((el, ind) => (
            <SwiperSlide  key={el.id} id=''>
              <div id="frame" className="col">
                <div className="img1" >
                  <img src={el.image} alt="" id="img" className="img-fluid" />
                </div>
              <div className="text border">
              <p id='p1'>{el.name}</p>
              <p id='p2'>{el.type}</p>
              </div>
              </div>
              <button className='position-absolute' id='btn2' onClick={()=>handleDelete(el.id)}>remove</button>
              <Link to={`/editform/${el.id}`}><button className='position-absolute ' id='btn3' >
              edit
              </button></Link>

            </SwiperSlide>
          )):<p>load</p>} 
      </Swiper>
    </div>
  );
}

export default Home;
