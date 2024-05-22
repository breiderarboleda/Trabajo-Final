import React from 'react';
import Grid from '@mui/material/Grid';
import CellPhoneCard from '../Cell';
import Button from '@mui/material/Button'; 
import { Link } from 'react-router-dom';

const xiaomiPhones = [
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

  }
];

const XiaomiPage = () => {
  return (
    <Grid container spacing={4} justifyContent="center" sx={{ padding: '2rem', marginTop: '2rem', marginBottom: '4rem' }}>
      {xiaomiPhones.map((phone, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CellPhoneCard name={phone.name} image={phone.image} link={phone.link} />
          <Button variant="contained" color="primary" component={Link} to={`/phone/${index}`} sx={{ marginTop: '1rem' }}>Ver</Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default XiaomiPage;
