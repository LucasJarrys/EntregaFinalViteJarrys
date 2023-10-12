// import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import CardProduct from "../CardProduct/CardProduct";
import "./ItemListContainer.css";
import {Link} from "react-router-dom"

const ItemListContainer = () => {
  const [prods, setProds] = useState ([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) => setProds(res.data))
  }, []);
  return (
    <div className="Cards-List">
        {prods.map((prod) => {
          return(
            
            <div key={prod.id}>
              <Link to={`/detail/${prod.id}`}>
                <CardProduct prod={prod} 
              button="Agregar al carrito"/>
              </Link>
            </div>
          )
          })}
      </div>
  )
}

export default ItemListContainer