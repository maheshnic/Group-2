import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [notifications, setNotifications] = useState([
    { icon: '📄', text: 'Exam Notification: Technical Posts – Apply by July 15', read: false },
    { icon: '💬', text: 'Walk-in Interviews: Marketing Division – June 22', read: false },
    { icon: '💻', text: 'Online Application for Data Analyst – Open Now', read: false },
    { icon: '✅', text: 'Document Verification: Group B Roles – Starts July 5', read: true },
    { icon: '📌', text: 'Resume Workshop: Register by June 30', read: true },
    { icon: '📍', text: 'Job Fair (North East Zone): July 10–12', read: true },
    { icon: '🕐', text: 'Internship Call: Govt Sector – Deadline June 28', read: true },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (index) => {
    const updated = [...notifications];
    updated[index].read = true;
    setNotifications(updated);
  };

  return (
    <div className="home-container">
      <header className="header header-compact">
        <div className="header-left">
          <img src="/logo.png" alt="Candidate Logo" className="logo" />
        </div>
        <div className="header-right">
          <div className="top-row">
            <h1 className="main-title">Select a section to proceed:</h1>
            <div className="notification-icon">
              🔔
              {unreadCount > 0 && <span className="notification-count">{unreadCount}</span>}
            </div>
          </div>
          <nav className="nav-links">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Edit Profile</Link>
            <Link to="/profile/documents">Upload/View Resume</Link>
            <Link to="/jobs">Browse Jobs</Link>
            <Link to="/applications">Application History</Link>
            <Link to="/bookmarked_jobs">Saved Jobs</Link>
            <Link to="/settings">Settings</Link>
          </nav>
        </div>
      </header>

      <main className="main-content with-announcements">
        <div className="welcome-section">
          <div className="welcome-left">
            <h2 className="welcome-title">Welcome to Candidate Portal</h2>
            <img src="/team.jpg" alt="Team working" className="announcement-image" />
          </div>

          <div className="announcement-box">
            <h3 className="announcement-heading">📢 What's New</h3>
            <ul className="announcement-list">
              {notifications.map((item, index) => (
                <li
                  key={index}
                  className={item.read ? '' : 'unread'}
                  onClick={() => markAsRead(index)}
                >
                  <span className="icon">{item.icon}</span> {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Candidate Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;







