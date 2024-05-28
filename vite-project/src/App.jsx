import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
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
import Carousel from 'react-bootstrap/Carousel'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

import SamsungImage from './Fotos/Samsung.jpg'; 
import AppleImage from './Fotos/Apple.jpg';
import XiaomiImage from './Fotos/Xiaomi.jpg';

import AlbumImage1 from './Fotos/Album1.jpg'; 
import AlbumImage2 from './Fotos/Album2.jpg'; 
import AlbumImage3 from './Fotos/Album3.jpg';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flexGrow: 1, padding: '1rem', maxWidth: '100%', margin: '0 auto', marginTop: '5rem', marginBottom: '5rem' }}>
        <div style={{ marginBottom: '2rem' }}>
  <div className="row">
    <div className="col-md-4">
      <div className="image-container">
        <img
          className="img-fluid rounded-corner"
          src={AlbumImage1}
          alt="First slide"
          style={{ width: '380px', height: '200px' }}
        />
      </div>
    </div>
    <div className="col-md-4">
      <div className="image-container">
        <img
          className="img-fluid rounded-corner"
          src={AlbumImage2}
          alt="Second slide"
          style={{ width: '380px', height: '200px' }}
        />
      </div>
    </div>
    <div className="col-md-4">
      <div className="image-container">
        <img
          className="img-fluid rounded-corner"
          src={AlbumImage3}
          alt="Third slide"
          style={{ width: '380px', height: '200px' }}
        />
      </div>
    </div>
  </div>
</div>


          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100 custom-carousel-img" src={SamsungImage} alt="First slide" />
              <Carousel.Caption>
                <h3>Samsung</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 custom-carousel-img" src={AppleImage} alt="Second slide" />
              <Carousel.Caption>
                <h3>Apple</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 custom-carousel-img" src={XiaomiImage} alt="Third slide" />
              <Carousel.Caption>
                <h3>Xiaomi</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/apple" element={<ApplePage />} />
            <Route path="/samsung" element={<SamsungPage />} />
            <Route path="/xiaomi" element={<XiaomiPage />} />
            <Route path="/cart" element={<Cart />} /> {}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/registro" element={<RegistroPage />} />
            <Route path="/inicio" element={<InicioSesionPage />} />
            <Route path="/phone/:id" element={<PhoneDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
