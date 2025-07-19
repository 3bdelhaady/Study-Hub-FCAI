import React from 'react';
export default  function MissionVision() {
  return (
    <section className="mission-vision-section">
      <h2 className="mission-vision-title">Our Mission &amp; Our Vision</h2>
      <div className="mission-vision-cards">
        <div className="mv-card mv-mission">
          <h3>Our Mission</h3>
          <p>
            To empower students of SVNIJ by providing accessible academic
            resources, skill-building opportunities, and a collaborative
            community helping every student grow both academically and
            professionally.
          </p>
        </div>
        <div className="mv-card mv-vision">
          <h3>Our Vision</h3>
          <p>
            To become the leading student-powered educational platform across
            Egyptian universities, transforming self-learning into a culture and
            making development opportunities available for all.
          </p>
        </div>
      </div>
    </section>
  );
}