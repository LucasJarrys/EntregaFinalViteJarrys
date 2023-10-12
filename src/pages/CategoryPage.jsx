import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from 'react-router-dom';
import CardProduct from "../components/CardProduct/CardProduct";

const CategoryPage = () => {
    const [prods, setProds] = useState ([]);

    let { categoryId } = useParams();

    useEffect(() => {
        axios("https://fakestoreapi.com/products").then((res) => setProds(res.data))
      }, []);

      let filteredProducts = prods.filter((prod) => {
        return prod.category === categoryId;
    });

  return (
    <div>
        <h1>Todo para el caballero</h1>
        <div className="Card-List">
            {filteredProducts.map((prod) => {
                return (
                    <div style={{margin: 10}} key={prod.id}>
                        <CardProduct prod={prod}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default CategoryPage