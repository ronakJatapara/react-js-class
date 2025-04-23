import React from 'react'
import Navbar from '../components/navbar'
import Navbar2 from '../components/navbar2'
import "../style/login.css"
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <Navbar></Navbar>
        <Navbar2></Navbar2>
        <br /><br />
      
      <div className="container">
        <div className="title">
                 <h1 className='text-4xl text-center'>Log in</h1>
                 <br />
    <Link to="/">
    <h3 className='text-center'><font className="">Home</font>  <i class="fa-solid fa-chevron-right text-sm"></i>  <font>Account</font></h3>
    </Link>
        </div>
        <br /><br />
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 ">
           <div className="container">
            <h1 className='text-3xl ' style={{paddingLeft:"23%"}}>Log in</h1>
             <form action="" id='form'>
              <input type="text" placeholder='Email' className='border border-black' name="" id="inp1" />
              <br /><br />
              <input type="text" placeholder='password' className='border border-black' name="" id="inp2" />
              <br /><br />
              <h2 className='underline'>Forgot your password?</h2>
              <br /><br />

              <button type="button" id='btn1' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>

             </form>
           </div>
          </div>
          <div className="col-span-12 md:col-span-6">
    <h1 className='text-3xl font-bold' style={{fontSize:"25px"}}>New Customer</h1>
    <br />
    <p className='pt-10 text-gray-500'>Sign up for early Sale access plus tailored new arrivals, trends and 
      <br />promotions. To opt out, click unsubscribe in our emails.</p>
      <br />
      <button type="button" id='btn2' className="bg-black text-white rounded-lg">Register</button>


          </div>
        </div>
        
        

      </div>
    </div>
  )
}

export default Login







