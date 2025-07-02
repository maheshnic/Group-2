import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Jobs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const jobsData = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Infosys',
    logo: '/logos/abc.jpg',
    location: 'Agartala, Tripura',
    experience: '0–1 Years',
    type: 'Full-Time',
    posted: '3 Days Ago',
    description: 'Build user interfaces with React.js and modern web tools.'
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'TCS',
    logo: '/logos/xyz.png',
    location: 'Hyderabad, Telangana',
    experience: '1–3 Years',
    type: 'Remote',
    posted: '1 Day Ago',
    description: 'Design scalable backend APIs using Node.js.'
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Cognizant',
    logo: '/logos/d.png',
    location: 'Bangalore, Karnataka',
    experience: '3–5 Years',
    type: 'Full-Time',
    posted: '5 Days Ago',
    description: 'Create user-centric UI/UX designs for web and mobile applications.'
  },
  {
    id: 4,
    title: 'Data Analyst',
    company: 'Wipro',
    logo: '/logos/WIT.png',
    location: 'Mumbai, Maharashtra',
    experience: '1–3 Years',
    type: 'Contract',
    posted: '2 Days Ago',
    description: 'Analyze and visualize data trends for decision-making support.'
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'HCL Technologies',
    logo: '/logos/c.png',
    location: 'Chennai, Tamil Nadu',
    experience: '3–5 Years',
    type: 'Remote',
    posted: '4 Days Ago',
    description: 'Maintain CI/CD pipelines and monitor infrastructure.'
  },
  {
    id: 6,
    title: 'Mobile App Developer',
    company: 'Capgemini',
    logo: '/logos/a.png',
    location: 'Pune, Maharashtra',
    experience: '2–4 Years',
    type: 'Full-Time',
    posted: '6 Days Ago',
    description: 'Develop cross-platform mobile applications using Flutter/React Native.'
  },
  {
    id: 7,
    title: 'System Administrator',
    company: 'IBM',
    logo: '/logos/n.png',
    location: 'Delhi, India',
    experience: '5+ Years',
    type: 'Full-Time',
    posted: 'Today',
    description: 'Manage servers, network security, and IT operations.'
  },
  {
    id: 8,
    title: 'QA Engineer',
    company: 'Accenture',
    logo: '/logos/An.png',
    location: 'Noida, UP',
    experience: '1–3 Years',
    type: 'Full-Time',
    posted: '2 Days Ago',
    description: 'Conduct manual and automated testing on web applications.'
  },
  {
    id: 9,
    title: 'Full Stack Developer',
    company: 'Deloitte',
    logo: '/logos/de.png',
    location: 'Ahmedabad, Gujarat',
    experience: '2–4 Years',
    type: 'Remote',
    posted: '5 Days Ago',
    description: 'Develop front and back end applications using MERN stack.'
  },
  {
    id: 10,
    title: 'Business Analyst',
    company: 'Oracle',
    logo: '/logos/O.png',
    location: 'Jaipur, Rajasthan',
    experience: '3–5 Years',
    type: 'Contract',
    posted: '3 Days Ago',
    description: 'Gather business requirements and bridge gap between stakeholders and tech team.'
  },
  {
    id: 11,
    title: 'Project Manager',
    company: 'Tech Mahindra',
    logo: '/logos/T.png',
    location: 'Kolkata, West Bengal',
    experience: '5+ Years',
    type: 'Full-Time',
    posted: '1 Week Ago',
    description: 'Lead cross-functional teams in Agile project environments.'
  },
  {
    id: 12,
    title: 'AI/ML Engineer',
    company: 'Google',
    logo: '/logos/G.png',
    location: 'Thiruvananthapuram, Kerala',
    experience: '2–4 Years',
    type: 'Remote',
    posted: '2 Days Ago',
    description: 'Develop machine learning models and integrate with applications.'
  },
  {
    id: 13,
    title: 'Tech Support Engineer',
    company: 'Amazon',
    logo: '/logos/su.png',
    location: 'Patna, Bihar',
    experience: '0–1 Years',
    type: 'Full-Time',
    posted: 'Today',
    description: 'Provide tech support to customers via chat, email, and phone.'
  },
  {
    id: 14,
    title: 'Content Writer',
    company: 'LinkedIn',
    logo: '/logos/L.png',
    location: 'Indore, MP',
    experience: '1–3 Years',
    type: 'Part-Time',
    posted: 'Yesterday',
    description: 'Create engaging and SEO-friendly content for blogs and websites.'
  }
];

