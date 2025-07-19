import FooterSocials from './FooterSocials';
import FooterLinksColumn from './FooterLinksColumn';
import logo from '../../imgs/logo.png';
const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Workspace', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Our Mission', href: '#' },
  ];

  const moreLinks = [
    { label: 'Services', href: '#' },
    { label: 'Events', href: '#' },
    { label: 'Honor List', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Data Policy', href: '#' },
  ];

  return (
    <footer className="footer-section" role="contentinfo" aria-label="Footer">
      <div className="footer-container">
        <div className="footer-col footer-col-logo">
          <div className="footer-logo">
            <img src={logo} alt="Study Hub Logo" className="footer-logo-img" />
          </div>
          <p className="footer-desc">
            A student-powered learning community where knowledge meets collaboration.
            Join us in building the future of academic excellence together.
          </p>
          <FooterSocials />
        </div>

        <FooterLinksColumn title="Quick Links" links={quickLinks} />
        <FooterLinksColumn title="More" links={moreLinks} />
      </div>

      <div className="footer-bottom">
        <span>
          <i className="fa-regular fa-copyright"></i> 2025 Study Hub. All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
