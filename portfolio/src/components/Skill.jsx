import React from 'react'

function Skill() {

 const skills = [
  {logo:"logo-html5" , level:"Advance" , count:86},
  {logo:"logo-css3" , level:"Expert" , count:90},
  {logo:"logo-nodejs" , level:"Beginner" , count:40},
  {logo:"logo-react" , level:"Intermedia" , count:80}


 ]

  return (
    <>
    <section id='skills'className='py-10 bg-gray-800 relative ' style={{height:"800px"}}>
    <div className='mt-8 text-gra-100 text-center'>
      <br /><br />
      <h3 className='text-4xl font-semibold'>My <span className='text-cyan-600'>Skills</span></h3>
      <p className='text-gray-400 mt-3 text-lg'>My Knowledge</p>
      <div className='flex items-center justify-center mt-12 gap-10  flex-wrap' >
    {
      skills?.map((skill,i)=>(
        <div key={i} className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl' >
        <div className='w-32 h-32 flex items-center justify-center rounded-full' style={{background:`conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`}}>
              <div className='text-6xl text-white w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600'>
              <ion-icon name={skill.logo}></ion-icon>
              </div>
        </div>
        <p className='text-white'>{skill.level}</p>
</div>
      ))
    }
      </div>
    </div>
    </section>


    <section id='hireme' className='py-10 px-3 text-white'>
     <div className='text-center'>
        <h3 className='text-4xl font-semibold'>
            Hire <span className='text-cyan-600'> Me</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>Do You have Any works?</p>
     </div>
     <div className='bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center'>
   <div>
    <h3 className='text-2xl font-semibold'> Do you want any work from me?</h3>
    <p className='max-w-lg text-sm mt-4 text-gray-200 leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus est itaque minima omnis ullam quasi excepturi deleniti tenetur consectetur illo facere, debitis officia praesentium ratione adipisci assumenda autem eum harum.</p>
    <button className='btn-primary  mt-10 rounded-full' id='btn3' style={{height:"50px" , width:"150px", backgroundColor:"#0092B8"}}>Say Hello</button>
   </div>
   <img src="download3.png" alt="" className='lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover'/>
     </div>
       </section> 
    </>
  )
}

export default Skill
