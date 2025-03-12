import React, { useEffect } from 'react'
import "../css/profile.css"
import { useDispatch } from 'react-redux'

function Profile() {

    let disaptch = useDispatch()

 useEffect(()=>{
   
 },[])

  return (
    <>
      

    <div className="container">

      
      <div className="form2">
     
     <p>User Details</p>
     <img src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?ga=GA1.1.247215582.1741159152&semt=ais_hybrid" alt="" />
     <p>name</p>
     <p>date</p>

 
      </div>


    </div>

    </>
  )
}

export default Profile
