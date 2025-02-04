import React, { useEffect, useRef } from 'react'
import "../components/login.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function Login() {



     
  const [state,setState] = useState({
    number:""
  })



  const navigate = useNavigate()

  const handlechange = (e)=>{
 
    const{name,value} = e.target
    setState({...state,[name] : value})

       

  }
   

  const[Arr,setArr] = useState([])
const[error,setError] = useState("")



  const handleSubmit =(e)=>{
     e.preventDefault()
    
     setArr([...Arr,state])
     console.log(state);


   
 

    


     if(state.number.length>11 )
      {
       setError("Please enter a valid mobile number (max 10 digits)");
      }
      else if(state.number=="")
      {
       setError("please enter your number")
      }
      else{
       setError("")
       console.log("Form submitted", state);
       axios.get(`http://localhost:3000/users?number=${state.number}`)
       .then((res)=>{
        // console.log(res);
        if(res.data.length===0)
        {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Number Not Registered",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
  
        }
        else{
          if(res.data[0].number===state.number)
          {
            Swal.fire({
              title: "UserLogin",
              text: "You clicked the button!",
              icon: "success"
            });
            navigate("/")

          }
          
       
          else{
            alert("please check number")
          }
        }
       })
       .catch((err)=>{
        console.log(err);
       })

      }



    
  }





  

 
  //  console.log(state);

  const[showOtp,setShowotp] = useState(false)
  const[otp,setOtp] = useState("")    // otp store karava mate
  const[otpValue,setOtpvalue] = useState(["","","",""]) // wrong otp mate




  const inputRefs =[useRef(null),useRef(null),useRef(null),useRef(null)]

  const  handleOtprequest =()=>{
    let otp = Math.floor(1000 + Math.random() * 9000); 
    alert(otp);
    setOtp(otp)
    setShowotp(true)
  }
    
 

  const handleOtp=(e,ind)=>{
       
    let value = e.target.value;
    let NewOtpValue=[...otpValue]

    NewOtpValue[ind] = value
    setOtpvalue(NewOtpValue)


   if(value.length===1 && ind < otpValue.length - 1)
   {
      
          inputRefs[ind+1].current.focus();

   }
   else if(value.length===0 && ind>0)
   {
    inputRefs[ind-1].current.focus()
   }


  }



  useEffect(() => {
    if (otp) {
      let otpArr = otp.toString().split(""); 
      setOtpvalue(otpArr);
    }
  }, [otp]);
  


  useEffect(() => {
    if (showOtp && inputRefs[0].current) {
      inputRefs[3].current.focus();
    }
  }, [showOtp]);





  return (
    <>
{/* <div className="container-fluid"> */}
      
<div className="main  mt-5">
  <div className="container-fluid d-flex">
  
  <div className="image">
    <img src="https://images.bewakoof.com/web/rm-login-desk-v2.jpg" alt="" />
  </div>


  
  <div className="signupForm" >


    <form action="" onSubmit={handleSubmit} >

  <p id='p1'>Login / Signup</p>
  <p id='p2'>Join us now to be a part of Bewakoof® family.</p>




        <InputGroup className="mb-3" id='input2'>
          <InputGroup.Text id="basic-addon1">
          <img src="flag.png" alt=""  className='pr-4'/> <font className="ps-2">+91</font></InputGroup.Text>
          <Form.Control
            placeholder="Enter Mobile Number"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name='number'
            onChange={handlechange}

          />
        </InputGroup>
        {error && <p style={{color:"red" , paddingLeft:"130px"}}>{error}</p>}



    
      <br />



<br />




<div className="inputs">
              {showOtp && (
                <>
                  {otpValue.map((value, index) => (
                    <input
                      key={index}
                      type="text"
                      id={`input${index + 4}`}
                      value={value}
                      ref={inputRefs[index]}
                      maxLength={1}
                    />
                  ))}
                </>
              )}
            </div>



<font id='btn4' type="button" onClick={handleOtprequest}>Get OTP</font>
<font id='btn4a' type="button">Resend OTP</font>


{/* <Link to={"/home"}> */}
<button id='btn5' type='submit'>Continue</button>

{/* </Link> */}



<Link to={"/signup"}><p className='text-center'>create Account? Signup</p></Link>







</form>

  </div>

  </div>
    


    </div>
{/* </div> */}

    </>
  )
}

export default Login







