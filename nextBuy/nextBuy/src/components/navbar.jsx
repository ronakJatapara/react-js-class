import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import "../style/navbar.css"
// import { Link } from '@mui/material';
import { Link } from "react-router-dom"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mobileMenu = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        <ListItem>
          <Link to="/login" className="w-full text-center py-2">
            <i className="fa-solid fa-user mr-2"></i>
            Login
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/wishlist" className="w-full text-center py-2">
            <i className="fa-regular fa-heart mr-2"></i>
            Wishlist
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/compare" className="w-full text-center py-2">
            <i className="fa-solid fa-arrows-turn-right mr-2"></i>
            Compare
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/cart" className="w-full text-center py-2">
            <i className="fa-solid fa-bag-shopping mr-2"></i>
            Cart
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="w-full mx-auto bg-white" id='navbar'>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className='custom-appbar' sx={{ backgroundColor: "white" }}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-12 gap-2 md:gap-4 py-2 items-center">
              <div className="col-span-2 lg:col-span-2 flex items-center">
                <div className="block lg:hidden">
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ color: 'black' }}
                  >
                    <MenuIcon />
                  </IconButton>
                </div>
                <i className="fa-solid fa-magnifying-glass text-black text-xl md:text-2xl hidden lg:block"></i>
              </div>

              <div className="col-span-8 lg:col-span-8 flex items-center justify-center">
                <img 
                  src="nextbuy-premium-clothing-logo.png" 
                  alt="Logo" 
                  className="w-auto h-12 md:h-16 lg:h-20" 
                />
              </div>

              <div className="col-span-2 lg:col-span-2 hidden lg:flex items-center justify-evenly">
                <Link to="/login">
                  <i className="fa-solid fa-user text-black hover:text-gray-600 transition-colors" style={{ fontSize: "20px", cursor: "pointer" }}></i>
                </Link>
                <i className="fa-regular fa-heart text-black hover:text-gray-600 transition-colors" style={{ fontSize: "20px", cursor: "pointer" }}></i>
                <i className="fa-solid fa-arrows-turn-right text-black hover:text-gray-600 transition-colors" style={{ fontSize: "20px", cursor: "pointer" }}></i>
                <i className="fa-solid fa-bag-shopping text-black hover:text-gray-600 transition-colors" style={{ fontSize: "20px", cursor: "pointer" }}></i>
              </div>
            </div>
          </div>
        </AppBar>
      </Box>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {mobileMenu}
      </Drawer>
    </div>
  );
}
