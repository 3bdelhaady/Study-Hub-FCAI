const ContactInfo = () => {
  return (
    <div className="contact-info-card">
      <h3>Get In Touch</h3>
      <div className="contact-info-list">
      <div className="contact-info-item">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+01066325447" className="contact-text">
              +201066325447
              </a>
      </div>

        <div className="contact-info-item">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:contact@studenthub.org" className="contact-text">
                contact@studenthub.org
              </a>
        </div>
      </div>

      <h3 className="follow-title">Follow Us</h3>
      <div className="contact-socials">
        <a href="https://www.facebook.com/profile.php?id=61577174862857" className="social-btn" target="blank">
          <i className="fa-brands fa-facebook-f"></i> Facebook
        </a>
        <a href="https://www.linkedin.com/company/student-activity-study-hub/?viewAsMember=true" className="social-btn" target="blank">
          <i className="fa-brands fa-linkedin-in"></i> LinkedIn
        </a>
        <a href="https://discord.gg/kdQA6HKFtD" className="social-btn" target="blank">
          <i className="fa-brands fa-discord"></i> Discord
        </a>
        <a href="https://codeforces.com/group/nc1IiL4JTF/contests" className="social-btn" target="blank">
          <i className="fa-solid fa-code"></i> Codeforces
        </a>
        <a href="https://study-hub-org.blogspot.com/" className="social-btn" target="blank">
          <i className="fa-brands fa-blogger-b"></i> Blogger
        </a>
        <a href="https://www.youtube.com/@StudentHubTeam" className="social-btn" target="blank">
          <i className="fa-brands fa-youtube"></i> YouTube
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
