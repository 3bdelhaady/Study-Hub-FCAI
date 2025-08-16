import React from 'react';
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
              src={event4}
              alt="Event Slide 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
