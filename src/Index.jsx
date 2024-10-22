import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About'; 
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import ProductPage from './Pages/ProductPage/ProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
        <Route path="/about" element={<About />} /> {/* Route pour la page About */}
        <Route path="*" element={<ErrorPage />} /> {/* Cette ligne attrape toutes les routes non définies */}
        <Route path="/Product/:id" element={<ProductPage />} />

      </Routes>
    </Router>
  );
}

export default App;
