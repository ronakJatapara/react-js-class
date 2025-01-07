import React from "react"
import "./product.css"



function Product(props)
{
    return(
        <>
        <table>
            <thead>
                <th border="1px" id="title">img</th>
                <th border="1px" id="title1">name</th>
                <th border="1px" id="title2">price</th>

            </thead>
            <tbody>{
               ( props.list.map((el)=>{
                    return(
                        <>
                        <tr border="1px">
                        <td border="1px" id="img"><img src={el.img} alt="Image description" /></td>

                         
                            <td border="1px" id="name">{el.name}</td>
                           
                       
                            <td border="1px" id="price">{el.price}</td>
                        </tr>
   

                        </>
                    )
                }))
                }</tbody>
        </table>
        </>
    )
}


export default Product