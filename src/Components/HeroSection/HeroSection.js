// src/components/HeroSection.js
import React from 'react';
import heroImage from '../../imgs/hero-section.png'; 
import Navbar from '../Header/Navbar';
import WorkSpaces from '../Work_space/WorkSpaces';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="hero" id="#home">
      <div className="blur-circle"></div>

      <div className="container hero-content">
      {/* <Navbar/>  */}
        <div className="hero-text">
          <h1>Welcome to student Hub</h1>
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
          <div style={{display:'flex'}}>
          <div className="btn-hero" style={{marginRight:'10px'}}>
            <Link to={"/register"}>Join Student Hub</Link>
          </div>
          <div className="btn-hero">
            <button>Choose Your Year</button>
          </div>
        </div>
        </div> 

         <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
      <Element name="workspaces">
                <WorkSpaces />
        </Element>
    </section>
  );
}
