import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-banner">
        <h1>National Informatics Centre</h1>
        <p>Technology Partner of the Government of India</p>
      </section>

      <section className="highlights">
        <h2>What's New</h2>
        <ul>
          <li>Launch of e-Vidhan Application for Puducherry Assembly – June 12, 2025</li>
          <li>XGN 2.0 Portal launched by Gujarat CM – June 11, 2025</li>
          <li>Hostel Management App for Chhattisgarh – June 10, 2025</li>
        </ul>
      </section>

      <section className="about-nic">
        <h2>About NIC</h2>
        <p>
          NIC provides ICT and eGovernance support to the Government. Established in 1976, it has played a pivotal role in implementing digital initiatives across ministries and states.
        </p>
      </section>

      <section className="services">
        <h2>Our Offerings</h2>
        <div className="service-grid">
          <div className="service-card">e-Governance Solutions</div>
          <div className="service-card">Cloud & Data Centers</div>
          <div className="service-card">Cyber Security</div>
          <div className="service-card">Mobile App Development</div>
        </div>
      </section>
    </div>
  );
}
