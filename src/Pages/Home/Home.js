import React from 'react';
import Header from '../../Composants/Header/header'; 
import Footer from '../../Composants/Footer/footer'; 
import './Home.scss'; 
import logements from '../../logement.json'; // Chemin vers ton fichier JSON
import { useNavigate } from 'react-router-dom'; // Pour la navigation

function Home() {
  const navigate = useNavigate(); // Utilisation de useNavigate pour la navigation

  // Redirige vers `/Product/{id}` au lieu de `/logement/{id}`
  const handleClick = (id) => {
    navigate(`/Product/${id}`); // Redirection vers la page spécifique du produit
  };

  return (
    <div className="home">
      <Header />
      
      {/* Section bannière */}
      <div className="banner">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>
      
      {/* Section des logements */}
      <div className="grid-container">
        {logements.map((logement) => (
          <div key={logement.id} className="location-card" onClick={() => handleClick(logement.id)}>
            <img src={logement.cover} alt={logement.title} className="location-image" />
            <div className="location-title">{logement.title}</div>
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
