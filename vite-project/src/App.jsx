import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './Plantillas/Header';
import Footer from './Plantillas/Footer';
import Body from './Plantillas/Body';
import ApplePage from './Menu/Apple';
import SamsungPage from './Menu/Samsung';
import XiaomiPage from './Menu/Xiaomi';
import Cart from './Cart';
import Checkout from './Checkout';
import RegistroPage from './Login/registro';
import InicioSesionPage from './Login/inicio';
import PhoneDetailsPage from './PhoneDetailsPage';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flexGrow: 1, padding: '1rem', maxWidth: '100%', margin: '0 auto', marginTop: '5rem',  marginBottom: '5rem' }}>
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
