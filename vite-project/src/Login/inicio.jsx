import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, Container, Grid, Box } from '@mui/material';

const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', form);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh',
        backgroundColor: '#f5f5f5',
        marginTop: '20px'
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom align="center">
          Iniciar Sesión
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={form.email}
                onChange={handleChange}
                required
                sx={{ backgroundColor: '#fff' }} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Contraseña"
                type="password"
                variant="outlined"
                fullWidth
                value={form.password}
                onChange={handleChange}
                required
                sx={{ backgroundColor: '#fff' }} 
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Iniciar Sesión
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" align="center">
                ¿No tienes una cuenta? <Link to="/registro" style={{ textDecoration: 'none', color: '#007bff' }}>Regístrate aquí
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
