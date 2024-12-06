import React from 'react';

export const ContactPage: React.FC = () => {
  return (
    <div className="page">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>Get in touch with us through any of the following channels:</p>
        <div className="contact-methods">
          <div className="contact-method">
            <span className="icon">📧</span>
            <div>
              <h3>Email</h3>
              <p>support@example.com</p>
            </div>
          </div>
          <div className="contact-method">
            <span className="icon">📞</span>
            <div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="contact-method">
            <span className="icon">📍</span>
            <div>
              <h3>Address</h3>
              <p>123 Main Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 