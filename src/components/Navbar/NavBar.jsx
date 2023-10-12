// import React from 'react';
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import Acordeon from "../Acordeon/Acordeon";
import { Link } from "react-router-dom";


const NavBar = () => {
  return <nav>
    <ul>
        <Link className="li" to="/">Home</Link>
        <Link className="li" to="/Contacto">Contacto</Link>
        <Link className="li" to="/Nosotros">Nosotros</Link>
        <Acordeon/>
        <li className="li">
          <CartWidget />
        </li>
    </ul>
    </nav>;

};

export default NavBar;