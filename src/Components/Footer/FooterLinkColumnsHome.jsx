import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const FooterLinksColumn = ({ title, links }) => (
  <div className="footer-links-column">
    <h3>{title}</h3>
    <ul>
      {links.map(({ label, href }, idx) => {
        if (href.startsWith('/')) {
          return (
            <li key={idx}>
              <RouterLink to={href} id="footer-link" >{label}</RouterLink>
            </li>
          );
        } else if (href.startsWith('#')) {
          // رابط أقسام داخل الصفحة مع react-scroll
          const target = href.substring(1); // حذف #
          return (
            <li key={idx}>
              <ScrollLink
                to={target}
                smooth={true}
                duration={500}
                offset={-70} // لو عندك ثابت أعلى الصفحة مثل Navbar
                spy={true}
                className="footer-link"
                // activeClass="active-link"
              >
                {label}
              </ScrollLink>
            </li>
          );
        } else {
          return (
            <li key={idx} className="footer-link">
              <a href={href}>{label}</a>
            </li>
          );
        }
      })}
    </ul>
  </div>
);

export default FooterLinksColumn;
