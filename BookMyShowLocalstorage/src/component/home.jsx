

  import React, { useEffect, useState } from 'react';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import { Navigation, Pagination } from 'swiper/modules';
  import "./home.css";
  import { Link, useNavigate } from 'react-router-dom';
  import Menu from './menu';
  import Slider from './slider';
  import Footer from './footer';

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

    <>
    <Menu></Menu>
    <Slider></Slider>

  <br />
  <div className="container">

    <h4>Recommended Movies</h4>
    <Swiper
      spaceBetween={20}
      slidesPerView={3} 
      navigation
      // pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      breakpoints={{
        320: { slidesPerView: 1 }, 
        768: { slidesPerView: 2 }, 
        1024: { slidesPerView: 5 } ,
      
      }}
    >
      {getData ? 
        getData.map((el, ind) => (
          <SwiperSlide  key={el.id} id='swiper'>
            <div id="frame" className="col">
            <div 
  className="img1" 
  style={{ 
    backgroundColor: "black", 
    backgroundImage: `url(${el.image})`,  // Add image as background
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay"
  }} 
>
  <img src={el.image} alt="" id="img" className="img-fluid" />
</div>

            <div className="text">
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



<br /><br />
<br /><br />
  
  {/* <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" alt="" style={{width:"100%"}} /> */}
 

  </div>
  <Footer></Footer>
    </>
    );
  }

  export default Home;
