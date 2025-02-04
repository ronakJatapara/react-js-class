import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Signup from '../pages/signup'
import Login from '../pages/login'
import Slider from '../pages/home2'
import Men from '../pages/men'
import MenProducts from '../pages/menProducts'
import WomenProducts from '../pages/womenProducts'
import Women from '../pages/women'
import SingleProduct from '../pages/singleProduct'
// import PrivateRoute from '../components/PrivateRoute'
function Mainrouter() {
  return (
    <>
      <Routes>
        <Route path='/Signup'element={<Signup/>} >Signup</Route>
        <Route path='/Login' element={<Login/>}>Login</Route>
        <Route path='/' element={<Slider></Slider>}>home</Route>
        <Route path='/men' element={<Men></Men>}>Men</Route>
        <Route path='/men-product' element={<MenProducts></MenProducts>}>men product</Route>
        <Route path='/Women-product' element={<WomenProducts></WomenProducts>}>Women product</Route>
        <Route path='/women' element={<Women></Women>}>Women</Route>
        <Route path='/menSingleProduct/:id' element={<SingleProduct></SingleProduct>}></Route>

       
      </Routes>
    </>
  )
}

export default Mainrouter




// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Signup from '../pages/signup';
// import Login from '../pages/login';
// import Slider from '../pages/home2';
// import Men from '../pages/men';
// import MenProducts from '../pages/menProducts';
// import WomenProducts from '../pages/womenProducts';
// import Women from '../pages/women';
// import PrivateRoute from '../components/PrivateRoute';

// function Mainrouter() {
//   return (
//     <Routes>
//       <Route path='/Signup' element={<Signup />} />
//       <Route path='/Login' element={<Login />} />
//       <Route path='/' element={<Slider />} />
//       <Route path='/men' element={
       
//           <Men />
//         </PrivateRoute>
//       } />
//       <Route path='/men-product' element={<MenProducts />} />
//       <Route path='/women-product' element={<WomenProducts />} />
//       <Route path='/women' element={<Women />} />
//     </Routes>
//   );
// }

// export default Mainrouter;
