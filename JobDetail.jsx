import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './JobDetail.css';

const jobDetailsData = {
  1: {
    id: 1,
    title: 'Frontend Developer',
    company: 'Infosys',
    logo: '/logos/abc.jpg',
    location: 'Agartala, Tripura',
    experience: '0–1 Years',
    type: 'Full-Time',
    posted: '3 Days Ago',
    description: 'Build user interfaces with React.js and modern web tools.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    responsibilities: ['Develop responsive UI', 'Collaborate with UX team', 'Ensure cross-browser compatibility']
  },
  2: {
    id: 2,
    title: 'Backend Developer',
    company: 'TCS',
    logo: '/logos/xyz.png',
    location: 'Hyderabad, Telangana',
    experience: '1–3 Years',
    type: 'Remote',
    posted: '1 Day Ago',
    description: 'Design scalable backend APIs using Node.js.',
    skills: ['Node.js', 'Express', 'MongoDB'],
    responsibilities: ['Develop REST APIs', 'Handle server-side logic', 'Work with DevOps for deployment']
  },
  3: {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Cognizant',
    logo: '/logos/d.png',
    location: 'Bangalore, Karnataka',
    experience: '3–5 Years',
    type: 'Full-Time',
    posted: '5 Days Ago',
    description: 'Create user-centric UI/UX designs for web and mobile applications.',
    skills: ['Figma', 'Sketch', 'Adobe XD'],
    responsibilities: ['Design mockups', 'Conduct user testing', 'Improve design systems']
  },
  4: {
    id: 4,
    title: 'Data Analyst',
    company: 'Wipro',
    logo: '/logos/WIT.png',
    location: 'Mumbai, Maharashtra',
    experience: '1–3 Years',
    type: 'Contract',
    posted: '2 Days Ago',
    description: 'Analyze and visualize data trends for decision-making support.',
    skills: ['SQL', 'Tableau', 'Python'],
    responsibilities: ['Create dashboards', 'Analyze KPIs', 'Collaborate with stakeholders']
  },
  5: {
    id: 5,
    title: 'DevOps Engineer',
    company: 'HCL Technologies',
    logo: '/logos/c.png',
    location: 'Chennai, Tamil Nadu',
    experience: '3–5 Years',
    type: 'Remote',
    posted: '4 Days Ago',
    description: 'Maintain CI/CD pipelines and monitor infrastructure.',
    skills: ['Docker', 'Kubernetes', 'AWS'],
    responsibilities: ['Setup pipelines', 'Monitor logs', 'Automate deployments']
  },
  6: {
    id: 6,
    title: 'Mobile App Developer',
    company: 'Capgemini',
    logo: '/logos/a.png',
    location: 'Pune, Maharashtra',
    experience: '2–4 Years',
    type: 'Full-Time',
    posted: '6 Days Ago',
    description: 'Develop cross-platform mobile applications using Flutter/React Native.',
    skills: ['Flutter', 'React Native', 'Dart'],
    responsibilities: ['Build mobile apps', 'Integrate APIs', 'Fix bugs']
  },
  7: {
    id: 7,
    title: 'System Administrator',
    company: 'IBM',
    logo: '/logos/n.png',
    location: 'Delhi, India',
    experience: '5+ Years',
    type: 'Full-Time',
    posted: 'Today',
    description: 'Manage servers, network security, and IT operations.',
    skills: ['Linux', 'Networking', 'Cloud Infrastructure'],
    responsibilities: ['Monitor systems', 'Manage backups', 'Ensure security compliance']
  },
  8: {
    id: 8,
    title: 'QA Engineer',
    company: 'Accenture',
    logo: '/logos/An.png',
    location: 'Noida, UP',
    experience: '1–3 Years',
    type: 'Full-Time',
    posted: '2 Days Ago',
    description: 'Conduct manual and automated testing on web applications.',
    skills: ['Selenium', 'JIRA', 'Postman'],
    responsibilities: ['Write test cases', 'Report bugs', 'Maintain automation scripts']
  },
  9: {
    id: 9,
    title: 'Full Stack Developer',
    company: 'Deloitte',
    logo: '/logos/de.png',
    location: 'Ahmedabad, Gujarat',
    experience: '2–4 Years',
    type: 'Remote',
    posted: '5 Days Ago',
    description: 'Develop front and back end applications using MERN stack.',
    skills: ['MongoDB', 'Express', 'React', 'Node.js'],
    responsibilities: ['Build full-stack apps', 'Design schemas', 'Handle API integration']
  },
  10: {
    id: 10,
    title: 'Business Analyst',
    company: 'Oracle',
    logo: '/logos/O.png',
    location: 'Jaipur, Rajasthan',
    experience: '3–5 Years',
    type: 'Contract',
    posted: '3 Days Ago',
    description: 'Gather business requirements and bridge gap between stakeholders and tech team.',
    skills: ['Requirement Gathering', 'MS Excel', 'Agile'],
    responsibilities: ['Conduct meetings', 'Create documentation', 'Communicate between teams']
  },
  11: {
    id: 11,
    title: 'Project Manager',
    company: 'Tech Mahindra',
    logo: '/logos/T.png',
    location: 'Kolkata, West Bengal',
    experience: '5+ Years',
    type: 'Full-Time',
    posted: '1 Week Ago',
    description: 'Lead cross-functional teams in Agile project environments.',
    skills: ['Agile', 'Scrum', 'Team Management'],
    responsibilities: ['Manage timelines', 'Facilitate sprints', 'Track project progress']
  },
  12: {
    id: 12,
    title: 'AI/ML Engineer',
    company: 'Google',
    logo: '/logos/G.png',
    location: 'Thiruvananthapuram, Kerala',
    experience: '2–4 Years',
    type: 'Remote',
    posted: '2 Days Ago',
    description: 'Develop machine learning models and integrate with applications.',
    skills: ['Python', 'TensorFlow', 'NLP'],
    responsibilities: ['Train ML models', 'Deploy to production', 'Analyze model performance']
  },
  13: {
    id: 13,
    title: 'Tech Support Engineer',
    company: 'Amazon',
    logo: '/logos/su.png',
    location: 'Patna, Bihar',
    experience: '0–1 Years',
    type: 'Full-Time',
    posted: 'Today',
    description: 'Provide tech support to customers via chat, email, and phone.',
    skills: ['Communication', 'Troubleshooting', 'CRM Tools'],
    responsibilities: ['Resolve customer queries', 'Document issues', 'Escalate tickets']
  },
  14: {
    id: 14,
    title: 'Content Writer',
    company: 'LinkedIn',
    logo: '/logos/L.png',
    location: 'Indore, MP',
    experience: '1–3 Years',
    type: 'Part-Time',
    posted: 'Yesterday',
    description: 'Create engaging and SEO-friendly content for blogs and websites.',
    skills: ['SEO', 'Content Strategy', 'Editing'],
    responsibilities: ['Write blog posts', 'Research topics', 'Optimize content for SEO']
  }
};

const JobDetail = () => {
  const { jobId } = useParams();
  const job = jobDetailsData[jobId];

  if (!job) return <p>Job not found.</p>;

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default JobDetail;



