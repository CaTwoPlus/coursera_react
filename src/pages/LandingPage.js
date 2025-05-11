import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import bg from '../assets/landing-bg.jpg';

export default function LandingPage() {
  return (
    <div className="landing" style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className="landing-overlay">
        <div className="landing-left">
          <h1>Welcome To Paradise Nursery</h1>
          <p className="tagline">Where Green Meets Serenity</p>
          <Link to="/products" className="get-started">Get Started</Link>
        </div>
        <div className="landing-right">
          <h2>Welcome to Paradise Nursery, where green meets serenity!</h2>
          <p>At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier lifestyle.</p>
          <p>Our experts ensure each plant meets strict care standards, whether you’re a seasoned gardener or starting your green journey. Explore our collection and let us help you find the perfect plant for your home or office.</p>
          <p>Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience nature at your doorstep.</p>
        </div>
      </div>
    </div>
  );
}