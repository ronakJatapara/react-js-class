import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteData, editData, fetchAllData } from "../feature/Slice";

function PostList() {
  const data = useSelector((state) => state.crudSlice);
  console.log(data);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);


  const handelDelete = (id)=>{
    dispatch(DeleteData(id))     
  }


  const handelEdit = (id) =>{
     dispatch(editData(id))
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {data.data ? (
          data.data.map((el, ind) => (
            <div className="col-md-3 mb-4" key={ind}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={el.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{el.name}</h5>
                  <p className="card-text">{el.price}</p>
                <button className="btn btn-danger" onClick={()=> handelDelete(el.id)}>delete</button>
                <button className="btn btn-success ms-2" onClick={()=> handelEdit(el.id)}>edit</button>

                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-danger">Error loading data</p>
        )}
      </div>
    </div>
  );
}

export default PostList;
