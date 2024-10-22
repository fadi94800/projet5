import React from 'react';
import Header from '../../Composants/Header/header';
import Footer from '../../Composants/Footer/footer';
import CollapsibleSection from '../../Composants/CollapsibleSection/CollapsibleSection';
import './About.scss';

function About() {
  return (
    <div className="about">
      <Header />
      <section className="about-content">
      <div class="bannier"></div>
        <div className="value-section">
          <CollapsibleSection title="Fiabilité">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</CollapsibleSection>
          <CollapsibleSection title="Respect">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraîne une exclusion de notre plateforme.</CollapsibleSection>
          <CollapsibleSection title="Service">La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</CollapsibleSection>
          <CollapsibleSection title="Sécurité">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</CollapsibleSection>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
