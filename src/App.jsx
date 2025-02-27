import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services.jsx';
import WhatsAppButton from './components/WhatsAppButton'; 

const App = () => { 
  return (
    <Router>
        <div className="overflow-y-scroll scrollbar-thin  scrollbar-track-black">
        <p className="text-center text-white bg-black py-2 border-8 border-solid border-zinc-900 border-t-0 shadow-lg shadow-black">
          <span className="text-gold font-semibold">BetterZone</span> where the dreams begin.
        </p>
      </div>
      <div className="flex flex-col min-h-screen bg-black text-white font-sans">
        <Navbar/>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <WhatsAppButton />
      <div>
      </div>
    </Router>
  );
};

export default App;
