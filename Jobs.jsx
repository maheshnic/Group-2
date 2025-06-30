import React, { useState } from 'react';
import './Jobs.css';
import { Link } from 'react-router-dom';

const jobsData = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'ABC Pvt Ltd',
    location: 'Agartala, Tripura',
    experience: '0–1 Years',
    type: 'Full-Time',
    posted: '3 Days Ago',
    description: 'Build user interfaces with React.js and modern web tools.'
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'XYZ Technologies',
    location: 'Hyderabad, Telangana',
    experience: '1–3 Years',
    type: 'Remote',
    posted: '1 Day Ago',
    description: 'Design scalable backend APIs using Node.js.'
  }
];

const Jobs = () => {
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    experience: '',
    jobTypes: []
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleJobTypeChange = (e) => {
    const { value, checked } = e.target;
    const updatedTypes = checked
      ? [...filters.jobTypes, value]
      : filters.jobTypes.filter(type => type !== value);
    setFilters({ ...filters, jobTypes: updatedTypes });
  };

  const resetFilters = () => {
    setFilters({
      keyword: '',
      location: '',
      experience: '',
      jobTypes: []
    });
  };

  const filteredJobs = jobsData.filter(job => {
    const keywordMatch = job.title.toLowerCase().includes(filters.keyword.toLowerCase());
    const locationMatch = !filters.location || job.location.includes(filters.location);
    const experienceMatch = !filters.experience || job.experience === filters.experience;
    const typeMatch = filters.jobTypes.length === 0 || filters.jobTypes.includes(job.type);
    return keywordMatch && locationMatch && experienceMatch && typeMatch;
  });

  return (
    <div className="jobs-container">
      <h2>Browse Jobs</h2>

      <div className="filter-section">
        <input
          type="text"
          name="keyword"
          placeholder="Search by keyword..."
          value={filters.keyword}
          onChange={handleChange}
        />

        <select name="location" value={filters.location} onChange={handleChange}>
          <option value="">Select Location</option>
          <option value="Agartala">Agartala</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
        </select>

        <select name="experience" value={filters.experience} onChange={handleChange}>
          <option value="">Experience</option>
          <option value="Fresher">Fresher</option>
          <option value="0–1 Years">0–1 Years</option>
          <option value="1–3 Years">1–3 Years</option>
        </select>

        <div className="checkboxes">
          <label><input type="checkbox" value="Full-Time" onChange={handleJobTypeChange} /> Full-Time</label>
          <label><input type="checkbox" value="Part-Time" onChange={handleJobTypeChange} /> Part-Time</label>
          <label><input type="checkbox" value="Remote" onChange={handleJobTypeChange} /> Remote</label>
          <label><input type="checkbox" value="Contract" onChange={handleJobTypeChange} /> Contract</label>
        </div>

        <div className="filter-buttons">
          <button onClick={() => {}}>Apply Filters</button>
          <button onClick={resetFilters} className="reset">Reset</button>
        </div>
      </div>

      <div className="job-cards">
        {filteredJobs.map(job => (
          <div className="job-card" key={job.id}>
            <h3>
              <Link to={`/jobs/${job.id}`}>{job.title}</Link>
            </h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Experience:</strong> {job.experience}</p>
            <p><strong>Type:</strong> <span className="badge">{job.type}</span></p>
            <p className="desc">{job.description}</p>
            <p><strong>Posted:</strong> {job.posted}</p>

            <div className="job-actions">
              <Link to={`/jobs/${job.id}/apply`} className="apply-btn">Apply</Link>
              <button className="bookmark-btn"></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
