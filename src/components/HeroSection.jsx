import React from 'react';
import './style.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Unlimited movies, TV shows, and more</h1>
        <p>Starts at ₦2,200. Cancel anytime.</p>
        <form className="join-form">
          <input type="email" placeholder="Email address" required />
          <button type="submit">Join Now</button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;