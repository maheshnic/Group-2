import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Settings = () => {
  const [email, setEmail] = useState('');
  const [username] = useState('priya123');
  const [notifyJobs, setNotifyJobs] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [visibility, setVisibility] = useState('Public');
  const [showContact, setShowContact] = useState(true);
  const [language, setLanguage] = useState('English');
  const [accessibility, setAccessibility] = useState(false);

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      alert('Account deleted.');
    }
  };

  return (
    <>
      <Header />
      <div style={container}>
        <h2>Account Settings</h2>

        <div style={formGroup}>
          <label>Username (Read-only):</label>
          <input type="text" value={username} readOnly style={inputStyle} />
        </div>

        <div style={formGroup}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={formGroup}>
          <label>New Password:</label>
          <input type="password" placeholder="New Password" style={inputStyle} />
        </div>

        <div style={formGroup}>
          <label>
            <input
              type="checkbox"
              checked={notifyJobs}
              onChange={() => setNotifyJobs(!notifyJobs)}
            />{' '}
            Notify me of job matches
          </label>
        </div>

        <div style={formGroup}>
          <label>
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={() => setEmailAlerts(!emailAlerts)}
            />{' '}
            Email alerts for new jobs
          </label>
        </div>

        <div style={formGroup}>
          <label>
            <input
              type="checkbox"
              checked={smsAlerts}
              onChange={() => setSmsAlerts(!smsAlerts)}
            />{' '}
            SMS alerts
          </label>
        </div>

        <div style={formGroup}>
          <label>Profile Visibility:</label>
          <select
            value={visibility}
            onChange={e => setVisibility(e.target.value)}
            style={inputStyle}
          >
            <option value="Public">Public</option>
            <option value="Private">Private</option>
            <option value="Limited">Limited</option>
          </select>
        </div>

        <div style={formGroup}>
          <label>
            <input
              type="checkbox"
              checked={showContact}
              onChange={() => setShowContact(!showContact)}
            />{' '}
            Show Contact Info to Employers
          </label>
        </div>

        <div style={formGroup}>
          <label>Preferred Language:</label>
          <select
            value={language}
            onChange={e => setLanguage(e.target.value)}
            style={inputStyle}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Bengali">Bengali</option>
            <option value="Odia">Odia</option>
          </select>
        </div>

        <div style={formGroup}>
          <label>
            <input
              type="checkbox"
              checked={accessibility}
              onChange={() => setAccessibility(!accessibility)}
            />{' '}
            Accessibility Mode
          </label>
        </div>

        <button onClick={handleSave} style={buttonStyle}>
          Save Changes
        </button>
        <button onClick={handleDeleteAccount} style={deleteButtonStyle}>
          Delete My Account
        </button>
      </div>
      <Footer />
    </>
  );
};

// Inline CSS
const container = { padding: '2rem', maxWidth: '600px', margin: 'auto' };
const formGroup = { marginBottom: '1rem' };
const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
};
const buttonStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  marginRight: '1rem',
};
const deleteButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#dc3545',
};

export default Settings;

