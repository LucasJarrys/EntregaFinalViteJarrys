// import React from 'react';
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return <nav>
    <ul>
        <li>Home</li>
        <li>Contacto</li>
        <li>Nosotros</li>
        <li>
          <CartWidget />
        </li>
    </ul>
    </nav>;

};

export default NavBar;