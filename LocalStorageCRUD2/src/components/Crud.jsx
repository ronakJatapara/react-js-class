import React, { useEffect, useState } from 'react'

function Crud() {

   const[name,setName] = useState("")
   const[city,setCity] = useState("")
   const[sub,setSub] = useState("")



     const[Arr,setArr]=useState([])
    const[editIndex,seteditIndex] = useState(null)


   const handleSubmit = (id)=>{
   
    if(editIndex == null)
    {
      
     let obj ={id:Date.now(),name,city,sub}
     setArr([...Arr,obj])
      localStorage.setItem("student",JSON.stringify([...Arr,obj]))
    }
    else{
      let editData = Arr.find((item)=> item.id == editIndex)
      editData.id = editIndex 
      editData.name= name
      editData.city = city
      editData.sub =sub
      localStorage.setItem("student", JSON.stringify(Arr))
    }


     setName("")
     setCity("")
     setSub("")

       

   }

   useEffect(()=>{
           let data = JSON.parse(localStorage.getItem("student")) || []
           setArr(data)
   },[])



   const handleDelete =(id)=>{
   
     let DeleteData = Arr.filter((item)=> item.id != id)

     setArr(DeleteData)
     localStorage.setItem("student",JSON.stringify(DeleteData))


   
   }
 
   const handleEdit = (id)=>{
      
    let EditData = Arr.find((item)=>item.id == id)
    setName(EditData.name)
    setCity(EditData.city)
    setSub(EditData.sub)
    seteditIndex(EditData)

      

   }

  return (
    <>
      

     
        <input type="text" name="" id="" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" name="" id="" placeholder='city' value={city} onChange={(e)=>setCity(e.target.value)} />
        <input type="text" name="" id="" placeholder='subject' value={sub} onChange={(e)=>setSub(e.target.value)} />

        <button onClick={handleSubmit}>{editIndex == null ? "submit" : "update"}</button>
      
       
       <table border="1px" width="600px">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>City</th>
                <th>Subject</th>
                <th>action</th>

            </tr>
        </thead>




        <tbody>
            {
                Arr ?
                Arr.map((el,ind)=>{
               return(
                <tr key={ind}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.city}</td>
                <td>{el.sub}</td>
                <td>
                    <button className='btn btn-success' onClick={()=>handleEdit(el.id)}>edit</button>
                    <button className='btn btn-danger ms-2' onClick={()=>handleDelete(el.id)}>delete</button>

                </td>

            </tr>
               )
                }):
                <p>loading</p>
            }
        </tbody>
       </table>


  


    </>
  )
}

export default Crud
