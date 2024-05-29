import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Producto 1', price: 100, quantity: 1 },
    { id: 2, name: 'Producto 2', price: 200, quantity: 2 },
  ]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
        backgroundColor: '#ffffff',
        padding: '20px',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h5" align="center" gutterBottom>
          Carrito de Compras
        </Typography>
        <Table>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Typography variant="body1">{item.name}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body1">${item.price}</Typography>
                </TableCell>
                <TableCell align="right">
                  <TextField
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.e.target.value))}
                    inputProps={{ min: 1 }}
                    sx={{ width: '80px' }}
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleRemoveItem(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item xs={6}>
            <Typography variant="h6" align="right">
              Total: ${total}
            </Typography>
          </Grid>
          <Box display="flex" justifyContent="space-between" width="96%" mt={3}>
                <Button variant="contained" color="primary" onClick={goBack}>
                  Volver
                </Button>
                <Button variant="contained" color="secondary" component={Link} to="/checkout">
                  Proceder al pago
                </Button>
              </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cart;
