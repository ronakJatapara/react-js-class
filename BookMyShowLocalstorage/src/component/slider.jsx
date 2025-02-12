import React from 'react'

function Slider() {
  return (
<>






    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style={{backgroundColor:"white"}}>
  <div class="carousel-inner" style={{width:"82%" , marginLeft:"9%"}}>
    <div class="carousel-item active " >
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg" class="d-block w-100" alt="..."></img>
    </div>

    <div class="carousel-item">
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1739253823682_12thfebsentimentaaaldesktopcarusel.jpg" class="d-block w-100" alt="..."></img>
    </div>
  
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" style={{backgroundColor:"black"}} aria-hidden="true"></span>
    <span class="visually-hidden" >Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" style={{backgroundColor:"black"}} aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</>
  )
}

export default Slider
