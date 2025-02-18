

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

  // searching code //

  const [searchTerm, setSearchTerm] = useState("")
  const [FilterTerm, setFilterTerm] = useState("all")


  const [getData, setGetData] = useState(() => JSON.parse(localStorage.getItem("data")) || []);

const handleChange =()=>{
    
const [store, setStore] = useState(getData);

useEffect(()=>{
  
  if(searchTerm == "")
  {
    setStore(getData)
  }
  else
  {
    let data = store.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setStore(data)
  }
  
},[searchTerm,getData])
}


  let navigate = useNavigate()

  const [getData2, setgetData2] = useState([]);

  let navigate2 = useNavigate();


  useEffect(() => {
    let datas = JSON.parse(localStorage.getItem("data"));

    setgetData2(datas);

  }, []);



  const handleDelete = (dataId) => {

    // alert( dataId)

    let deleteData = getData2.filter((item) => item.id !== dataId)
    setgetData2(deleteData)


    localStorage.setItem("data", JSON.stringify(deleteData))


    if (!dataId) {
      alert("error")
    }




  }

  return (

    <>


      <div>
        <div className="container-fluid  " style={{ backgroundColor: "white" }}>

          <div className="row border border-dark">
            <div className="col-2  d-flex justify-content-end align-items-center p-3">


              <img src="download.svg" alt="" />

            </div>
            <div className="col-6  position-relative d-flex justify-content-start align-items-center">


              <input type="text" name="" id="input1" className='ms-4' placeholder='Search for Movies , Events,Plays,Sport and Activities' onChange={(e) =>handleChange(e)} />


              <i class="fa-solid fa-magnifying-glass"></i>

            </div>
            <div className="col-3  d-flex justify-content-evenly align-items-center">

              <select name="" id="" onChange={(e) => setFilterTerm(e.target.value)}>
                <option value="all">All</option>
                <option value="Action">Action</option>
                <option value="drama">drama</option>
                <option value="romentic">romentic</option>
                <option value="historical">historical</option>

              </select>

              <button className='p-1 btn btn-danger' onClick={() => navigate2("/form")}>Add Movie</button>
              <i class="fa-solid fa-bars"></i>

            </div>
          </div>

        </div>
      </div>





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
            1024: { slidesPerView: 5 },

          }}
        >
          {getData ?
            getData.map((el, ind) => (
              <SwiperSlide key={el.id} id='swiper'>
                <div id="frame" className="col">
                  <div
                    className="img1"
                
                  >
                    <img src={el.image} alt="" id="img" className="img-fluid" />
                  </div>

                  <div className="text">
                    <p id='p1'>{el.name}</p>
                    <p id='p2'>{el.type}</p>
                  </div>
                </div>
                <button className='position-absolute' id='btn2' onClick={() => handleDelete(el.id)}>remove</button>
                <Link to={`/editform/${el.id}`}><button className='position-absolute ' id='btn3' >
                  edit
                </button></Link>

              </SwiperSlide>

            )) : <p>load</p>}


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




