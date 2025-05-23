import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Navbar2 from '../components/navbar2'
import "../style/signup.css"
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"; 
import { doc, setDoc } from 'firebase/firestore'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Signup() {


   const[fname,setFname] = useState("")
   const[lname,setLname]=useState("")
   const[email,setEmail]=useState("")
   const[pass,setPass]=useState("")
   const [arr,setArr]=useState([])

   const[fnameError,setFnameError] = useState(false)
   const[lnameError,setLnameError] = useState(false)
   const[emailError,setEmailError] = useState(false)
   const[passError,setPassError] = useState(false)


   const navigate = useNavigate()




const handleSubmit = async (e) => {
  e.preventDefault();

  // Field validation
  fname.length === 0 ? setFnameError(true) : setFnameError(false);
  lname.length === 0 ? setLnameError(true) : setLnameError(false);
  email.length === 0 ? setEmailError(true) : setEmailError(false);
  pass.length === 0 ? setPassError(true) : setPassError(false);

  // Show toast if any field is empty
  if (fname.length === 0 || lname.length === 0 || email.length === 0 || pass.length === 0) {
    toast.error("Please fill all required fields!", {
      position: "top-right",
      autoClose: 2000,
    });
    return;
  }

  try {
    // Firebase Authentication to create user
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
    const user = userCredential.user;
    console.log(user);

    // Store user details in Firestore (without password)
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      firstName: fname,
      lastName: lname,
      email: email,
      uid: user.uid,
      lastLogin: new Date().toISOString(),
    });

    // Reset input fields
    setFname("");
    setLname("");
    setEmail("");
    setPass("");

    // Success toast
    toast.success("Registered Successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
  } catch (error) {
    console.error(error);
    toast.error(error.message, {
      position: "top-right",
      autoClose: 2000,
    });
  }
};

 
      
const handleGoogleSignUp = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      firstName: user.displayName?.split(" ")[0] || "",
      lastName: user.displayName?.split(" ")[1] || "",
      email: user.email,
      uid: user.uid,
      lastLogin: new Date().toISOString(),
    }, { merge: true });

    toast.success("Registered with Google!", {
      position: "top-right",
      autoClose: 1000,
    });

    navigate("/");
  } catch (error) {
    console.error("Google Sign-up Error:", error);
    toast.error("Google sign-up failed!", {
      position: "top-right",
      autoClose: 2000,
    });
  }
};

  
     

  return (
    <>
        <Navbar></Navbar>
        <Navbar2></Navbar2>
        <br /><br />

      <div className='wow animate__animated animate__backInDown'>  <ToastContainer /></div>
      
      <div className="container">
        <div className="title">
                 <h1 className='text-4xl text-center'></h1>
                 <br />
    <Link to="/">
    <h1 className='text-center text-4xl'>Register</h1>
    <br />
    <h3 className='text-center'><font className="">Home</font>  <i class="fa-solid fa-chevron-right text-sm"></i>  <font>Create Account</font></h3>
    </Link>
        </div>
        <br /><br />
     <div className="grid grid-cols-12">
      <div className="col-span-12">
        <form action="" className='flex justify-center items-center  flex-col gap-4 ' onSubmit={handleSubmit}>
          <h1 className='text-2xl text-bold'>Register</h1>
    
          <input type="text" placeholder='First Name' name=""  id="" className={`border ${fnameError ? "border-red-500" : "border-gray-200"} rounded-lg`} value={fname} style={{width:"30%",height:"50px",paddingLeft:"10px"}} onChange={(e)=> setFname(e.target.value)}/>
          { fnameError== true ? <p className="text-red-500 text-sm mt-1">Please fill your First Name</p> : false}
    
          <input type="text" placeholder='Last Name' name="" id="" className={`border ${lnameError ? "border-red-500" : "border-gray-200"} rounded-lg`} value={lname}  style={{width:"30%",height:"50px",paddingLeft:"10px"}} onChange={(e)=> setLname(e.target.value)}/>
          { lnameError == true ? <p className='text-red-500 text-sm mt-1'>Please fill your Last name</p> : false}

          <input type="email" placeholder='Email' name="" id="" className={`border ${emailError ? "border-red-500" : "border-gray-200"} rounded-lg`  }value={email}  style={{width:"30%",height:"50px",paddingLeft:"10px"}} onChange={(e)=> setEmail(e.target.value)} />
          { emailError == true ? <p className='text-red-500 text-sm mt-1'>Please fill your Email</p> : false}
          
          <input type="text" placeholder='Password' name="" id="" className={`border ${passError ?  "border-red-500" : "border-gray-200"} rounded-lg`}value={pass}  style={{width:"30%",height:"50px",paddingLeft:"10px"}} onChange={(e)=> setPass(e.target.value)}/>
     {passError == true ? <p className='text-red-500 text-sm mt-1'>Please fill your Password</p>: false}

          <p>
          Sign up for early Sale access plus tailored new arrivals, trends and 
          <br />promotions. To opt out, click unsubscribe in our emails.
          </p>


          <button type='submit' id='btn6' className='rounded-lg cursor-pointer'>register</button>
          <Link to={"/login"} id='btn7' className='rounded-lg text-center flex justify-center items-center cursor-pointer'><button type='button' >login</button></Link>
          <button id='googleButton' type='button' className='rounded-lg flex justify-center items-center cursur-pointer' onClick={handleGoogleSignUp}>
             <img src="googleLogo.png" alt="" style={{width:"40px" , height:"40px"}} /><font className="text-md">Continue with google</font>
</button>


        </form>
      </div>
     </div>

<br />
<br />
<br /><br />



        <div className="grid grid-cols-12">
              <div className="col-span-2 border-l border-r border-gray-200 flex justify-center flex-col cursor-pointer" >
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

export default Signup






