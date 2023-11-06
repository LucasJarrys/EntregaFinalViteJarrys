// import React from 'react';
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import Acordeon from "../Acordeon/Acordeon";
import { Link } from "react-router-dom";


const NavBar = () => {
  return <nav>
    <ul>
        <Link className="li" to="/">HOME</Link>
        <Link className="li" to="/Contacto">CONTACTO</Link>
        <Link className="li" to="/Nosotros">NOSOTROS</Link>
        <Acordeon />
        <Link to="Carrito" className="li">
          <CartWidget />
        </Link>
    </ul>
    </nav>;

};

export default NavBar;