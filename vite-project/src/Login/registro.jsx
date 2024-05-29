import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, Container, Grid, Box } from '@mui/material';

const RegistroPage = () => {
  const [form, setForm] = useState({
    nombre: '',
    correo: '', 
    contrasena: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5173/registro.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
        mode: 'no-cors',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="70vh" width="90vw">
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
                name="correo" 
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={form.correo}
                onChange={handleChange}
                required  
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="contrasena"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={form.contrasena}
                onChange={handleChange}
                required  
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                component={Link}
                to="/inicio"
              >
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
