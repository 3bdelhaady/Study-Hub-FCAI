import React from 'react';
import PolicyCard from './PolicyCard';
import Footer from '../Footer/Footer.js'

const Policy = () => {
  return (
    <section className="policy-section" style={{display:"block", marginBottom:"0px"}}>
      <PolicyCard />
      <Footer />
    </section>
  );
};

export default Policy;
