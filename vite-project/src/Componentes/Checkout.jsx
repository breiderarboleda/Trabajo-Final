import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [open, setOpen] = useState(false);

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
    setOpen(true); // Mostrar el diálogo de confirmación
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/'); // Redirigir a la página de inicio o cualquier otra página
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" width="90vw">
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Proceso de pago
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                label="Nombre"
                variant="outlined"
                fullWidth
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="lastName"
                label="Apellido"
                variant="outlined"
                fullWidth
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="address"
                label="Usuario"
                variant="outlined"
                fullWidth
                value={form.address}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="city"
                label="Ciudad"
                variant="outlined"
                fullWidth
                value={form.city}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="zip"
                label="Codigo postal"
                variant="outlined"
                fullWidth
                value={form.zip}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="cardName"
                label="Banco"
                variant="outlined"
                fullWidth
                value={form.cardName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="cardNumber"
                label="Tarjeta"
                variant="outlined"
                fullWidth
                value={form.cardNumber}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="cvv"
                label="Cedula"
                variant="outlined"
                fullWidth
                value={form.cvv}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" color="primary" sx={{ height: 55, width: 268 }} fullWidth>
                Pagar
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="secondary" onClick={goBack} fullWidth>
                Volver
              </Button>
            </Grid>
          </Grid>
        </form>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Pago Realizado</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Su pago ha sido realizado correctamente.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cerrar
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Checkout;
