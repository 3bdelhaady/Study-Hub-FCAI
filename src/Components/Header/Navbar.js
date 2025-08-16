import React from 'react';
import Logo from './Logo'
import NavLinks from './NavLinks';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        {/* <Logo /> */}
        <NavLinks />
      </div>
    </header>
  );
}
