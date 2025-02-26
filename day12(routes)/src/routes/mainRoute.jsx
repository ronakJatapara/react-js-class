import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../components/form";
import Home from "../components/home";
import About from "../components/about"
import Product from "../components/product"



function MainRoute()
{
    return(
        <>
        <Routes>

            <Route path="/" element={<Home/>} ></Route>
            <Route path="/form" element={<Form/>} ></Route>
            <Route path="/product" element={<Product/>} ></Route>
            <Route path="/about" element={<About/>} ></Route>


        </Routes>
        </>
    )
}


export default MainRoute