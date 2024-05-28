import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Producto 1', price: 100, quantity: 1 },
    { id: 2, name: 'Producto 2', price: 200, quantity: 2 },
  ]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map(item => 
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemoveItem = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center" minHeight="100vh" pr={4}>
    <Container maxWidth="sm" style={{ textAlign: 'right' }}>
      <Typography variant="h4" gutterBottom>
        Carrito de Compras
      </Typography>
      <List>
        {cartItems.map(item => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`$${item.price}`} />
            <TextField
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
              inputProps={{ min: 1 }}
              style={{ width: '50px', marginRight: '10px' }}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveItem(item.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Grid container spacing={2} justifyContent="flex-end" alignItems="center">
        <Grid item>
          <Typography variant="h6">
            Total: ${total}
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" component={Link} to="/checkout">
            Proceder al Pago
          </Button>
        </Grid>
      </Grid>
    </Container>
  </Box>
  );
};

export default Cart;
