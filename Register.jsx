import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Register.css';

export default function Register() {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    fatherName: '',
    motherName: '',
    gender: '',
    category: '',
    dob: '',
    aadhar: '',
    mobile: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    // Education fields
    board10: '',
    percent10: '',
    board12: '',
    percent12: '',
    collegeName: '',
    degree: '',
    specialization: '',
    passingYear: '',
    cgpa: '',
    // Files
    captcha: '',
    profilePic: null,
    marksheet10: null,
    marksheet12: null,
    collegeId: null,
    gradeSheet: null,
    aadharCard: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  useEffect(() => {
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      console.warn('Passwords do not match');
    }
  }, [formData.password, formData.confirmPassword]);

const handleSubmit = (e) => {
  e.preventDefault();

  // Validate Aadhar (12 digits)
  const aadharValid = /^\d{12}$/.test(formData.aadhar.trim());

  // Validate Mobile (starts with 6-9, and has 10 digits)
  const mobileValid = /^[6-9]\d{9}$/.test(formData.mobile.trim());

  if (!aadharValid || !mobileValid) {
    let errorMsg = '';
    if (!aadharValid) errorMsg += ' Invalid Aadhar:\n';
    if (!mobileValid) errorMsg += ' Invalid Mobile:\n';
    alert(errorMsg);
    return;
  }

  // If everything is valid:
  console.log(' Valid submission data:', formData);
  alert('Form submitted successfully (UI only)');
};


  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit} className="register-form-grid">
          {/* PERSONAL INFORMATION */}
          <fieldset>
            <legend>Personal Information</legend>
            <div className="form-row">
              <select name="title" value={formData.title} onChange={handleChange} required>
                <option value="">Title</option>
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
                <option value="Mrs">Mrs</option>
              </select>
              <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="text" name="fatherName" placeholder="Father's Name" value={formData.fatherName} onChange={handleChange} required />
              <input type="text" name="motherName" placeholder="Mother's Name" value={formData.motherName} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <select name="category" value={formData.category} onChange={handleChange} required>
                <option value="">Category</option>
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
            </div>
            <div className="form-row">
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
              <input type="text" name="aadhar" placeholder=" 12 digit Aadhar Number" value={formData.aadhar} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="tel" name="mobile" placeholder=" 10 digit Mobile Number" value={formData.mobile} onChange={handleChange} required />
              <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input type="password" name="password" placeholder=" minimum 8 length with single  special char " value={formData.password} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
          </fieldset>

          {/* EDUCATIONAL BACKGROUND */}
          <fieldset>
            <legend>Educational Background</legend>
            <div className="form-row">
              <input type="text" name="board10" placeholder="10th Board Name" value={formData.board10} onChange={handleChange} required />
              <input type="text" name="percent10" placeholder="10th % / CGPA" value={formData.percent10} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="text" name="board12" placeholder="12th Board Name" value={formData.board12} onChange={handleChange} required />
              <input type="text" name="percent12" placeholder="12th % / CGPA" value={formData.percent12} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="text" name="collegeName" placeholder="College Name" value={formData.collegeName} onChange={handleChange} required />
              <input type="text" name="degree" placeholder="Degree" value={formData.degree} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="text" name="specialization" placeholder="Specialization" value={formData.specialization} onChange={handleChange} required />
              <input type="text" name="passingYear" placeholder="Passing Year" value={formData.passingYear} onChange={handleChange} required />
              <input type="text" name="cgpa" placeholder="CGPA" value={formData.cgpa} onChange={handleChange} required />
            </div>
          </fieldset>

          {/* DOCUMENT UPLOAD */}
          <fieldset>
            <legend>Document Upload</legend>
            <div className="form-row">
              <label className="upload-label">Profile Picture:
                <input type="file" name="profilePic" onChange={handleChange} required />
              </label>
              <label className="upload-label">10th Marksheet:
                <input type="file" name="marksheet10" onChange={handleChange} required />
              </label>
            </div>
            <div className="form-row">
              <label className="upload-label">12th Marksheet:
                <input type="file" name="marksheet12" onChange={handleChange} required />
              </label>
              <label className="upload-label">College ID:
                <input type="file" name="collegeId" onChange={handleChange} required />
              </label>
            </div>
            <div className="form-row">
              <label className="upload-label">College Gradesheet:
                <input type="file" name="gradeSheet" onChange={handleChange} required />
              </label>
              <label className="upload-label">Aadhar Card:
                <input type="file" name="aadharCard" onChange={handleChange} required />
              </label>
            </div>
            <div className="form-row">
              <p style={{color:'red'}}>Captcha : 198ZX4</p>
              <input type="text" name="captcha" placeholder="Enter Captcha" value={formData.captcha} onChange={handleChange} required />
            </div>
          </fieldset>

          <button type="submit">Register</button>
          <p className="alt-link">Already registered? <a href="/login">Login here</a></p>
        </form>
      </div>
    </div>
  );
}
