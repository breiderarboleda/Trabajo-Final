import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CellPhoneCard = ({ name, description, image }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CellPhoneCard;
