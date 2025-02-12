import React, { useState , useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './form.css'

function Editform() {

    const[edit,setEdit] = useState(JSON.parse(localStorage.getItem("data")) || [])
    const navigate = useNavigate();
    console.log(edit);


    let {id} = useParams()
    // console.log(url);
    


    let selectedMovie = edit.find((item)=> item.id == id)

    useEffect(() => {
      if (selectedMovie) {
          setFormData(selectedMovie);
      }
  }, [selectedMovie]);
   

    // console.log(res);
    

    const [formData,setFormData] = useState(selectedMovie)

    const handleChange = (e) =>{
        // const {name,value} = e.target;
      
        const { name, value } = e.target;
        setFormData({...formData,[name]: value,});

    }



      const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = edit.filter((item) =>item.id == id ? { ...item, ...formData } : item);
    
    localStorage.setItem("data", JSON.stringify(updatedData));
    setEdit(updatedData);

    navigate("/");
    
  };



    


    


    
    

  return (
    <>
      

    
      <div className="container-fluid">
    <div className="row d-flex justify-content-center align-items-center">
        
        <div className="col-8  d-flex justify-content-center align-items-center mt-5">


        <form action="" id='form' onSubmit={handleSubmit}>     
<input type="text" name="image" id="inp1" value={formData.image}   placeholder='Movie Image' onChange={handleChange} />
<br />
<br />
<input type="text" name="name" id="inp2" value={formData.name} placeholder='Movie Name' onChange={handleChange}  />
<br /><br />
<input type="text" name="type" id="inp3"value={formData.type} placeholder='Type' onChange={handleChange} />
<br /><br />

<input type="submit" value={"submit"} name="" id="btn4" />


        </form>
        </div>
    </div>
      </div>

    </>
  )
}

export default Editform



// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// function Editform() {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const [edit, setEdit] = useState(JSON.parse(localStorage.getItem("data")) || []);

//   const selectedMovie = edit.find((item) => item.id == id);

//   const [formData, setFormData] = useState(selectedMovie);



//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({...formData,[name]: value,});
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // const updatedData = edit.map((item) =>
//     //   item.id == id ? { ...item, ...formData } : item
//     // );

//     localStorage.setItem("data", JSON.stringify(updatedData));
//     setEdit(updatedData);

//     navigate("/");
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row d-flex justify-content-center align-items-center">
//         <div className="col-8 border d-flex justify-content-center align-items-center mt-5">
//           <form onSubmit={handleSubmit} id="form">
//             <input
//               type="text"
//               name="image"
//               value={formData.image}
//               placeholder="Movie Image"
//               onChange={handleChange}
//             />
//             <br /><br />
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               placeholder="Movie Name"
//               onChange={handleChange}
//             />
//             <br /><br />
//             <input
//               type="text"
//               name="type"
//               value={formData.type}
//               placeholder="Type"
//               onChange={handleChange}
//             />
//             <br /><br />
//             <input type="submit" value="Submit" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Editform;
