import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './JobDetail.css';

const jobDetailsData = {
  1: {
    id: 1,
    title: 'Frontend Developer',
    company: 'ABC Pvt Ltd',
    location: 'Agartala, Tripura',
    experience: '0–1 Years',
    type: 'Full-Time',
    posted: '3 Days Ago',
    description: 'We are looking for a frontend developer to join our tech team.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    responsibilities: [
      'Develop UI components with React',
      'Collaborate with backend team',
      'Optimize web performance',
      'Fix bugs and enhance features'
    ]
  },
  2: {
    id: 2,
    title: 'Backend Developer',
    company: 'XYZ Technologies',
    location: 'Hyderabad, Telangana',
    experience: '1–3 Years',
    type: 'Remote',
    posted: '1 Day Ago',
    description: 'Backend API development with Node.js and MongoDB.',
    skills: ['Node.js', 'MongoDB', 'REST API'],
    responsibilities: [
      'Build RESTful APIs',
      'Design scalable backend architecture',
      'Integrate third-party services',
      'Maintain code quality and documentation'
    ]
  }
};

const JobDetail = () => {
  const { jobId } = useParams();
  const job = jobDetailsData[jobId];

  if (!job) return <p>Job not found.</p>;

  return (
    <div className="job-detail-container">
      <div className="job-header">
        <h2>{job.title}</h2>
        <p className="company">{job.company}</p>
        <p className="location">{job.location}</p>
      </div>

      <div className="job-info">
        <p><strong>Experience:</strong> {job.experience}</p>
        <p><strong>Job Type:</strong> {job.type}</p>
        <p><strong>Posted:</strong> {job.posted}</p>
      </div>

      <div className="section">
        <h3>Description</h3>
        <p>{job.description}</p>
      </div>

      <div className="section">
        <h3>Skills Required</h3>
        <ul>
          {job.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Responsibilities</h3>
        <ul>
          {job.responsibilities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="apply-section">
        <Link to={`/jobs/${job.id}/apply`} className="apply-btn">Apply Now</Link>
      </div>
    </div>
  );
};

export default JobDetail;




