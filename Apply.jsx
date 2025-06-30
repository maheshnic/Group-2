import React, { useState } from 'react';
import './Apply.css';
import { useParams } from 'react-router-dom';

const Apply = () => {
  const { jobId } = useParams();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    degree: '',
    specialization: '',
    percentage: '',
    college: '',
    experience: '',
    resume: null,
    coverLetter: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="apply-form-container">
      <h2>Apply for Job ID: {jobId}</h2>
      <form className="apply-form" onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <input type="text" name="degree" placeholder="Degree (e.g., B.Tech)" onChange={handleChange} required />
        <input type="text" name="specialization" placeholder="Specialization (e.g., CSE)" onChange={handleChange} required />
        <input type="text" name="percentage" placeholder="CGPA/Percentage" onChange={handleChange} required />
        <input type="text" name="college" placeholder="College Name" onChange={handleChange} required />
        <input type="text" name="experience" placeholder="Job Experience (if any)" onChange={handleChange} />

        <label>Upload Resume:</label>
        <input type="file" name="resume" onChange={handleChange} accept=".pdf,.doc,.docx" required />

        <label>Upload Cover Letter:</label>
        <input type="file" name="coverLetter" onChange={handleChange} accept=".pdf,.doc,.docx" />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default Apply;





