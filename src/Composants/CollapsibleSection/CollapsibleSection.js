import React, { useState } from 'react';
import './CollapsibleSection.scss'; // Assurez-vous que le chemin CSS est correct

function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false); // Contrôle l'état ouvert/fermé

  return (
    <div className="collapsible-section">
      <button className="collapsible-header" onClick={() => setIsOpen(!isOpen)}>
        {title} <span className={isOpen ? 'up-arrow' : 'down-arrow'}></span>
      </button>
      <div className={`collapsible-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default CollapsibleSection;
