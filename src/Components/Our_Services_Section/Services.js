import React from 'react';
import ServiceCard from './ServiceCard';
import servicesData from './servicesData';
export default function Services() {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        At Study Hub, we’re committed to supporting students through every step
        of their academic and professional journey
      </p>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </section>
  );
}

 
