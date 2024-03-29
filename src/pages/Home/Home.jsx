import React from 'react';
import { useNavigate } from 'react-router-dom';
import Contact from './Contact';
import Feature from './Feature';
import HostOffer from './HostOffer';
import About from './About';
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="home-container">
        <img className="home-background"></img>

        <div className="home-header">
          <span id="home-header-title">You got the travel plans,</span>
          <span id="home-header-title">we got the travel vans.</span>
          <span id="home-header-slogan">
            Add adventure to your life with VanVenture.
          </span>
          <button onClick={() => navigate('vans')} id="home-btn">
            Explore our vans
          </button>
        </div>
      </div>

      <div className="home-content-container">
        <Feature />
        <About />
        <HostOffer />
        <Contact />
      </div>
    </div>
  );
}
