import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Box, Button, Typography, List, ListItem, ListItemText, Divider, Container, Grid } from '@mui/material';

const PhoneDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const phoneSpecs = {
    0: {
      name: 'Iphone 15 pro max',
      color: 'Azul Titanio',
      price: '$1500',
      screenSize: '6.7 pulgadas',
      camera: 'Triple cámara de 12MP',
      storage: '512GB',
      image: 'https://tiendasishop.com/media/catalog/product/i/p/iphone_15_pro_max_blue_titanium_pdp_image_position-1__coes_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700',
    },
    1: {
      name: 'Iphone 15',
      color: 'Azul',
      price: '$1200',
      screenSize: '6.1 pulgadas',
      camera: 'Doble cámara de 12MP',
      storage: '256GB',
      image: 'https://tiendasishop.com/media/catalog/product/i/p/iphone15_blue_pdp_image_position-1__coes.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700',
    },
    2: {
      name: 'Iphone 14 pro',
      color: 'Gris',
      price: '$1100',
      screenSize: '6.5 pulgadas',
      camera: 'Triple cámara de 12MP',
      storage: '256GB',
      image: 'https://www.wom.co/media/catalog/product/cache/3256a9de7286b3bbe6e52f27a1fe5818/i/p/iphone_14_pro.jpg',
    },
    3: {
      name: 'Iphone 13 pro max',
      color: 'Gris Espacial',
      price: '$1000',
      screenSize: '6.7 pulgadas',
      camera: 'Triple cámara de 12MP',
      storage: '256GB',
      image: 'https://exitocol.vtexassets.com/arquivos/ids/21014905/iphone-13-pro-max-128-gb-reacondicionado-color-azul-sierra-1028524340.jpg?v=638409706908530000',
    },
    4: {
      name: 'Samsung Galaxy S24 Ultra',
      color: 'Negro',
      price: '$1400',
      screenSize: '6.8 pulgadas',
      camera: 'Quíntuple cámara de 108MP',
      storage: '512GB',
      image: 'https://exitocol.vtexassets.com/arquivos/ids/21685430/samsung-galaxy-s24-ultra-1028615660.jpg?v=638442095723100000',
    },
    5: {
      name: 'Samsung Galaxy S23',
      color: 'Gris',
      price: '$1200',
      screenSize: '6.5 pulgadas',
      camera: 'Cuádruple cámara de 64MP',
      storage: '256GB',
      image: 'https://www.alkosto.com/medias/8806094710748-001-820Wx820H?context=bWFzdGVyfGltYWdlc3wxNjMxNHxpbWFnZS93ZWJwfGFETmhMMmhoTWk4eE5ETTBNVGcxT1Rnd016RTJOaTg0T0RBMk1EazBOekV3TnpRNFh6QXdNVjg0TWpCWGVEZ3lNRWd8NDFiNTRhOTUzM2NlZDI0NjU5OWJmNTUwZGQzMjQ4MDU4YmFiNjQ5MWJiODFjZGNhZWM0MmY1NTNmODAxYzBkYQ',
    },
    6: {
      name: 'Samsung Galaxy Z Flip 5',
      color: 'Negro',
      price: '$1300',
      screenSize: '6.7 pulgadas',
      camera: 'Doble cámara de 12MP',
      storage: '256GB',
      image: 'https://tienda.movistar.com.co/media/catalog/product/cache/ebd1de6550e0d0b8d8c505e2a09b56c4/g/a/galaxyzflip5001negro.jpg',
    },
    7: {
      name: 'Samsung Galaxy S23 Ultra',
      color: 'Negro',
      price: '$1500',
      screenSize: '6.9 pulgadas',
      camera: 'Quíntuple cámara de 108MP',
      storage: '1TB',
      image: 'https://exitocol.vtexassets.com/arquivos/ids/19905974/celular-samsung-galaxy-s23-ultra-256gb12gb-negro-1028229130.jpg?v=638324713459700000',
    },
    8: {
      name: 'Xiaomi - Redmi 13C',
      color: 'Negro',
      price: '$700',
      screenSize: '6.6 pulgadas',
      camera: 'Triple cámara de 64MP',
      storage: '128GB',
      image: 'https://tienda.movistar.com.co/media/catalog/product/cache/ebd1de6550e0d0b8d8c505e2a09b56c4/x/i/xioami-redmi-13c4-128gb-negro-01_2.jpg',
    },
    9: {
      name: 'Xiaomi 14 Ultra',
      color: 'Negro',
      price: '$800',
      screenSize: '6.8 pulgadas',
      camera: 'Quíntuple cámara de 108MP',
      storage: '512GB',
      image: 'https://celularesimportados.com.co/wp-content/uploads/2024/04/xiaomi-14-ultra-black.jpg',
    },
    10: {
      name: 'Xiaomi note 13 pro',
      color: 'Negro',
      price: '$900',
      screenSize: '6.7 pulgadas',
      camera: 'Cuádruple cámara de 108MP',
      storage: '256GB',
      image: 'https://tienda.movistar.com.co/media/catalog/product/cache/ebd1de6550e0d0b8d8c505e2a09b56c4/x/i/xiaomi-redmi-note-13-pronegro01_1.jpg',
    },
    11: {
      name: 'Xiaomi - Redmi 12',
      color: 'Azul',
      price: '$600',
      screenSize: '6.5 pulgadas',
      camera: 'Triple cámara de 48MP',
      storage: '256GB',
      image: 'https://exitocol.vtexassets.com/arquivos/ids/21342789/celular-xiaomi-redmi-12-sky-blue-4gb-128ram-1028568990.jpg?v=638423255498970000',
    },
  };

  const phoneData = phoneSpecs[id];

  if (!phoneData) {
    return <div>No se encontraron detalles para este teléfono.</div>;
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        marginTop: '20px',
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center" p={2}>
              <Typography variant="h4" gutterBottom>{phoneData.name}</Typography>
              <img
                src={phoneData.image}
                alt={phoneData.name}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '10px' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box p={2}>
              <Typography variant="h5" gutterBottom>Especificaciones:</Typography>
              <List>
                <ListItem disableGutters>
                  <ListItemText primary={`Color: ${phoneData.color}`} />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary={`Precio: ${phoneData.price}`} />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary={`Tamaño de pantalla: ${phoneData.screenSize}`} />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary={`Cámara: ${phoneData.camera}`} />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary={`Almacenamiento: ${phoneData.storage}`} />
                </ListItem>
              </List>
              <Box display="flex" justifyContent="space-between" width="100%" mt={3}>
                <Button variant="contained" color="primary" onClick={goBack}>
                  Volver
                </Button>
                <Button variant="contained" color="secondary" component={Link} to="/cart">
                  Agregar al carrito
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Divider variant="middle" sx={{ mt: 2, mb: 2 }} /> {}
      </Container>
    </Box>
  );
};

export default PhoneDetailsPage;

 