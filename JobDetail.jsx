import { useParams, Link } from 'react-router-dom';
import './JobDetail.css';

const jobData = {
  1: {
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    responsibilities: ["Build UI components", "Collaborate with backend", "Maintain consistency"],
    skills: ["React", "JavaScript", "CSS"]
  },
  2: {
    title: "Backend Engineer",
    company: "CodeBase",
    location: "Bangalore",
    responsibilities: ["Create APIs", "Database design", "Optimize backend"],
    skills: ["Node.js", "MongoDB", "Express"]
  }
};

const JobDetail = () => {
  const { jobId } = useParams();
  const job = jobData[jobId];

  if (!job) return <p>Job not found!</p>;

  return (
    <div className="job-detail-container">
      <h2>{job.title}</h2>
      <p className="company">{job.company}</p>
      <p className="location">{job.location}</p>

      <h3>Responsibilities:</h3>
      <ul>
        {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
      </ul>

      <h3>Skills Required:</h3>
      <ul>
        {job.skills.map((s, i) => <li key={i}>{s}</li>)}
      </ul>

      <Link to={`/jobs/${jobId}/apply`} className="apply-button">Apply Now</Link>
    </div>
  );
};

export default JobDetail;




