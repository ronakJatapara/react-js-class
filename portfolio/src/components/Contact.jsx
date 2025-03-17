import React from 'react'

function Contact() {
    
  const contact_info=[
    {logo:"mail", text:"codeprogram@gmail.com"},
    {logo:"logo-whatsapp", text:"123 456 780"},
    {logo:"location", text:"demo location"}


  ]

  return (
    <>
      <section id='contact' className='py-10 px-3 text-white'>
          <div className='text-center mt-8'>
              <h3 className='text-4xl font-semibold'>Contact<span className='text-cyan-600'>Me</span></h3>
              <p className='text-gray-400 mt-3 text-lg'>Get in touch</p>

              <div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl  bg-gray-800 md:p-6 rounded-lg mx-auto '  >
                <form action="" className='flex flex-col flex-1 gap-5' >
                  <input type="text" name="" id="" placeholder='Your Name'  className="ps-2" />
                  <input type="email" name="" id="" placeholder='Your Email Address'  className="ps-2" />
                  <textarea name="" placeholder='Your Message' rows={10} id="" className="ps-2"  ></textarea>
                  <button className='btn-primary rounded-full w-fit'  style={{backgroundColor:"#0092B8" , height:"40px"  , width:"150px"}}>Send Message</button>

                </form>
                <div className='flex flex-col gap-7'>
                 
{
  contact_info.map((contact, i) => (
    <div key={i} className="flex flex-wrap gap-4 w-fit items-center">
      <div className="w-14 h-14 flex items-center justify-center text-white bg-cyan-600 rounded-full">
        <ion-icon name={contact.logo} className="text-2xl"></ion-icon>
      </div>
      <p className="text-base ">{contact.text}</p>
    </div>
  ))
}

                </div>
              </div>

          </div>
      </section>
    </>
  )
}

export default Contact
