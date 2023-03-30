import React, { useState } from 'react';
import './boissons.css';

function Menu() {
  const [category, setCategory] = useState('sans alcool');

  const handleClick = (event) => {
    setCategory(event.target.name);
  };

  const products = [
    {
      id: 'a1b2c3',
      category: 'sans alcool',
      name: 'Virgin Mojito',
      image: '../images/virgin_mojito.png',
      price: 5.5,
    },
    {
      id: 'd4e5f6',
      category: 'sans alcool',
      name: "Eau du robinet",
      image: '../images/eau.png',
      price: 0,
    },
    {
      id: 'g7h8i9',
      category: 'sans alcool',
      name: 'Coca',
      image: '../images/coca.png',
      price: 3,
    },
    {
      id: 'j1k2l3',
      category: 'avec alcool',
      name: 'Jupiler',
      image: '../images/jupiler.png',
      price: 4,
    },
    {
      id: 'm4n5o6',
      category: 'avec alcool',
      name: 'Orval',
      image: '../images/orval.png',
      price: 5,
    },
  ];

  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <div className="menu-container">
        <h1>Nos boissons</h1>
      <div className="selection-container">
        <button name="sans alcool" onClick={handleClick}>Sans alcool</button>
        <button name="avec alcool" onClick={handleClick}>Avec alcool</button>
      </div>
      <div className="products-container">
        {filteredProducts.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} €</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
