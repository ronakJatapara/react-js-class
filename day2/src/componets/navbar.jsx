import '../componets/navbar.css'



function Navbar()
{
    return(
  <>
      <div className="container-fluid">
        
       <div className="row" id='row1'>
        <div className="col-3 d-flex justify-content-center align-items-center">
            <img src="  https://demo80leotheme.b-cdn.net/prestashop/vt_winesto_demo/img/logo-1695036530.jpg" alt="" />
        </div>
        <div className="col-6 d-flex justify-content-evenly align-items-center">
            <a href="" id='a1'>HOME</a>
            <a href="" id='a1'>SHOP</a>
            <a href="" id='a1'>BLOG</a>
            <a href="" id='a1'>PAGES</a>
            <a href="" id='a1'>CONTACT</a>

        </div>
        <div className="col-3 d-flex justify-content-evenly align-items-center">
        <i class="fa-solid fa-magnifying-glass" id='icon1'></i>
        <i class="fa-regular fa-heart" id='icon1'></i>
        <i class="fa-regular fa-user" id='icon1'></i>
        <i class="fa-solid fa-cart-shopping" id='icon1'></i>
        </div>
       </div>

      </div>
  </>
    )
}

export default Navbar