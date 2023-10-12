import { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from 'react-router-dom';
import CardProduct from "../components/CardProduct/CardProduct";

const DetailPage = () => {
    let { id } = useParams();
    console.log("id", id)
  const [prod, setProd] = useState ([]);
    console.log(prod)

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((res) => setProd(res.data))
  },[id])
  return (
    <div>
        <h1>DETALLE DEL PRODUCTO</h1>
        <div style={{display: "flex", justifyContent: "center", margin: 20}}>
          {prod.id ? <CardProduct prod={prod}/> : null}
        </div>
      </div>   
  );
};

export default DetailPage;