import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, backgroundColor: 'white', color: 'black'}}>
      <Toolbar>
        <Typography variant="body1" color="inherit" align="center" style={{ width: '100%' }}>
          © {new Date().getFullYear()} URPhone. Todos los derechos reservados.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
