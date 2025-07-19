import React from 'react';

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="service-card">
      <div className="service-icon">
        <i className={icon}></i>
      </div>
      <div className="service-title">{title}</div>
      <div className="service-desc">{desc}</div>
    </div>
  );
}

export default ServiceCard;
