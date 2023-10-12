// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardProduct = ({ prod, button }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
        sx={{ height: 140 }}
          component="img"
          image={prod.image}
          alt="Paleta"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {prod.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* {description} */}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            ${prod.price}
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