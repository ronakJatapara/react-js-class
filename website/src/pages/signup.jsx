  import React, { useEffect, useRef } from 'react'
  import "../components/login.css"
  import Form from 'react-bootstrap/Form';
  import InputGroup from 'react-bootstrap/InputGroup';
  import { useState } from 'react';
  import axios from 'axios';
  import { Link, useNavigate } from 'react-router-dom';
  function Signup() {

    const[state,setState] =useState({
      name:"",
      number:"",
      email:""
    })


    const[nameErr,setNameErr]=useState("")
    const[numErr,setNumErr]=useState("")
    const[emailErr,setPassErr]=useState("")


    const handleChange =(e)=>{
      const{name ,  value} = e.target;
      setState({...state,[name] : value})
    }
    //  console.log(state);

    const[Arr,setArr] =useState([])
    const[showOtp,setShowotp] = useState(false)
    const[otp,setOtp] = useState("")    // otp store karava mate
    const[otpValue,setOtpvalue] = useState(["","","",""]) // wrong otp mate

    const navigate = useNavigate()


    const handleSubmit=(e)=>{
      
      e.preventDefault();
      // setShowotp(true)
      setArr([...Arr,state])


      // alert("good job")
      console.log(state);



    if(state.name=="")
    {
      setNameErr("enter your name first")
    }
    else if(state.number.length>11)
    {
      setNumErr("please enter your number properly")
    }
    else{
      axios.post(`http://localhost:3000/users`,state)
      .then((res)=>{
        alert("done")
        navigate("/")
        localStorage.setItem("done",true)

      })
      .catch((err)=>{
      console.log(err);
      })
    }



   

 

    }


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
      <img src="back1.jpg" alt="" />
    </div>


    
    <div className="signupForm" >


      <form action="" onSubmit={handleSubmit}>

    <p id='p1'>Just few more details</p>
    <p id='p2'>We need few more details to personalize your experience.</p>


        <InputGroup className="mb-3" id='input1'>
        {/* <label htmlFor="">fullname</label> */}
        <br />
          <Form.Control
            placeholder="Ex-John Sharma"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name='name'
            onChange={handleChange}
          />
        </InputGroup>

        {nameErr && <p style={{color:"red", paddingLeft:"130px"}}>{nameErr}</p>}

        <InputGroup className="mb-3" id='input2'>
          <InputGroup.Text id="basic-addon1">
          <img src="flag.png" alt=""  className='pr-4'/> <font className="ps-2">+91</font></InputGroup.Text>
          <Form.Control
            placeholder="Enter Mobile Number"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name='number'
            onChange={handleChange}

          />
        </InputGroup>
        {numErr && <p style={{color:"red", paddingLeft:"130px"}}>{numErr}</p>}



        <InputGroup className="mb-3" id='input3'>
          <Form.Control
            placeholder="ex:yourmailid@gmail.com"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name='email'
            onChange={handleChange}

          />
        </InputGroup>
        {/* {nameErr && <p style={{color:"red", paddingLeft:"130px"}}>{nameErr}</p>} */}

        <br />

  <p id='p3'>Gender</p>
  <div className="row">
    <div className="col-12 d-flex  align-items-center">
    <button id='btn1'  type='button' >Male</button>
        <button id='btn2'  type='button' className='ms-4'>Female</button>
        <button id='btn3' type='button' className='ms-4'>Other</button>
    </div>
  </div>

  <br />



  <p id='p4'>OTP</p>

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
                        onChange={(e) => handleOtp(e, index)}
                      />
                    ))}
                  </>
                )}
              </div>



  <font id='btn4' type="button" onClick={handleOtprequest}>Get OTP</font>
  <font id='btn4a' type="button">Resend OTP</font>
  


  {/* <Link to={"/home"}> */}
  <button id='btn5' type='submit' >Continue</button>
  
  {/* </Link> */}



  <Link to={"/Login"}><p className='text-center'>Have An Account? Login</p></Link>







  </form>

    </div>

    </div>
      
  

      </div>
  {/* </div> */}

      </>
    )
  }

  export default Signup







