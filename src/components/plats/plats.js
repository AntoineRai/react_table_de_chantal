import React, { useState } from 'react';
import './plats.css';

function Menu() {
  const [category, setCategory] = useState('entrees');

  const handleClick = (event) => {
    setCategory(event.target.name);
  };

  const products = [
    {
      id: 'a1b2c3',
      category: 'entrees',
      name: 'Salade de chèvre chaud',
      image: '../images/salade_chevre_chaud.png',
      price: 8.5,
    },
    {
      id: 'd4e5f6',
      category: 'entrees',
      name: "Soupe à l'oignon",
      image: '../images/soupe_oignon.png',
      price: 6.5,
    },
    {
      id: 'g7h8i9',
      category: 'plats',
      name: 'Boeuf bourguignon',
      image: '../images/boeuf_bourguignon.png',
      price: 15.5,
    },
    {
      id: 'j1k2l3',
      category: 'plats',
      name: 'Poulet rôti',
      image: '../images/poulet_roti.png',
      price: 12.5,
    },
    {
      id: 'm4n5o6',
      category: 'desserts',
      name: 'Crème brûlée',
      image: '../images/creme_brulee.png',
      price: 5.5,
    },
  ];

  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <div className="menu-container">
        <h1>Notre menu</h1>
      <div className="selection-container">
        <button name="entrees" onClick={handleClick}>Entrée</button>
        <button name="plats" onClick={handleClick}>Plat</button>
        <button name="desserts" onClick={handleClick}>Dessert</button>
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
