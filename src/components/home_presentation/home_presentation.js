import React from 'react';
import './home_presentation.css';

function HomePresentation() {
  return (
    <div className="container">
      <div className="image-container">
        <img className="rounded-image" src='../images/dessert.png' alt='Le dessert'/>
      </div>
      <div className="text-container">
        <h1>Des plats et desserts délicieux</h1>
        <p>Nos plats et desserts sont vraiment délicieux et savoureux, avec des ingrédients frais et des recettes originales.<br></br>
            Chaque bouchée est une explosion de saveurs et de textures, qui ravira vos papilles gustatives.<br></br>
            Nous sommes convaincus que vous allez adorer nos plats et desserts autant que nous les aimons !</p>
      </div>
      <div className="image-container">
        <img className="rounded-image" src='../images/chef.png' alt='Le chef'/>
      </div>
      <div className="text-container">
        <h1>Un chef en or</h1>
        <p>Notre chef est un passionné de cuisine, qui met tout son cœur et son savoir-faire dans chaque plat qu'il prépare. Il utilise des ingrédients frais et de qualité, et crée des recettes uniques et savoureuses, inspirées de ses voyages et de ses expériences culinaires.<br></br>
        Sa passion pour la cuisine se reflète dans chacun de ses plats, qui sont de véritables œuvres d'art culinaires.</p>
      </div>
    </div>
  );
}

export default HomePresentation;