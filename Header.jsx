import React from 'react';
import { Link } from 'react-router-dom';
import './Styles.css'; 

export default function Header() {
  return (
    <header>
      <nav className="navbar" id='id1'>
        <div className="logo-container">
          <Link to="/">
            <img src="/images/nic-logo.png" alt="NIC Logo" className="nic-logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/list-candidate">List Candidate</Link></li>
          <li><Link to="/faq">FAQs</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/term">Terms</Link></li>
        </ul>
      </nav>
    </header>
  );
}
