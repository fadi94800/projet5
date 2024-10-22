import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logementsData from '../../logement.json';
import Header from '../../Composants/Header/header';
import Footer from '../../Composants/Footer/footer';
import Gallery from '../../Composants/Gallery/Gallery';
import CollapsibleSection from '../../Composants/CollapsibleSection/CollapsibleSection';
import './ProductPage.scss';

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedLogement, setSelectedLogement] = useState(null);

  useEffect(() => {
    const foundLogement = logementsData.find(logement => logement.id === id);
    
    if (foundLogement) {
      setSelectedLogement(foundLogement);
    } else {
      // Redirige vers la page d'erreur si l'ID est incorrect
      navigate('/error');
    }
  }, [id, navigate]);

  if (!selectedLogement) {
    return <div className="loading">Loading...</div>; // Message temporaire de chargement
  }

  return (
    <div className="product-page">
      <Header />

      <Gallery images={selectedLogement.pictures} />

      <div className='op1'>
        <div className="ooop">
          <h1 className="product-title">{selectedLogement.title}</h1>
          <div className="host-details">
            <span className="host-name">{selectedLogement.host.name}</span>
            <img src={selectedLogement.host.picture} alt={selectedLogement.host.name} className="host-image" />
          </div>
        </div>
        <p className="product-location">{selectedLogement.location}</p>
      </div>

      <div className='tags-cont'>
        <div className="tags-container">
          {selectedLogement.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <span key={index} className={`star ${index < selectedLogement.rating ? 'active' : 'inactive'}`}></span>
          ))}
        </div>
      </div>

      <div className="product-details">
        <CollapsibleSection title="Description">
          <p className="description-text">{selectedLogement.description}</p>
        </CollapsibleSection>

        <CollapsibleSection title="Équipements">
          <ul className="equipment-list">
            {selectedLogement.equipments.map((equipment, index) => (
              <li key={index} className="equipment-item">{equipment}</li>
            ))}
          </ul>
        </CollapsibleSection>
      </div>

      <Footer />
    </div>
  );
}

export default ProductPage;
