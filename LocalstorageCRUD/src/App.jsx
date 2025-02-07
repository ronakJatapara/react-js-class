import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [name,setName] = useState("")
  const [city,setCity] = useState("")
  const [sub,setSub] = useState("")


  
 const [arr,setArr] = useState([])  



 useEffect(()=>{
  let data = JSON.parse(localStorage.getItem("student")) || []
  setArr(data)
 },[])

  const handleSubmit = ()=>{
     
           
    let obj={id:Date.now() , name,city,sub}

    setArr([...arr,obj])
    // console.log(obj);


    localStorage.setItem("student" , JSON.stringify([...arr,obj]))


    setName("")
    setCity("")
    setSub("")

    

  }
  const handleDelete=(i)=>{

    let deleteData = arr.filter((item)=>item.id  != i)
    setArr(deleteData)
     
   
  }

  const [editIndex , setEditIndex] = useState(null)

  const handleEdit=(id)=>{
    let EditData = arr.find((item)=>item.id==id)
    setName(EditData.name)
    setCity(EditData.city)
    setSub(EditData.sub)
    setEditIndex(id)

    
  }

  return (
   <>
   
   <input type="text" name="" id=""  placeholder='enter name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
   <br /><br />
   <input type="text" name="" id="" placeholder='enter city' value={city} onChange={(e)=>{setCity(e.target.value)}} />
   <br /><br />
   <input type="text" name="" id="" placeholder='enter subject' value={sub} onChange={(e)=>{setSub(e.target.value)}} />
   <br /><br />

   <button onClick={handleSubmit}>{editIndex == null ? "submit" : "update"}</button>


   <table border='1' width="800">
 
 <thead>
  <tr>

    <th>id</th>
    <th>name</th>
    <th>city</th>
    <th>sub</th>
    <th colSpan={2}>action</th>

  </tr>
 </thead>


 <tbody>
  
  {
    arr ? 
    arr.map((el,ind)=>{
      return(
        <>
         <tr key={ind}>
          <td>{el.id}</td>
          <td>{el.name}</td>
          <td>{el.city}</td>
          <td>{el.sub}</td>
          <td>
            <button type='button' onClick={()=>{handleEdit(el.id)}} >edit</button>
            <button type='button' onClick={()=>handleDelete(el.id)}>Delete</button>
          </td>

         </tr>
        </>
      )
    }):
    <p>loading........</p>
  }

 </tbody>

   </table>

   </>
  )
}

export default App
