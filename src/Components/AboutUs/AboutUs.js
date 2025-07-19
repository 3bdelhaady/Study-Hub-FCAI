import React from 'react';
import vice1 from '../../imgs/vice1.png'
import vice2 from '../../imgs/vice2.png';
import vice from '../../imgs/vice.png';
function AboutUs() {
  return (
    <section className="about-section">
      <div className="section-container">
        <h2 className="about-title">About Us</h2>
        <h3 className="about-subtitle">
          “<span>How we were founded?</span>”
        </h3>
        <p className="about-desc">
          Study Hub was officially founded in 2024 at SVNU (South Valley
          National University) as a student-led initiative focused on academic
          support and career development. Since then, it has grown into a
          vibrant community that connects learners with resources, mentorship,
          and real opportunities
        </p>
        <div className="about-team">
          <div className="about-member">
            <div className="about-img-circle">
              <img src={vice1} alt="Leader, About Us" />
            </div>
            <div className="about-role leader">Leader</div>
          </div>
          <div className="about-member top">
            <div className="about-img-circle">
              <img src={vice2} alt="General Supervisor, About Us" />
            </div>
            <div className="about-role supervisor">General Supervisor</div>
          </div>
          <div className="about-member">
            <div className="about-img-circle">
              <img src={vice} alt="General Coordinator, About Us" />
            </div>
            <div className="about-role coordinator">General Coordinator</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
