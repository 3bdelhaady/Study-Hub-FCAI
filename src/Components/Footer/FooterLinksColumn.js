import React from 'react';

const FooterLinksColumn = ({ title, links }) => {
  return (
    <div className="footer-col">
      <div className="footer-col-title">{title}</div>
      {links.map((link, idx) => (
        <a key={idx} href={link.href} className="footer-link">
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default FooterLinksColumn;
