import React, { useState } from 'react';
import './Gallery.scss';

function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (images.length > 1) {  // Active la navigation seulement si plus d'une image
      const isFirstImage = currentIndex === 0;
      const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  };

  const goToNext = () => {
    if (images.length > 1) {  // Active la navigation seulement si plus d'une image
      const isLastImage = currentIndex === images.length - 1;
      const newIndex = isLastImage ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="gallery">
      {images.length > 1 && (  // Affiche les flèches uniquement si plus d'une image
        <button onClick={goToPrevious} className="left-arrow"></button>
      )}
      <img src={images[currentIndex]} alt="Gallery" className="gallery-image" />
      {images.length > 1 && (  // Affiche les flèches uniquement si plus d'une image
        <button onClick={goToNext} className="right-arrow"></button>
      )}
      {images.length > 1 && (
        <div className="image-counter">{`${currentIndex + 1} / ${images.length}`}</div>
      )}
    </div>
  );
}

export default Gallery;
