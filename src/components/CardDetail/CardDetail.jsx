// import * as React from 'react';
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

//COMPONENT
import ItemCount from "../ItemCount/ItemCount";


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';


const CardProduct = ({ paddle }) => {
  
  const { addToCart, getQuantityById } = useContext( CartContext )

  const onAdd = ( cantidad ) => {

    const obj = {
      ...paddle,
      quantity: cantidad
    }

    addToCart( obj )
  };

  const quantity = getQuantityById(paddle.id)
  console.log(quantity)
  
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
        <ItemCount onAdd={onAdd} stock={paddle.stock} initial={quantity} />
      </CardActions>
    </Card>
  );
};

export default CardProduct