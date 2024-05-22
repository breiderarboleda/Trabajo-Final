import React from 'react';
import Grid from '@mui/material/Grid';
import CellPhoneCard from '../Cell';
import Button from '@mui/material/Button'; 
import { Link } from 'react-router-dom';


const applePhones = [
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
 
    }
];

const ApplePage = () => {
 return (
    <Grid container spacing={4} justifyContent="center" sx={{ padding: '2rem', marginTop: '2rem', marginBottom: '4rem' }}>
      {applePhones.map((phone, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CellPhoneCard name={phone.name} image={phone.image} link={phone.link} />
          <Button variant="contained" color="primary" component={Link} to={`/phone/${index}`} sx={{ marginTop: '1rem' }}>Ver</Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default ApplePage;
