import React from 'react';
import Logo from '../../imgs/logo.png'; // Ensure this is a valid image import
import { Link } from 'react-scroll';

const links = [
  { name: 'Home', href: '#home', isActive: true },
  { name: 'Work Spaces', href: '#workspaces' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Our Mission', href: '#mission' },
  { name: 'Events', href: '#events' },
  { name: 'Honor List', href: '#honor' },
  { name: 'Contact Us', href: '#contact' }
];


export default function NavLinks() {
  return (
<nav className="navbar navbar-expand-lg navbar-transparent">
  <div className="container-fluid d-flex align-items-center">
    {/* Logo */}
    <a className="navbar-brand" href="#">
      <img
        src={Logo}
        alt="Logo"
        width="150"
        className="d-inline-block align-top"
      />
    </a>

    {/* Mobile button */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={{ background: "#75ADBA" }}
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Nav links */}
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav justify-content-end  custom-nav d-flex align-items-center" style={{marginLeft:'280px'}}>
        {links.map((link, index) => (
          <li className="nav-item" key={index}>
            <Link
              className="nav-link text-white"
              to={link.href}
              smooth={true}
              duration={1500}
              spy={true}
              offset={-80}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>
  );
}
