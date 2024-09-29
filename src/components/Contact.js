import React from 'react';
import './Contact.css'; // Ensure you have a Contact.css for specific styles

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Page</h2>
      <p>Get in touch with us through the contact form below.</p>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your name" required />
        <label>Email:</label>
        <input type="email" placeholder="Your email" required />
        <label>Message:</label>
        <textarea placeholder="Your message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
