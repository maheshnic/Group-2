import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Apply.css';

const Apply = () => {
  
  const [formData, setFormData] = useState({
    jobTitle: localStorage.getItem('selectedJobTitle') || 'Job Position',
    companyName: localStorage.getItem('selectedCompany') || 'Company',
    description: '',
    fullName: '',
    degree: '',
    specialization: '',
    cgpa: '',
    college: '',
    experience: '',
    resume: null,
    coverLetter: null,
    transcript: null,
  });

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    alert('Application submitted successfully!');
    // Optionally store or send this data somewhere
  };

  return (
    <>
      <Header />
      <div className="apply-container">
        <h2>Apply for Job at {formData.companyName}</h2>
        <form onSubmit={handleSubmit} className="apply-form">
          <label>Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleFormChange} required />

          <label>Degree</label>
          <input type="text" name="degree" value={formData.degree} onChange={handleFormChange} required />

          <label>Specialization</label>
          <input type="text" name="specialization" value={formData.specialization} onChange={handleFormChange} required />

          <label>CGPA / Percentage</label>
          <input type="text" name="cgpa" value={formData.cgpa} onChange={handleFormChange} required />

          <label>College Name</label>
          <input type="text" name="college" value={formData.college} onChange={handleFormChange} required />

          <label>Job Experience (in years)</label>
          <input type="text" name="experience" value={formData.experience} onChange={handleFormChange} required />

          <label>Upload Resume (PDF)</label>
          <input type="file" name="resume" accept=".pdf" onChange={handleFormChange} required />

          <label>Upload Cover Letter (PDF)</label>
          <input type="file" name="coverLetter" accept=".pdf" onChange={handleFormChange} />

          <label>Upload Transcript (PDF)</label>
          <input type="file" name="transcript" accept=".pdf" onChange={handleFormChange} required />

          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Apply;





