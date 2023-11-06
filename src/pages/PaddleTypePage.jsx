import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"

import { useParams } from "react-router-dom";
// FIREBASE
import { db } from "../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

import "./PaddleTypePage.css";

// COMPONENTS

import CardProduct from "../components/CardProduct/CardProduct";

const PaddleTypePage = () => {
  const [paddlesData, setPaddlesData] = useState([]);

  const { type } = useParams(); 

  useEffect(() => {
    const getPaddles = async () => {
      const q = query(
        collection(db, "paddles"),
        where("type", "==", type)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setPaddlesData(docs);
    };
    getPaddles();
  }, [type]);

  return (
    <div className="PositionType">
      {paddlesData.map((paddle) => {
        return (
          <div key={paddle.id}>
            <Link to={`/detail/${paddle.id}`} key={paddle.id} style={{ textDecoration: "none" }}>
              <CardProduct paddle={paddle} key={paddle.id} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PaddleTypePage;


