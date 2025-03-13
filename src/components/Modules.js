import React from 'react';
import '../styles/Modules.css';
function Modules() {
  return (
    <section id="modules" className="modules">
      <h2>Explore Our Modules</h2>
      <div className="module-cards">
        <div className="module-card">
          <h3>Legislature</h3>
          <p>Learn about the Indian Legislature, its functions, and roles.</p>
          <a href="#learn-legislature" className="cta-btn">Start Learning</a>
        </div>
        <div className="module-card">
          <h3>Executive</h3>
          <p>Understand the role of the Executive in India’s governance.</p>
          <a href="#learn-executive" className="cta-btn">Start Learning</a>
        </div>
        <div className="module-card">
          <h3>Judiciary</h3>
          <p>Get insights into the Judiciary and its importance in India.</p>
          <a href="#learn-judiciary" className="cta-btn">Start Learning</a>
        </div>
      </div>
    </section>
  );
}

export default Modules;
