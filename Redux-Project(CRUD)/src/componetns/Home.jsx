
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData , deleteData } from "../feature/CrudSlice";
import "../css/home.css"
import { useNavigate } from "react-router-dom";

function Home() {


    let dispatch = useDispatch();
    let navigate = useNavigate()
    const {data , searchTerm} = useSelector((state) => state.crudSlice);

    useEffect(()=>{
        dispatch(fetchAllData())
    },[])

   const  filterData = data.filter((item)=> item.title.toLowerCase().includes(searchTerm.toLowerCase()))


   


    useEffect(() => {
        dispatch(fetchAllData());
    }, []);



    const handleDelete = (id) => {

        dispatch(deleteData(id));

    };


    const handleEdit = (data) =>{
  
       dispatch(navigate(`/edit`,{state:data}));
      
    }

    
    return (
        <div className="container">
            <div className="row">
                {    filterData  ?  
                    filterData.map((el, ind) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-sm-6 mb-4 mt-3" key={ind}>
                                <div className="card" style={{height:"500px"}}>
                                    <div className="img d-flex justify-content-center align-items-center">
                                    <img src={el.url} className="card-img-top" alt="Product" style={{height:"100%" , width:"80%"}} />

                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{el.title}</h5>
                                        <p className="card-text">Price: ₹{el.price}</p>
                                        <p className="card-text">{el.description}</p>
                                        <p className="card-text"><strong>Category:</strong> {el.category}</p>
                                    </div>
                                 <div className="btns d-flex">
                                 <button id="btn3" onClick={()=> handleDelete(el.id)} className="btn btn-danger mb-2"><i class="fa-solid fa-trash"></i></button>
                                 <button id="btn4" onClick={()=> handleEdit(el)} className="btn btn-primary mb-2"><i class="fa-solid fa-pen"></i></button>
                                 </div>
                                </div>
                            </div>
                             
                        );
                        
                    }): <p>error</p>}  
                    
            </div>
        </div>
    );
}

export default Home;
