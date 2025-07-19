// src/components/HeroSection.js
import React from 'react';
import heroImage from '../../imgs/hero-section.png'; 

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="blur-circle"></div>

      <div className="container hero-content">
        <div className="hero-text">
          <h1>Welcome to study Hub</h1>
          <p>
            "Born from student effort - built to <br />support every study
            journey like family."
          </p>

          <div className="icons">
            <div className="icon">
              <a href="#"><i className="fa-solid fa-users"></i></a>
              <span>Community</span>
            </div>

            <div className="icon">
              <a href="#"><i className="fa-solid fa-book-open"></i></a>
              <span>Resources</span>
            </div>

            <div className="icon">
              <a href="#"><i className="fa-solid fa-graduation-cap"></i></a>
              <span>Growth</span>
            </div>
          </div>

          <div className="btn-hero">
            <button>Choose Your Year</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
}
