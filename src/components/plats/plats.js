import React, { useState } from 'react';
import './plats.css';
import { v4 as uuidv4 } from "uuid";


function Menu() {
  const [category, setCategory] = useState('entrees');

  const handleClick = (event) => {
    setCategory(event.target.name);
  };

  const products = [
    {
      id: uuidv4(),
      category: 'entrees',
      name: 'Salade de chèvre chaud',
      image: '../images/salade_chevre_chaud.png',
      price: 8.5,
    },
    {
      id: uuidv4(),
      category: 'entrees',
      name: "Soupe à l'oignon",
      image: '../images/soupe_oignon.png',
      price: 6.5,
    },
    {
      id: uuidv4(),
      category: 'entrees',
      name: 'Tartare de saumon',
      image: '../images/tartare_saumon.png',
      price: 10.5,
    },
    {
      id: uuidv4(),
      category: 'entrees',
      name: 'Carpaccio de boeuf',
      image: '../images/carpaccio_boeuf.png',
      price: 12.5,
    },
    {
      id: uuidv4(),
      category: 'entrees',
      name: 'Foie gras mi-cuit',
      image: '../images/foie_gras.png',
      price: 14.5,
    },
    {
      id: uuidv4(),
      category: 'plats',
      name: 'Boeuf bourguignon',
      image: '../images/boeuf_bourguignon.png',
      price: 15.5,
    },
    {
      id: uuidv4(),
      category: 'plats',
      name: 'Poulet rôti',
      image: '../images/poulet_roti.png',
      price: 12.5,
    },
    {
      id: uuidv4(),
      category: 'plats',
      name: 'Risotto aux champignons',
      image: '../images/risotto_champignons.png',
      price: 13.5,
    },
    {
      id: uuidv4(),
      category: 'plats',
      name: 'Pâtes carbonara',
      image: '../images/pates_carbonara.png',
      price: 11.5,
    },
    {
      id: uuidv4(),
      category: 'plats',
      name: 'Saumon grillé',
      image: '../images/saumon_grille.png',
      price: 16.5,
    },
    {
      id: uuidv4(),
      category: 'desserts',
      name: 'Crème brûlée',
      image: '../images/creme_brulee.png',
      price: 5.5,
    },
    {
      id: uuidv4(),
      category: 'desserts',
      name: 'Tarte tatin',
      image: '../images/tarte_tatin.png',
      price: 6.5,
    },
    {
      id: uuidv4(),
      category: 'desserts',
      name: 'Fondant au chocolat',
      image: '../images/fondant_chocolat.png',
      price: 7.5,
    },
    {
      id: uuidv4(),
      category: 'desserts',
      name: 'Crème glacée vanille',
      image: '../images/creme_glacee_vanille.png',
      price: 4.5,
    },
    {
      id: uuidv4(),
      category: 'desserts',
      name: 'Mousse au chocolat',
      image: '../images/mousse_chocolat.png',
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
