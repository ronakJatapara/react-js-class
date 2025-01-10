import React, { useState } from 'react'
import ProductList from './productlist';


function ProductForm({getValue,submitDetail})
{
  

    return(
        
       <div>
           
       <form action="" onSubmit={submitDetail}>


<input type="text" name="img" id="" onChange={getValue} />
<input type="text" name="title" id="" onChange={getValue}/>
<input type="text" name="price" id="" onChange={getValue}/>
<input type="submit" name="" id="" />

</form>
       </div>
      
    )
}


export default ProductForm;