import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        Ready to join our community? Get in touch with us and start your journey with Study Hub
      </p>

      <div className="contact-cards">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
