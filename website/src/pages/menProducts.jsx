import axios from 'axios';
import React, { useEffect, useState } from 'react';

function MenProducts() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/product')
      .then((res) => {
        setArr(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);



  console.log(arr);



  return (
<>
       {
        arr.map((el,ind)=>{
          return<>
          
<p>{el.name}</p>
<img src={el.img} alt="" />
          
          </>


        })
       }
</>
  );
}

export default MenProducts;
