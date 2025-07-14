import React from 'react';

const links = [
  { name: 'Home', href: '#', isActive: true },
  { name: 'Work Spaces', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Our Mission', href: '#' },
  { name: 'Events', href: '#' },
  { name: 'Honor List', href: '#' },
  { name: 'Contact Us', href: '#' }
];

export default function NavLinks() {
  return (
    <nav className="nav-links">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={link.isActive ? 'active' : ''}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}
