import { Link } from 'react-router-dom';
import './Jobs.css';

const Jobs = () => {
  const jobs = [
    { id: "1", title: "Frontend Developer", company: "TechCorp", location: "Remote" },
    { id: "2", title: "Backend Engineer", company: "CodeBase", location: "Bangalore" },
    { id: "3", title: "Full Stack Developer", company: "InnovateX", location: "Delhi" },
    { id: "4", title: "UI/UX Designer", company: "CreativeStudio", location: "Mumbai" },
    { id: "5", title: "DevOps Engineer", company: "CloudNet", location: "Hyderabad" },
    { id: "6", title: "Data Analyst", company: "DataViz", location: "Pune" },
  ];

  return (
    <div className="jobs-container">
      <h2>Available Jobs</h2>
      <div className="job-list">
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p className="company">{job.company}</p>
            <p className="location">{job.location}</p>
            <Link to={`/jobs/${job.id}`} className="view-button">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;




