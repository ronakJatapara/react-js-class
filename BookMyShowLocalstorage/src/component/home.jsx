

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




  const [getData, setGetData] = useState(() => JSON.parse(localStorage.getItem("data")) || []);
  const [searchTerm, setSearchTerm] = useState("")
  const [DataSearch,setDataSearch] = useState(getData)
  const [FilterTerm, setFilterTerm] = useState("all")
  const[SortTerm,setSortTerm] = useState("ascending")



  //  search filter sort //

    useEffect(()=>{

      let updatetData = [...getData];

      updatetData = updatetData.filter((item) =>item.name.toLowerCase().includes(searchTerm.toLowerCase()));

      updatetData = updatetData.filter((item)=>FilterTerm == "all" ? true : item.type.toLowerCase().includes(FilterTerm.toLowerCase()))

      updatetData.sort((a,b)=>SortTerm === "ascending" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))


      setDataSearch(updatetData);

    },[FilterTerm,SortTerm, searchTerm, getData])

  //  search filter sort //




    let navigate = useNavigate()

    const [getData2, setgetData2] = useState([]);

    let navigate2 = useNavigate();


    useEffect(() => {
      let datas = JSON.parse(localStorage.getItem("data"));

      setgetData2(datas);

    }, []);




    // delete code //

    const handleDelete = (dataId) => {
      let deleteData = getData2.filter((item) => item.id !== dataId)
      setgetData2(deleteData)


      localStorage.setItem("data", JSON.stringify(deleteData))


      if (!dataId) {
        alert("error")
      }
    }

    // delete code //


    return (

    <>
    <div className="container-fluid" style={{ backgroundColor: "white" }}>
                <div className="row border border-dark">
                    <div className="col-2 d-flex justify-content-end align-items-center p-3">
                        <img src="download.svg" alt="Logo" />
                    </div>
                    <div className="col-6 position-relative d-flex justify-content-start align-items-center">
                        <input 
                            type="text" 
                            id="input1" 
                            className='ms-4' 
                            placeholder='Search for Movies, Events, Plays, Sports, and Activities' 
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="col-3 d-flex justify-content-evenly align-items-center">
                        <select onChange={(e) => setFilterTerm(e.target.value)}>
                            <option value="all">All</option>
                            <option value="Action">Action</option>
                            <option value="drama">Drama</option>
                            <option value="romantic">Romantic</option>
                            <option value="historical">Historical</option>
                            <option value="Sci-fi">Sci-fi</option>
                            <option value="psychological">psychological</option>

                        </select>
                        <select onChange={(e) => setSortTerm(e.target.value)}>
                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                        </select>
                        <button className='p-1 btn btn-danger' onClick={() => navigate2("/form")}>Add Movie</button>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>

            <Menu />
            <Slider />

            <div className="container">
                <h4>Recommended Movies</h4>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {DataSearch ?
                    
                    DataSearch.map((el) => (
                        <SwiperSlide key={el.id} id='swiper'>
                            <div id="frame" className="col">
                                <div className="img1">
                                    <img src={el.image} alt={el.name} id="img" className="img-fluid" />
                                </div>
                                <div className="text">
                                    <p id='p1'>{el.name}</p>
                                    <p id='p2'>{el.type}</p>
                                </div>
                            </div>
                            <button className='position-absolute' id='btn2' onClick={() => handleDelete(el.id)}>Remove</button>
                            <Link to={`/editform/${el.id}`}>
                                <button className='position-absolute' id='btn3'>Edit</button>
                            </Link>
                        </SwiperSlide>
                    )) : <p>Loading...</p>}
                </Swiper>
            </div>
            <br /><br />

            <Footer />
    </>
    );
  }

  export default Home;




