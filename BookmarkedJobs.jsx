import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './BookmarkedJobs.css';

const BookmarkedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    setJobs(saved);
  }, []);

  const removeBookmark = (id) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
    localStorage.setItem('bookmarkedJobs', JSON.stringify(updatedJobs));
  };

  return (
    <>
      <Header />
      <div style={container}>
        <h2>Saved Jobs List</h2>
        {jobs.length === 0 ? (
          <p>No bookmarked jobs available.</p>
        ) : (
          jobs.map((job) => (
            <div key={job.id} style={card}>
              <h3>
                <Link to={`/jobs/${job.id}`} style={linkStyle}>
                  {job.title}
                </Link>
              </h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Experience Required:</strong> {job.experience}</p>
              <div style={actions}>
                <Link to={`/jobs/${job.id}/apply`} className="apply-btn">Apply</Link>
                <Link to={`/jobs/${job.id}`} className="view-btn">View Details</Link>
                <button onClick={() => removeBookmark(job.id)} className="remove-btn">Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

const container = { padding: '2rem' };
const card = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '1rem',
  marginBottom: '1rem',
  backgroundColor: '#f9f9f9',
};
const actions = {
  display: 'flex',
  gap: '1rem',
  marginTop: '1rem',
};
const linkStyle = {
  textDecoration: 'none',
  color: '#3b49df',
  fontWeight: 'bold',
};

export default BookmarkedJobs;


