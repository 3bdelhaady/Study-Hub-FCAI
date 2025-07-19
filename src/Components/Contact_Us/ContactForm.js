const ContactForm = () => {
  return (
    <div className="contact-form-card">
      <h3>Send us a Message</h3>
      <form className="contact-form" aria-label="Contact Form">
        <label htmlFor="contact-name">Full Name</label>
        <input
          type="text"
          id="contact-name"
          name="name"
          placeholder="Enter Your Full Name"
          required
          aria-label="Full Name"
          autoComplete="name"
        />

        <label htmlFor="contact-email">Email Address</label>
        <input
          type="email"
          id="contact-email"
          name="email"
          placeholder="Enter Your Email Address"
          required
          aria-label="Email Address"
          autoComplete="email"
        />

        <label htmlFor="contact-year">Academic Year</label>
        <select
          id="contact-year"
          name="year"
          required
          aria-label="Academic Year"
          autoComplete="organization-title"
        >
          <option value="">Select Your Year</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>

        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows="4"
          placeholder="Tell us how we can help you.."
          required
          aria-label="Message"
          autoComplete="off"
        ></textarea>

        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