const Jobs = () => {
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    experience: '',
    jobTypes: []
  });

  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    return saved.map(job => job.id);
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

  const toggleBookmark = (job) => {
    const existing = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    const alreadyBookmarked = bookmarkedIds.includes(job.id);

    if (alreadyBookmarked) {
      const updated = existing.filter(j => j.id !== job.id);
      localStorage.setItem('bookmarkedJobs', JSON.stringify(updated));
      setBookmarkedIds(bookmarkedIds.filter(id => id !== job.id));
      alert("Job unbookmarked.");
    } else {
      const updated = [...existing, job];
      localStorage.setItem('bookmarkedJobs', JSON.stringify(updated));
      setBookmarkedIds([...bookmarkedIds, job.id]);
      alert("Job bookmarked successfully!");
    }
  };

  const filteredJobs = jobsData.filter(job => {
    const keywordMatch = job.title.toLowerCase().includes(filters.keyword.toLowerCase());
    const locationMatch = !filters.location || job.location.includes(filters.location);
    const experienceMatch = !filters.experience || job.experience === filters.experience;
    const typeMatch = filters.jobTypes.length === 0 || filters.jobTypes.includes(job.type);
    return keywordMatch && locationMatch && experienceMatch && typeMatch;
  });

  return (
    <>
      <Header />
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
            <option value="Ahmedabad, Gujarat">Ahmedabad, Gujarat</option>
            <option value="Indore, MP">Indore, MP</option>
            <option value="Patna, Bihar">Patna, Bihar</option>
            <option value="Thiruvananthapuram, Kerala">Thiruvananthapuram, Kerala</option>
          </select>

          <select name="experience" value={filters.experience} onChange={handleChange}>
            <option value="">Experience</option>
            <option value="0–1 Years">0–1 Years</option>
            <option value="1–3 Years">1–3 Years</option>
            <option value="5+ Years">5+ Years</option>
          </select>

          <div className="checkboxes">
            <label><input type="checkbox" value="Full-Time" onChange={handleJobTypeChange} /> Full-Time</label>
            <label><input type="checkbox" value="Part-Time" onChange={handleJobTypeChange} /> Part-Time</label>
            <label><input type="checkbox" value="Remote" onChange={handleJobTypeChange} /> Remote</label>
          </div>

          <div className="filter-buttons">
            <button onClick={() => {}}>Apply Filters</button>
            <button onClick={resetFilters} className="reset">Reset</button>
          </div>
        </div>

        <div className="job-cards-grid">
          {filteredJobs.map(job => (
            <div className="job-card-grid" key={job.id}>
              <img src={job.logo} alt={`${job.company} logo`} className="company-logo" />
              <h3><Link to={`/jobs/${job.id}`}>{job.title}</Link></h3>
              <p><strong>{job.company}</strong></p>
              <p>{job.location}</p>
              <p>{job.experience}</p>
              <span className="badge">{job.type}</span>
              <p className="desc">{job.description}</p>
              <p><em>{job.posted}</em></p>
              <div className="job-actions">
  <Link to={`/jobs/${job.id}`} className="view-btn">View Details</Link>
  <Link to={`/jobs/${job.id}/apply`} className="apply-btn">Apply</Link>
 <button
  className={`bookmark-btn ${bookmarkedIds.includes(job.id) ? 'bookmarked' : ''}`}
  title={bookmarkedIds.includes(job.id) ? "Unbookmark Job" : "Save Job"}
  onClick={() => toggleBookmark(job)}>
  <FontAwesomeIcon icon={bookmarkedIds.includes(job.id) ? solidStar : regularStar} />
</button>
</div>

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Jobs;

