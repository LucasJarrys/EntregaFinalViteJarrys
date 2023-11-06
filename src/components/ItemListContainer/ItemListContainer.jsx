// import React from 'react'
import { useState, useEffect } from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./ItemListContainer.css";
import {Link} from "react-router-dom"

// DB Firestore
import { db } from "../../firebase/firebaseConfig";

// Firestore
import { collection, query, getDocs } from "firebase/firestore";


const ItemListContainer = () => {
  const [paddles, setpaddles] = useState ([]);

  useEffect(() => {
    const getPaddles = async () => {
      const q = query(collection(db, "paddles"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id});
      });
      setpaddles(docs)
    };
    getPaddles();

  }, []);
  return (
    <div className="Cards-List">
        {paddles.map((paddle) => {
          return(
            
            <div key={paddle.id}>
               <Link to={`detail/${paddle.id}`} key={paddle.id} style={{ textDecoration: "none" }}>
                <CardProduct paddle={paddle} 
              button="Detalle"/>
               </Link>
            </div>
          )
          })}
      </div>
  )
}

export default ItemListContainer