import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchAllData } from "../feature/CrudSlice";
import "../css/home.css";

function Home() {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.crudslice.data);

  useEffect(() => {
    dispatch(fetchAllData());
  }, []);

  const handleDelete=(id)=>{
      dispatch(deleteData(id))
  }
const handleEdit=(id)=>{
      alert(id)
}
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid" id="container">
        {datas ? (
          <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2" id="form">
            {datas.map((el, ind) => (
              <div key={ind} className="main relative">
                <div className="img">
                  <img src={el.url} alt="" className="img-fluid" style={{ width: "100%" }} />
                </div>
                <div className="text">
                  <p className="font-bold ps-1">{el.title}</p>
                  <p className="ps-1">Language : {el.language}</p>
                  <p className="font-bold ps-1">{el.type}</p>
                  <p className="font-bold ps-1 pb-3">Release Year : {el.year}</p>
                </div>
                <button id="btn1" className="text-white absolute" onClick={() => handleDelete(el.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button id="btn2" className="text-white absolute" onClick={()=> handleEdit(el.id)}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading.....</p>
        )}
      </div>
    </>
  );
}

export default Home;
