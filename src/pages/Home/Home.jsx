import React from 'react';
import { useNavigate } from 'react-router-dom';
import Contact from './Contact';
import Feature from './Feature';
export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ overflow: 'hidden' }}>
      <div className="home-container">
        <img className="home-background"></img>
        <div className="home-header">
          <span>You got the travel plans,</span>
          <span>we got the travel vans.</span>
        </div>
        <span className="home-header-slogan">
          Add adventure to your life with VanVenture.
        </span>
        <button onClick={() => navigate('vans')} className="home-btn">
          Explore our vans
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem',
        }}
      >
        <Feature />
        <Contact />
      </div>
    </div>
  );
}
