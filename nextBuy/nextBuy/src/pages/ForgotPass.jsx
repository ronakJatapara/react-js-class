import React from 'react'
import Navbar from '../components/navbar'
import Navbar2 from '../components/navbar2'
import "../style/login.css"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function ForgotPass() {
  return (
    <>
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
            <h1 className='text-3xl ' style={{paddingLeft:"23%"}}>Reset your password</h1>
            <p className='text-gray-500' style={{paddingLeft:"23%",paddingTop:"10px"}}>We will send you an email to reset your password.</p>
             <form action="" id='form'>
              <input type="text" placeholder='Email' className='border border-black' name="" id="inp1" />
              <br /><br />
          

              <button type="button" id='btn1' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
             <Link to={"/login"}> <button type="button" id='btn11' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Cancel</button></Link>


             </form>
           </div>
          </div>
          <div className="col-span-12 md:col-span-6">
    <h1 className='text-3xl font-bold' style={{fontSize:"25px"}}>New Customer</h1>
    <br />
    <p className='pt-10 text-gray-500'>Sign up for early Sale access plus tailored new arrivals, trends and 
      <br />promotions. To opt out, click unsubscribe in our emails.</p>
      <br />
      <Link to={"/Signup"}>
      <button type="button" id='btn2' className="bg-black text-white rounded-lg">Register</button>
      </Link>


          </div>
        </div>
<br />
<br /><br />


        <div className="grid grid-cols-12">
              <div className="col-span-2 border-l border-r border-gray-200 flex justify-center flex-col cursor-pointer" >
                {/* <br /><br /><br /> */}
               <p className='flex justify-center' style={{fontSize:"15px" , fontWeight:"500"}}>your Feddback means the
                <br /> world to us- share your 
                <br />experience on Goggle.</p>
                <br />
               <div className="img grid grid-cols-12 flex mt-3 " style={{marginLeft:"35px",marginTop:"20px"}} >
               <div className="col-span-4 flex justify-center items-center">
               <img src="google.png" alt="" />
               </div>
               <div className="col-span-8 flex jusity-center items-center ps-1  ">   Review us on Google</div>
               </div>
               <br /><br /><br /><br /><br />
              </div>
              <div className="col-span-4 border-r border-gray-200">
                <br /><br /><br />
                <h1 className='text-3xl' style={{paddingLeft:"30px"}}>Let's get in touch!</h1>
                <p style={{paddingLeft:"30px",paddingTop:"10px"}} className='text-gray-500'>Do you have any questions or need assistance? Feel free to reach out to us at +91 7063510605, business.nextbuy@gmail.com.</p>
                <div className="grid grid-cols-12 border border-black rounded-lg"  style={{width:"86%",height:"45px",marginLeft:"30px", marginTop:"25px"}}>
                  <div className="col-span-1 flex justify-center items-center"><i class="fa-solid fa-envelope"></i></div>
                  <div className="col-span-11 "><input type="text" className='w-100' style={{height:"45px", border:"none"}} placeholder='Enter your Email' name="" id="" /></div>
                  
                  <button type="button" id='btn3' style={{marginTop:"30px"}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Subscribe Now</button>
                </div>
              </div>
              <div className="col-span-1 broder-r border-gray-200">
                <br /><br /><br />
              </div>

              <div className="col-span-2 border-l border-r border-gray-200">
                <br /><br /><br />
  <h1 className="mb-4 text-xl font-bold-400 pl-5" style={{paddingLeft:"15px"}}>Quick link</h1>

  <br />
  <div className="flex flex-col gap-3 text-gray-500"style={{paddingLeft:"15px"}}>
    <Link>About Us</Link>
    <Link>Website Privacy Policy</Link>
    <Link>Payment Policy</Link>
    <Link>NextBuy App Private Policy</Link>
    <Link>Return & Refund Policy</Link>
    <Link>Shipping Policy</Link>
    <Link>Term of Service</Link>
    <Link>Contact Us</Link>
    <Link>Request Data Deletion</Link>
  </div>
  <br /><br /><br />
</div>

              <div className="col-span-3">
                <br /><br /><br />
  <h1 className="mb-4 text-xl font-bold-400 pl-5" style={{paddingLeft:"15px"}}>Our Store</h1>
  <p style={{paddingLeft:"15px",paddingTop:"10px"}} className='text-gray-500'>Berhampore, Murshidabad, West 
    <br />Bengal, India – 742103</p>
    <br />
    <button id='btn4' className='ml-5' style={{marginLeft:"15px"}}><i class="fa-brands fa-facebook text-lg"></i></button>
    <button id='btn5'  style={{marginLeft:"15px"}}><i class="fa-brands fa-instagram text-lg"></i></button>

              </div>
        </div>
     <Footer></Footer>

           <div className="extra grid grid-cols-12 border border-black  rounded-lg relative" id='main' style={{width:"220px",height:"60px" , }}>
            <div className="col-span-3 flex justify-center items-center bg-white " id='pOne'>
              <img src="download.svg" alt=""  style={{width:"80%"}}/>
            </div>
            <div className="col-span-9  text-white flex justify-center items-center  cursor-pointer" id='pTwo' style={{backgroundColor:"#00ABBF",paddingTop:"2px",borderRadius:"0px 7px 7px 0px"}}>
              <p className='text-sm'>Protected by hCaptcha
                <br />
            <Link style={{fontSize:"11px"}}>Privacy . </Link>
            <Link style={{fontSize:"11px"}}>Terms</Link></p>
            </div>
           </div>

      </div>
    </>

  )
}

export default ForgotPass







