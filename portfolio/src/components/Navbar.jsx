import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Navbar() {


    const [sticky,setSticky] = useState(false)
    const [open,setOpen] = useState(false)
    
    useEffect(()=>{
      window.addEventListener("scroll",()=>{
        const nav =  document.querySelector("nav");
        window.scrollY > 0 ? setSticky (true) :setSticky(false)
      })
    },[])


    

  return (
    <>
     <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "md:bg-white text-black-900" : "text-white"}`}>
     <div className=' flex items-center justify-between'>
        <div className='mx-7'> 
            <h4 className=' text-4xl  uppercase font-bold'>
                R<span className='text-cyan-600'>ona</span>k
            </h4>

        </div>

        <div className=' md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full'>
        <ul className='flex items-center gap-1 py-2 text-lg'>
            <li className=''>
                <Link to="/" className=' text-gray-900 px-6 hover:text-cyan-600'>HOME</Link>
                <Link to="/about" className=' text-gray-900 px-6 hover:text-cyan-600'>ABOUT</Link>
                <Link to="/skill" className=' text-gray-900 px-6 hover:text-cyan-600'>SKILLS</Link>
                <Link to="/project" className=' text-gray-900 px-6 hover:text-cyan-600'>PROJECT</Link>
                <Link to="/contact" className=' text-gray-900 px-6 hover:text-cyan-600'>CONTACT</Link>

            </li>
        </ul>
        </div>

        <div className={`z-[900] text-3xl md:hidden`}>
            <ion-icon name="menu"></ion-icon>
        </div>
      


      </div>
     </nav>
    </>
  )
}

export default Navbar
