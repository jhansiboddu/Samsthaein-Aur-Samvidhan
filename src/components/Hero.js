import React from 'react';
import '../styles/Hero.css';
function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Welcome to Institutions & Constitution</h1>
        <p>Explore the Constitution of India through interactive learning and gaming.</p>
        <div className="cta-buttons">
          <a href="#start-learning" className="cta-btn">Start Learning</a>
          <a href="#track-progress" className="cta-btn">Track Progress</a>
          <a href="#chatbot" className="cta-btn">Chat with Us</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
