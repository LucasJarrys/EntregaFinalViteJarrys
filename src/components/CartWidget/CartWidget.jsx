// import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from '@mui/material/Badge';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {
  
 const { getTotalItems } = useContext ( CartContext )

  return (
    <div>
      <Badge badgeContent={getTotalItems()} showZero color="primary">
      <ShoppingCartIcon/>
      </Badge>
    </div>
  );
};

export default CartWidget;
