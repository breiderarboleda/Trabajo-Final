import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom'; 
import Header from './Plantillas/Header';
import Footer from './Plantillas/Footer';
import Body from './Plantillas/Body';
import ApplePage from './Menu/Apple';
import SamsungPage from './Menu/Samsung';
import XiaomiPage from './Menu/Xiaomi';
import Cart from './Componentes/Cart';
import Checkout from './Componentes/Checkout';
import RegistroPage from './Login/registro';
import InicioSesionPage from './Login/inicio';
import PhoneDetailsPage from './Componentes/PhoneDetailsPage';
import UserProfile from './Componentes/Profile';
import Carousel from 'react-bootstrap/Carousel'; 
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

import SamsungImage from './Fotos/Samsung.jpg'; 
import AppleImage from './Fotos/Apple.jpg';
import XiaomiImage from './Fotos/Xiaomi.jpg';

import AlbumImage1 from './Fotos/Album1.jpg'; 
import AlbumImage2 from './Fotos/Album2.jpg'; 
import AlbumImage3 from './Fotos/Album3.jpg';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout}/>
        <main style={{ flexGrow: 1, padding: '1rem', maxWidth: '100%', margin: '0 auto', marginTop: '5rem', marginBottom: '5rem' }}>
          <Routes>
            <Route path="/" element={<BodyWithCarousel />} />
            <Route path="/apple" element={<ApplePageWithCarousel />} />
            <Route path="/samsung" element={<SamsungPageWithCarousel />} />
            <Route path="/xiaomi" element={<XiaomiPageWithCarousel />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<UserProfile isLoggedIn={isLoggedIn} onLogout={handleLogout} />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/registro" element={<RegistroPage />} />
            <Route path="/inicio" element={<InicioSesionPage onLogin={handleLogin} />} />
            <Route path="/phone/:id" element={<PhoneDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

function BodyWithCarousel() {
  return (
    <>
      <AlbumComponent />
      <CarouselComponent />
      <Body />
    </>
  );
}

function ApplePageWithCarousel() {
  return (
    <>
      <AlbumComponent />
      <ApplePage />
    </>
  );
}

function SamsungPageWithCarousel() {
  return (
    <>
      <AlbumComponent />
      <SamsungPage />
    </>
  );
}

function XiaomiPageWithCarousel() {
  return (
    <>
      <AlbumComponent />
      <XiaomiPage />
    </>
  );
}

function AlbumComponent() {
  const albumImages = [
    { src: AlbumImage1, alt: "First slide", buttonLink: "/apple" },
    { src: AlbumImage2, alt: "Second slide", buttonLink: "/samsung" },
    { src: AlbumImage3, alt: "Third slide", buttonLink: "/xiaomi" },
  ];

  return (
    <div style={{ marginBottom: '2rem' }}>
      <div className="row">
        {albumImages.map((image, index) => (
          <div className="col-md-4" key={index}>
            <div className="image-container" style={{ position: 'relative', width: '380px', height: '200px' }}>
              <img
                className="img-fluid rounded-corner"
                src={image.src}
                alt={image.alt}
                style={{ width: '100%', height: '100%' }}
              />
              <Button
                variant="contained"
                component={Link}
                to={image.buttonLink}
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                }}
              >
                Ver
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CarouselComponent() {
  const location = useLocation();
  const { pathname } = location;

  const showCarousel = ['/', '/apple', '/samsung', '/xiaomi'].includes(pathname);

  if (showCarousel) {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 custom-carousel-img" src={SamsungImage} alt="First slide" />
          <Carousel.Caption className="custom-carousel-caption">
            <h3>Samsung</h3>
            <p>Innovación en cada detalle, potencia en tus manos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-carousel-img" src={AppleImage} alt="Second slide" />
          <Carousel.Caption className="custom-carousel-caption">
            <h3>Apple</h3>
            <p>Diseño y tecnología en perfecta armonía.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-carousel-img" src={XiaomiImage} alt="Third slide" />
          <Carousel.Caption className="custom-carousel-caption">
            <h3>Xiaomi</h3>
            <p>Calidad y rendimiento al alcance de todos.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  } else {
    return null;
  }
}

export default App;
