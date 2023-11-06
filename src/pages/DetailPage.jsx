import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css";

// FIREBASE
import { db } from "../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

// COMPONENTS
import CardDetail from "../components/CardDetail/CardDetail"

const PaddleDetailPage = () => {
  const [paddleData, setPaddleData] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    const getPaddles = async () => {
      const q = query(collection(db, "paddles"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id }); 
      });
      setPaddleData(docs);
    };
    getPaddles();
  }, [id]);

  return (
    <div className="Detailpaddle">
      {paddleData.map((paddle) => {
        return <CardDetail paddle={paddle} key={paddle.id} />;
      })}
    </div>
  );
};

export default PaddleDetailPage;