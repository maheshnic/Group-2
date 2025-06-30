import React from 'react';
import './Faq.css';

export default function Faq() {
  return (
    <div className="faq-page">
      <h2 style={{color:'brown'}}>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h4>What is the purpose of this portal?</h4>
        <p>This portal is designed to streamline recruitment processes and provide transparent access to job opportunities in various government and private sectors.</p>
      </div>
      <div className="faq-item">
        <h4>Who can apply for jobs listed here?</h4>
        <p>Any eligible candidate meeting the job criteria can apply. Please refer to individual job postings for specific qualifications.</p>
      </div>
      <div className="faq-item">
        <h4>How do I register?</h4>
        <p>Click on the "Register" link in the navigation bar and fill out the required details including your name, email, password, and profile image.</p>
      </div>
      <div className="faq-item">
        <h4>Is my data secure?</h4>
        <p>Yes, we follow strict data protection policies and ensure your personal information is handled securely and confidentially.</p>
      </div>
    </div>
  );
}
