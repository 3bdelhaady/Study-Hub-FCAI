import React from 'react';
import vice1 from '../../imgs/quest.png'
import vice2 from '../../imgs/quest.png';
import vice from '../../imgs/super.png'; 
function AboutUs() {
  return (
    <section className="about-section" id={"#about"}>
      <div className="section-container">
        <h2 className="about-title">About Us</h2>
        <h3 className="about-subtitle">
          “<span>How we were founded?</span>”
        </h3>
        <p className="about-desc">
        Student Hub – Faculty of Computers & Artificial Intelligence Chapter was officially established in 2025 at SVNU – El Wadi National University ,
         founded by a group of outstanding and distinguished students,
         we are committed to upholding the highest Student Hub standards
        </p>
        <div className="about-team">
          <div className="about-member">
            <div className="about-img-circle">
              <img src={vice1} alt="Leader, About Us" />
            </div>
            <div className="about-role leader">Leader</div>
          </div>
          <div className="about-member top" >
            <div className="about-img-circle">
              <img src={vice2} alt="General Supervisor, About Us" />
            </div>
            <div className="about-role supervisor">General Supervisor</div>
          </div>
          <div className="about-member">
            <div className="about-img-circle super" id='super' >
              <img src={vice} alt="General Coordinator, About Us" />
            </div>
            <div className="about-role coordinator">General Manager</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
