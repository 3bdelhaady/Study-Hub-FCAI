import React from 'react';
import event from '../../imgs/event.jpg';
import event4 from '../../imgs/event4.png';

const Carousel = () => {
  return (
    <div className="events-carousel-container">
      <div
        id="eventsCarousel"
        className="carousel slide events-carousel"
        data-bs-ride="carousel"
      >
        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 carousel-image"
              src={event}
              alt="Event Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-image"
              src={event4}
              alt="Event Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-image"
              src={event}
              alt="Event Slide 3"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-image"
              src={event4}
              alt="Event Slide 4"
            />
          </div>
        </div>

        {/* Arrows */}
        <button
          className="carousel-control-prev carousel-arrow left"
          type="button"
          data-bs-target="#eventsCarousel"
          data-bs-slide="prev"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <button
          className="carousel-control-next carousel-arrow right"
          type="button"
          data-bs-target="#eventsCarousel"
          data-bs-slide="next"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
