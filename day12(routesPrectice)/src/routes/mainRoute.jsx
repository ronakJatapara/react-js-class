import React from "react";
import { Route,Routes } from "react-router-dom";
import BasicTextFields from "../pages/form";
import Product from "../pages/product";
import Edit from "../pages/edit";


function MainRoutes()
{
    return(
        <>
        <Routes>

            
            <Route path="/form" element={<BasicTextFields/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/edit/:id" element={<Edit/>}></Route>

            
        </Routes>
        </>
    )
}


export default MainRoutes

