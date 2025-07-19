const ContactInfo = () => {
  return (
    <div className="contact-info-card">
      <h3>Get In Touch</h3>
      <div className="contact-info-list">
        <div className="contact-info-item">
          <i className="fa-solid fa-phone"></i> +01023456789
        </div>
        <div className="contact-info-item">
          <i className="fa-solid fa-envelope"></i> Studyhub@gmail.com
        </div>
      </div>

      <h3 className="follow-title">Follow Us</h3>
      <div className="contact-socials">
        <a href="#" className="social-btn">
          <i className="fa-brands fa-facebook-f"></i> Facebook
        </a>
        <a href="#" className="social-btn">
          <i className="fa-brands fa-linkedin-in"></i> LinkedIn
        </a>
        <a href="#" className="social-btn">
          <i className="fa-brands fa-discord"></i> Discord
        </a>
        <a href="#" className="social-btn">
          <i className="fa-solid fa-code"></i> Codeforces
        </a>
        <a href="#" className="social-btn">
          <i className="fa-brands fa-blogger-b"></i> Blogger
        </a>
        <a href="#" className="social-btn">
          <i className="fa-brands fa-youtube"></i> YouTube
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
