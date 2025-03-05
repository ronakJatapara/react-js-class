import React from 'react'

function Signup() {

  const [name,setName] = useState("")
  const [pass,setPass] = useState("")

  const addData = async ()=>{
    
  
    
  }


  return (
    <>
      <input type="text" name="" id="" placeholder='name' onChange={()=> setName(e.target.value)} />
      <input type="text" name="" id="" placeholder='password' onChange={()=> setPass(e.target.value)} />

      <button onClick={addData}>Add Data</button>
    </>
  )
}

export default Signup
