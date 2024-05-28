import React from 'react';
import Grid from '@mui/material/Grid';
import CellPhoneCard from '../Componentes/Cell';import Button from '@mui/material/Button'; 
import { Link } from 'react-router-dom';

const samsungPhones = [
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

  }
];

const SamsungPage = () => {
  return (
    <Grid container spacing={4} justifyContent="center" sx={{ padding: '2rem', marginTop: '2rem', marginBottom: '4rem' }}>
      {samsungPhones.map((phone, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
           <CellPhoneCard name={phone.name} image={phone.image} link={phone.link}>
          <Button variant="contained" color="primary" component={Link} to={`/phone/${index + 4}`} sx={{
            backgroundColor: 'transparent',
            border: '1px  #007bff',
            color: ' #007bff',
            padding: '10px 20px',
            borderRadius: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1rem',
            color: 'black',
            fontFamily: 'Helvetica, Arial',
          }}>Ver</Button>        
          </CellPhoneCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default SamsungPage;
