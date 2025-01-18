import React, { useEffect, useRef } from "react";
import "./OTP2.css"



function Otp2()
{

    const num1 = useRef(null)
    const num2 = useRef(null)
    const num3 = useRef(null)
    const num4 = useRef(null)
    const num5 = useRef(null)
    const num6 = useRef(null)


    useEffect(()=>{
       num1.current.focus();
    },[])


     const handleInput =(e,currentValue,nextValue)=>{
        const value = e.target.value;

        if(value.length>0  && nextValue)
        {
        nextValue.current.focus();
        }
        console.log(value);
     }

    return(
        <>
          <>
    <div className="otp-container">
    <h2>OTP Verification</h2>
    <p>Enter the 6-digit code sent to your email</p>
    <div className="otp-inputs">
      <input type="text" maxlength="1" className="otp-input" ref={num1} onChange={(e)=>handleInput(e,num1,num2)} ></input>
      <input type="text" maxlength="1" className="otp-input" ref={num2} onChange={(e)=>handleInput(e,num2,num3)}></input>
      <input type="text" maxlength="1" className="otp-input" ref={num3} onChange={(e)=>handleInput(e,num3,num4)}></input>
      <input type="text" maxlength="1" className="otp-input" ref={num4} onChange={(e)=>handleInput(e,num4,num5)}></input>
      <input type="text" maxlength="1" className="otp-input" ref={num5} onChange={(e)=>handleInput(e,num5,num6)}></input>
      <input type="text" maxlength="1" className="otp-input" ref={num6} onChange={(e)=>handleInput(e,num6)}></input>
    </div>
    <button className="submit-btn" >Submit</button>
    <p className="resend disabled">Resend OTP in 30 seconds</p>
    </div>
        </>
        </>
    )
}



export default Otp2