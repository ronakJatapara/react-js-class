
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData , deleteData } from "../feature/CrudSlice";
import "../css/home.css"
import { useNavigate } from "react-router-dom";

function Home() {
    const AddState = useSelector((state) => state.crudSlice);
    console.log(AddState);

    let dispatch = useDispatch();
    let navigate = useNavigate()


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
                {AddState.data &&
                    AddState.data.map((el, ind) => {
                        return (
                            <div className="col-md-4 col-sm-6 mb-4" key={ind}>
                                <div className="card">
                                    <img src={el.url} className="card-img-top" alt="Product" />
                                    <div className="card-body">
                                        <h5 className="card-title">{el.title}</h5>
                                        <p className="card-text">Price: ${el.price}</p>
                                        <p className="card-text">{el.description}</p>
                                        <p className="card-text"><strong>Category:</strong> {el.category}</p>
                                    </div>
                                 <div className="btns d-flex">
                                 <button id="btn3" onClick={()=> handleDelete(el.id)}>delete</button>
                                 <button id="btn4" onClick={()=> handleEdit(el)}>edit</button>
                                 </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default Home;
