import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';

const ProfilePage = ({ isLoggedIn, onLogout }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="70vh">
      <Box>
        <Typography variant="h4" gutterBottom>
          Perfil de Usuario
        </Typography>
        <Typography variant="body1" gutterBottom>
          {isLoggedIn ? 'Has iniciado sesión.' : 'No has iniciado sesión.'}
        </Typography>
        {isLoggedIn ? (
          <Button variant="contained" color="primary" onClick={onLogout}>
            <Link to="/">Cerrar Sesión</Link>
          </Button>
        ) : (
          <Typography variant="body2">
            ¿Quieres iniciar sesión? <Link to="/inicio">Haz clic aquí</Link>
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ProfilePage;
