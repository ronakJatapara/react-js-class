import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import "../style/navbar2.css"

export default function Navbar2() {
  return (
   <>
   <div className="container mx:auto bg-black"  style={{backgroundColor:"black"}} id='navbar2'>
    
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='text-black' style={{backgroundColor:"black"}}>
        <Toolbar>
         
          <Typography variant="h6" className="flex justify-center gap-10 text-sm" component="div" sx={{ flexGrow: 1 }}>
           <Link className='' to={"/"} style={{fontSize:"15px"}}>HOME</Link>
           <Link className=''  style={{fontSize:"15px"}}>BESTSELLER</Link>
           <Link className=''  style={{fontSize:"15px"}}>MEN</Link>
           <Link className=''  style={{fontSize:"15px"}}>WOMEN</Link>
           <Link className=''  style={{fontSize:"15px"}}>BLOGS</Link>


          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
   </div>
   </>
  );
}
