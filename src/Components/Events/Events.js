import React from 'react';
import Carousel from './Carousel';
import EventCard from './EventCard';
import eventsData from './eventsData';
const Events = () => {
  return (
    <section className="events-section">
      <h2 className="events-title">Events</h2>
      <p className="events-subtitle">
        Join our vibrant community events, from academic workshops to fun social gatherings
      </p>

      <Carousel />

      <div className="events-filters">
        <button className="filter-btn active">All Events</button>
        <button className="filter-btn">Upcoming</button>
        <button className="filter-btn">Past</button>
        <button className="filter-btn">Fun</button>
        <button className="filter-btn">Sports</button>
      </div>

      <div className="events-cards-grid">
        {eventsData.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
};

export default Events;
