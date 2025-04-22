import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "../style/navbar.css"
// import { Link } from '@mui/material';
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="container mx-auto" style={{ backgroundColor: "white" }}>
      <div className="grid grid-12">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className='custom-appbar flex justify-center' sx={{ backgroundColor: "white" }}>
            <div className="grid grid-cols-12 gap-4 border flex items-center justify-center">
              <div className="col-span-2 sm:col-span-2 flex items-center justify-center  ">
                <i className="fa-solid fa-magnifying-glass text-black text-2xl  "></i>
              </div>

              <div className="col-span-8 sm:col-span-8 flex items-center justify-center border ">
                <img src="nextbuy-premium-clothing-logo.png" alt="Logo" className="w-auto h-25" />
              </div>

              <div className="col-span-2 sm:col-span-2 flex items-center justify-evenly">
                {/* Corrected Link component with 'to' prop */}
                <Link to="/login">
                  <i className="fa-solid fa-user text-black" style={{ fontSize: "20px", cursor: "pointer" }}></i>
                </Link>
                <i className="fa-regular fa-heart text-black" style={{ fontSize: "20px", cursor: "pointer" }}></i>
                <i className="fa-solid fa-arrows-turn-right text-black" style={{ fontSize: "20px", cursor: "pointer" }}></i>
                <i className="fa-solid fa-bag-shopping text-black" style={{ fontSize: "20px", cursor: "pointer" }}></i>
              </div>
            </div>
          </AppBar>
        </Box>
      </div>
    </div>
  );
}
