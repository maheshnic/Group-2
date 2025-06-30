import React, { useState } from 'react';
import './Apply.css';

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    degree: '',
    specialization: '',
    cgpa: '',
    college: '',
    experience: '',
    resume: null,
    coverLetter: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="apply-container">
      <h2>Apply for Job</h2>
      <form onSubmit={handleSubmit} className="apply-form">
        <label>Full Name</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

        <label>Degree</label>
        <input type="text" name="degree" value={formData.degree} onChange={handleChange} required />

        <label>Specialization</label>
        <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} required />

        <label>CGPA / Percentage</label>
        <input type="text" name="cgpa" value={formData.cgpa} onChange={handleChange} required />

        <label>College Name</label>
        <input type="text" name="college" value={formData.college} onChange={handleChange} required />

        <label>Job Experience (in years)</label>
        <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />

        <label>Upload Resume (PDF)</label>
        <input type="file" name="resume" accept=".pdf" onChange={handleChange} required />

        <label>Upload Cover Letter (PDF)</label>
        <input type="file" name="coverLetter" accept=".pdf" onChange={handleChange} />

        <button type="submit" className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default Apply;





