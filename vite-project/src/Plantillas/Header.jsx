import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>URPhone</Link>
        </Typography>
        <IconButton color="inherit" component={Link} to="/carrito">
          <ShoppingCartIcon />
        </IconButton>
        <Button color="inherit">Iniciar sesión</Button>
        <Button color="inherit">Registrar</Button>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={Link} to="/apple" onClick={handleClose}>Apple</MenuItem>
          <MenuItem component={Link} to="/samsung" onClick={handleClose}>Samsung</MenuItem>
          <MenuItem component={Link} to="/xiaomi" onClick={handleClose}>Xiaomi</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
