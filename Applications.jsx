import React, { useState } from 'react';
import Layout from '../components/Layout';
import './Applications.css';

const Applications = () => {
  const [applications, setApplications] = useState([
     {
      jobTitle: 'Frontend Developer',
      company: 'Google',
      location: 'Bengaluru',
      appliedDate: '25-06-2025',
      status: 'Under Review',
      mode: 'Via Portal',
      resume: '/resumes/frontend.pdf',
      coverLetter: '/coverletters/frontend.pdf',
    },
    {
      jobTitle: 'React Intern',
      company: 'Amazon',
      location: 'Delhi',
      appliedDate: '20-06-2025',
      status: 'Interview Scheduled',
      mode: 'Redirected',
      resume: '/resumes/intern.pdf',
      coverLetter: '',
    },
    {
      jobTitle: 'UI Designer',
      company: 'Adobe',
      location: 'Mumbai',
      appliedDate: '15-06-2025',
      status: 'Accepted',
      mode: 'Via Portal',
      resume: '/resumes/ui.pdf',
      coverLetter: '/coverletters/ui.pdf',
    },
    {
      jobTitle: 'Data Analyst',
      company: 'Infosys',
      location: 'Chennai',
      appliedDate: '10-06-2025',
      status: 'Rejected',
      mode: 'Via Portal',
      resume: '/resumes/da.pdf',
      coverLetter: '',
    },
    {
      jobTitle: 'Frontend Developer',
      company: 'Google',
      location: 'Bengaluru',
      appliedDate: '25-06-2025',
      status: 'Under Review',
      mode: 'Via Portal',
      resume: '/resumes/frontend.pdf',
      coverLetter: '/coverletters/frontend.pdf',
    },
    {
      jobTitle: 'React Intern',
      company: 'Amazon',
      location: 'Delhi',
      appliedDate: '20-06-2025',
      status: 'Interview Scheduled',
      mode: 'Redirected',
      resume: '/resumes/intern.pdf',
      coverLetter: '',
    },
    {
      jobTitle: 'UI Designer',
      company: 'Adobe',
      location: 'Mumbai',
      appliedDate: '15-06-2025',
      status: 'Accepted',
      mode: 'Via Portal',
      resume: '/resumes/ui.pdf',
      coverLetter: '/coverletters/ui.pdf',
    },
    {
      jobTitle: 'Data Analyst',
      company: 'Infosys',
      location: 'Chennai',
      appliedDate: '10-06-2025',
      status: 'Rejected',
      mode: 'Via Portal',
      resume: '/resumes/da.pdf',
      coverLetter: '',
    },
    {
      jobTitle: 'Backend Engineer',
      company: 'Microsoft',
      location: 'Hyderabad',
      appliedDate: '05-06-2025',
      status: 'Submitted',
      mode: 'Via Portal',
      resume: '/resumes/backend.pdf',
      coverLetter: '/coverletters/backend.pdf',
    },
  ]);

  const statusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'submitted': return 'submitted';
      case 'under review': return 'review';
      case 'interview scheduled': return 'interview';
      case 'rejected': return 'rejected';
      case 'accepted': return 'accepted';
      default: return '';
    }
  };

  const handleCancel = (indexToRemove) => {
    const confirmed = window.confirm('Are you sure you want to cancel this application?');
    if (confirmed) {
      const updated = applications.filter((_, index) => index !== indexToRemove);
      setApplications(updated);
    }
  };

  return (
    <Layout>
      <div className="applications-container">
        <h2>Application History</h2>

        {/* Desktop Table View */}
        <table className="application-table">
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Applied Date</th>
              <th>Status</th>
              <th>Mode</th>
              <th>Resume</th>
              <th>Cover Letter</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index}>
                <td>{app.jobTitle}</td>
                <td>{app.company}</td>
                <td>{app.location}</td>
                <td>{app.appliedDate}</td>
                <td>
                  <span className={`badge ${statusClass(app.status)}`}>{app.status}</span>
                </td>
                <td>{app.mode}</td>
                <td><a href={app.resume} target="_blank" rel="noreferrer">View Resume</a></td>
                <td>
                  {app.coverLetter ? (
                    <a href={app.coverLetter} target="_blank" rel="noreferrer">View Cover Letter</a>
                  ) : '—'}
                </td>
                <td>
                  <button className="cancel-btn" onClick={() => handleCancel(index)}>
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

       
        <div className="application-card-grid">
          {applications.map((app, index) => (
            <div key={index} className="application-card">
              <h3>{app.jobTitle}</h3>
              <p><strong>Company:</strong> {app.company}</p>
              <p><strong>Location:</strong> {app.location}</p>
              <p><strong>Applied Date:</strong> {app.appliedDate}</p>
              <p><strong>Status:</strong> <span className={`badge ${statusClass(app.status)}`}>{app.status}</span></p>
              <p><strong>Mode:</strong> {app.mode}</p>
              <p><strong>Resume:</strong> <a href={app.resume} target="_blank" rel="noreferrer">View Resume</a></p>
              <p><strong>Cover Letter:</strong> {app.coverLetter ? <a href={app.coverLetter} target="_blank" rel="noreferrer">View Cover Letter</a> : '—'}</p>
              <button className="cancel-btn" onClick={() => handleCancel(index)}>
                Cancel
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Applications;




