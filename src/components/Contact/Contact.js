import React from 'react';
import './Contact.css'; // Make sure the path is correct

function Contact() {
  return (
    <section className="contact-container">
        <div className="status_container">
          <h1>Welcome <span className="highlight">Sum Wan Fu</span></h1>
          <h2><span className="highlight">Software Engineer & AI Enthusiast</span></h2>
          <br></br>
          <div className="contact-information">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> timothyfuapple@hotmail.com</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sum-wan-fu" target="_blank" rel="noopener noreferrer">sum-wan-fu</a></p>
            <p><strong>Mobile:</strong> +61 481772223</p>
          </div>
        </div>
    </section>
  );
}

export default Contact;
