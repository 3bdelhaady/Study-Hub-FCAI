import React from 'react';

const FooterSocials = () => {
  return (
    <div className="footer-socials">
      <a href="https://www.facebook.com/profile.php?id=61577174862857" className="footer-social-btn" aria-label="Facebook" target="blank">
        <i className="fa-brands fa-facebook-f"></i>
      </a>
      <a href="https://www.linkedin.com/company/student-activity-study-hub/?viewAsMember=true" className="footer-social-btn" aria-label="LinkedIn" target="blank">
        <i className="fa-brands fa-linkedin-in"></i>
      </a>
      <a href="https://www.youtube.com/@StudentHubTeam" className="footer-social-btn" aria-label="YouTube" target="blank">
        <i className="fa-brands fa-youtube"></i>
      </a>
      <a href="https://discord.gg/kdQA6HKFtD" className="footer-social-btn" aria-label="Discord" target="blank">
        <i className="fa-brands fa-discord"></i>
      </a>
    </div>
  );
};

export default FooterSocials;
