import React from 'react';
import { Link } from 'react-router-dom';

const FooterLinksColumn = ({ title, links }) => (
  <div className="footer-links-column1">
    <h3>{title}</h3>
    <ul>
      {links.map(({ label, href }, idx) => {
        if (href.startsWith('/')) {
          // روابط React Router
          return (
            <li key={idx} className="footer-link1">
              <Link to={href}>{label}</Link>
            </li>
          );
        } else {
          // روابط داخل الصفحة (anchors)
          return (
            <li key={idx} className="footer-link1">
              <a href={href} >{label}</a>
            </li>
          );
        }
      })}
    </ul>
  </div>
);

export default FooterLinksColumn;
