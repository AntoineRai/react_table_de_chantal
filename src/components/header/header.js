import React from 'react';
import  {Link}  from "react-router-dom";
import './header.css'

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="../images/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/menu">Nos plats</Link></li>
          <li><Link to="/boissons">Nos boissons</Link></li>
          <li><Link to="/contact">Nous contacter</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;