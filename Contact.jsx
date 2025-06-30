import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-box">
        <h2 style={{color:'brown'}}>CONTACT US</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
           <input type="text" placeholder="Username " required />
            <input type="text" placeholder="Subject" required />
             <input type="text" placeholder="Address " required />
          <input type="text" placeholder="Mobile Number" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
