// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardProduct = ({ button, paddle }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
        
          component="img"
          image={paddle.img}
          alt="Paleta"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {paddle.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {paddle.type}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            ${paddle.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {button}
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardProduct