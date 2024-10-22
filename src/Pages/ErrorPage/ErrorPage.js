import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';
import Header from '../../Composants/Header/header';
import Footer from '../../Composants/Footer/footer'; 


function ErrorPage() {
  return (
    <div className="error-page">
      <Header />
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <div className='error-link'>
      <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
