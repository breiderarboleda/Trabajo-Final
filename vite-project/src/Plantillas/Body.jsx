import React from 'react';
import Grid from '@mui/material/Grid';
import CellPhoneCard from '../Cell';
import Button from '@mui/material/Button'; 
import { Link } from 'react-router-dom';

const phones = [
  {
    name: 'Iphone 15 pro max',
    image: 'https://tiendasishop.com/media/catalog/product/i/p/iphone_15_pro_max_blue_titanium_pdp_image_position-1__coes_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700',

  },
  {
    name: 'Iphone 15',
    image: 'https://tiendasishop.com/media/catalog/product/i/p/iphone15_blue_pdp_image_position-1__coes.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700',

  },
  {
    name: 'Iphone 14 pro',
    image: 'https://www.wom.co/media/catalog/product/cache/3256a9de7286b3bbe6e52f27a1fe5818/i/p/iphone_14_pro.jpg',

  },
  {
    name: 'Iphone 13 pro max',
    image: 'https://exitocol.vtexassets.com/arquivos/ids/21014905/iphone-13-pro-max-128-gb-reacondicionado-color-azul-sierra-1028524340.jpg?v=638409706908530000',

  },
  {
    name: 'Samsung Galaxy S24 Ultra',
    image: 'https://exitocol.vtexassets.com/arquivos/ids/21685430/samsung-galaxy-s24-ultra-1028615660.jpg?v=638442095723100000',

  },
  {
    name: 'Samsung Galaxy S23',
    image: 'https://www.alkosto.com/medias/8806094710748-001-820Wx820H?context=bWFzdGVyfGltYWdlc3wxNjMxNHxpbWFnZS93ZWJwfGFETmhMMmhoTWk4eE5ETTBNVGcxT1Rnd016RTJOaTg0T0RBMk1EazBOekV3TnpRNFh6QXdNVjg0TWpCWGVEZ3lNRWd8NDFiNTRhOTUzM2NlZDI0NjU5OWJmNTUwZGQzMjQ4MDU4YmFiNjQ5MWJiODFjZGNhZWM0MmY1NTNmODAxYzBkYQ',

  },
  {
    name: 'Samsung Galaxy Z Flip 5',
    image: 'https://tienda.movistar.com.co/media/catalog/product/cache/ebd1de6550e0d0b8d8c505e2a09b56c4/g/a/galaxyzflip5001negro.jpg',
 
  },
  {
    name: 'Samsung Galaxy S23 Ultra',
    image: 'https://exitocol.vtexassets.com/arquivos/ids/19905974/celular-samsung-galaxy-s23-ultra-256gb12gb-negro-1028229130.jpg?v=638324713459700000',

  },
  {
    name: 'Xiaomi - Redmi 13C',
    image: 'https://tienda.movistar.com.co/media/catalog/product/cache/ebd1de6550e0d0b8d8c505e2a09b56c4/x/i/xioami-redmi-13c4-128gb-negro-01_2.jpg',

  },
  {
    name: 'Xiaomi 4 Ultra',
    image: 'https://celularesimportados.com.co/wp-content/uploads/2024/04/xiaomi-14-ultra-black.jpg',

  },
  {
    name: 'Xiaomi note 13 pro',
    image: 'https://tienda.movistar.com.co/media/catalog/product/cache/ebd1de6550e0d0b8d8c505e2a09b56c4/x/i/xiaomi-redmi-note-13-pronegro01_1.jpg',

  },
  {
    name: 'Xiaomi - Redmi 12',
    image: 'https://exitocol.vtexassets.com/arquivos/ids/21342789/celular-xiaomi-redmi-12-sky-blue-4gb-128ram-1028568990.jpg?v=638423255498970000',

  },
];

const Body = () => {
  return (
    <Grid container spacing={4} justifyContent="center" sx={{ padding: '2rem', marginTop: '2rem', marginBottom: '2rem' }}>
      {phones.map((phone, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CellPhoneCard name={phone.name} image={phone.image} link={phone.link} />
          <Button variant="contained" color="primary" component={Link} to={`/phone/${index}`} sx={{ marginTop: '1rem' }}>Ver</Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Body;
