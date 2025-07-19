import React from 'react';
import event from '../../imgs/event.jpg';

const Carousel = () => {
  return (
    <div className="events-carousel-container">
      <div className="events-carousel">
        <button className="carousel-arrow left">
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <img
          className="carousel-image"
          src={event}
          alt="Event Slide"
        />

        <button className="carousel-arrow right">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      <div className="carousel-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Carousel;
