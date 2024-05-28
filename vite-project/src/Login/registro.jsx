import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, Container, Grid, Box } from '@mui/material';

const RegistroPage = () => {
  const [form, setForm] = useState({
    nombre: '',
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
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="70vh"  width = "100vw">
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Registro
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="nombre"
                label="Nombre"
                variant="outlined"
                fullWidth
                value={form.nombre}
                onChange={handleChange}
                required
              />
            </Grid>
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={form.password}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Registrarse
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                ¿Ya tienes una cuenta? <Link to="/inicio">Inicia sesión aquí</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default RegistroPage;
