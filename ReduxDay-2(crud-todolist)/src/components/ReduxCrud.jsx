import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData } from '../feature/reduxSlice'

function ReduxCrud() {
  
    const [name,setName] = useState("")
    const [sub,setSub] = useState("")
    const [editIndex,SetEditIndex] = useState(null)

    const data = useSelector((state)=>{
       return state.reduxReducer.student
    })

    let dispatch = useDispatch()

    const handleAdd=()=>{
       
    
       if(editIndex == null)
       {
        let obj ={id:Date.now(),name,sub}
        dispatch(addData(obj))
       }
       else{
        dispatch(updateData({editIndex,name,sub}))
       }



       setName("")
       setSub("")
    }
    
    const handleDelete =(id)=>{
       dispatch(deleteData(id))    
    }

    const handleEdit = (id) =>{
      // console.log(id);
      let singleData = data.find((item)=> item.id == id)

      setName(singleData.name)
      setSub(singleData.sub)
      SetEditIndex(id) 

      
    }

  return (
    <div>
      <h1>redux-CRUD</h1>

      <input type="text" name="name" id="" value={name} placeholder='name' onChange={(e)=> setName(e.target.value)} />
      <input type="text" name="sub" id="" value={sub} placeholder='sub' onChange={(e)=> setSub(e.target.value)}/>
      <button onClick={handleAdd}>{editIndex == null ? "Add data" : "updatedata"}</button>

      
      {
        data && 
        data.map((el,ind)=>{
          return<div>
  
  <ul key={ind}>
    <li>{ind+1}</li>
    <li>{el.name}</li>
    <li>{el.sub}</li>
    <button onClick={()=> handleEdit(el.id)}>Edit</button>
    <button onClick={()=>handleDelete(el.id)}>Delete</button>

  </ul>

          </div>
          
        })
      }
      
    </div>
  )
}

export default ReduxCrud
