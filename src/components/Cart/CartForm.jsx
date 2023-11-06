import { useState } from "react";
//CSS
import "./Cart.css";

//FIREBASE
import {
  serverTimestamp,
  addDoc,
  collection,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

//COMPONENT
import TextField from "@mui/material/TextField";
import Checkbox from "../CheckBox/CheckBox"

const FormCheckOut = ({ cart, total, clearCart, setOrderId }) => {
  const [userInfo, setUserInfo] = useState({ email: "", name: "", lastname: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: userInfo,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const orderCollection = collection(db, "orders");

    // ACA CREAMOS LA ORDEN DE COMPRA EN LA COLECCION ORDERS
    addDoc(orderCollection, order)
      .then((res) => setOrderId(res.id))
      .catch((err) => console.log(err));

    clearCart();
  };

  return (
    <div>
      <form className="Form" onSubmit={handleSubmit}>
          <TextField
          placeholder="Nombre"
          style={{ margin: 10, width: 300 }}
          name="name"
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          required //requiere completar el campo para enviar
          />
        <TextField
          placeholder="Apellido"
          style={{ margin: 10, width: 300 }}
          name="lastName"
          onChange={(e) => setUserInfo({ ...userInfo, lastname: e.target.value })}
          required //requiere completar el campo para enviar
        />
        <TextField
          placeholder="Email"
          style={{ margin: 10, width: 300 }}
          name="email"
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          required //requiere completar el campo para enviar
        />
         <Checkbox
        required
        />
        <button className="btnASendAction">comprar</button>
      </form>
    </div>
  );
};
export default FormCheckOut;