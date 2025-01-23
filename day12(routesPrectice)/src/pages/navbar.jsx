    import * as React from 'react';
    import AppBar from '@mui/material/AppBar';
    import Box from '@mui/material/Box';
    import Toolbar from '@mui/material/Toolbar';
    import Typography from '@mui/material/Typography';
    import Button from '@mui/material/Button';
    import IconButton from '@mui/material/IconButton';
    import MenuIcon from '@mui/icons-material/Menu';
    import "./navbar.css";
    import { Link } from "react-router-dom";
    
    function Nav() {
    return (
    <>
    <div className="box">
    <Box  sx={{
        width:'100%'
     }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
          
            {/* <Button color="inherit">Form</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Login</Button> */}

          <Link to="/form" style={{color:"white" , fontSize:"18px"}}>Form </Link>
          <Link to="/product" style={{color:"white" , fontSize:"18px" , paddingLeft:"20px"}}>Product </Link>









            </Toolbar>
        </AppBar>
        </Box>
    </div>
    </>
    );
    }


    export default Nav;





