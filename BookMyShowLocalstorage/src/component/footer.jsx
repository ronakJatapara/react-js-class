// import React from 'react'
// import "./footer.css"

// function Footer() {
//   return (
//     <>
// <footer>
// <div className="container-fluid">
// <div className="row">
//   <div className="col-8 border border-danger">
  
//   </div>
// </div>
// </div>
// </footer>
//     </>
//   )
// }

// export default Footer




import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      
      <div className="row">
        <div className="col-12">
        <div className="footer-top ">

<div className="row">
 <div className="col-12 d-flex justify-content-center align-items-center">
 <img src="https://in.bmscdn.com/webin/common/icons/hut.svg" alt="List Icon" className="" />
 <p className="">List Your Show </p>
 <p>Got a Show,Event, activity or  greate expirience partner with us & Limit in BookMyShow</p>
</div>
</div>

<div className="col-2">
<button className="contact-btn">Contact today!</button>
</div>

</div>
        </div>
      </div>

      <div className="footer-content">
        <h3>MOVIES NOW SHOWING IN MUMBAI</h3>
        <p>Chhaava | Sanam Teri Kasam | Captain America: Brave New World | Loveyapa | Badass Ravi Kumar | Sky Force | Interstellar | Deva | Umbarro | Vidaamuyarchi</p>

        <h3>UPCOMING MOVIES IN MUMBAI</h3>
        <p>Nimitta Matra | It's Complicated | Namma Preethiya Ramu | Fire (2025) | Dinasari | Painkili | Badava | Vettu | Illti | Babu Shona</p>

        <h3>MOVIES BY GENRE</h3>
        <p>Drama Movies | Romantic Movies | Comedy Movies | Action Movies | Thriller Movies | Adventure Movies | Historical Movies | Animation Movies | Period Movies | Musical Movies</p>

        <h3>MOVIES BY LANGUAGE</h3>
        <p>Movies in Hindi | Movies in English | Movies in Marathi | Movies in Gujarati | Movies in Malayalam | Movies in Tamil | Movies in Telugu | Movies in Sindhi | Movies in Chhattisgarhi | Movies in Japanese</p>
      </div>
    </footer>
  );
}

export default Footer;



