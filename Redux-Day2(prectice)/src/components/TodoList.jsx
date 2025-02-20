import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData } from '../features/CrudSlice';

function TodoList() {

    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [std,setStd] = useState("");
    const [editIndex,setEditIndex] =  useState(null)

    let dispatch = useDispatch()


 let data = useSelector((state)=>{
    return state.crudReducer.student
 })


//    add code   //

 const handleAdd = () =>{
    

    if(editIndex == null)
    {

        let obj = {id:Date.now(),name,surname,std}
        dispatch(addData(obj))
    }
    else{
        dispatch(updateData({editIndex,name,surname,std}))
    }

    setName("")
    setSurname("")
    setStd("")
    setEditIndex(null)
 }

//    add code   //

// delete code  //

const handleDelete = (id) =>{

    dispatch(deleteData(id))

}


const handleEdit = (id) =>{
    let singleData = data.find((item)=>item.id == id)

    setName(singleData.name)
    setSurname(singleData.surname)
    setStd(singleData.std)
    setEditIndex(id)


}
 

  return (
    <div>
  <h2>Details</h2>

  <input type="text" name="name" id="" value={name} placeholder='name' onChange={(e)=> setName(e.target.value)} />
  <br /><br />
  <input type="text" name="surname" id="" value={surname} placeholder='surname' onChange={(e)=> setSurname(e.target.value)}/>
  <br /><br />
  <input type="text" name="std" id="" value={std} placeholder='std' onChange={(e)=> setStd(e.target.value)}/>
  <br /><br />

  <button onClick={handleAdd}>{editIndex == null ? "Add Data" : "updata Data"}</button>


{ data.length > 0 ?  <table border="1px"  >  
        <thead>
            <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Standard</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
                    {data &&
                        data.map((el, ind) => (
                               <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{el.name}</td>
                                <td>{el.surname}</td>
                                <td>{el.std}</td>
                                <td>
                                    <button onClick={()=>handleDelete(el.id)}>Delete</button>
                                    <button onClick={()=> handleEdit(el.id)}> Edit</button>
                                </td>
                               </tr>
                    ))}
        </tbody>
      </table> : <p>no data</p>}


    </div>
  )
}

export default TodoList
