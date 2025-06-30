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
    captcha: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  useEffect(() => {
    if (
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      console.warn('Passwords do not match');
    }
  }, [formData.password, formData.confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    for (let key in formData) {
      payload.append(key, formData[key]);
    }

    try {
      const res = await axios.post('http://localhost:8085/auth/register', payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('YES ' + res.data);
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('Registration failed.');
    }
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <select name="title" value={formData.title} onChange={handleChange} required>
            <option value="">Select Title</option>
            <option value="Mr">Mr</option>
            <option value="Ms">Ms</option>
            <option value="Mrs">Mrs</option>
          </select>

          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="text" name="fatherName" placeholder="Father's Name" value={formData.fatherName} onChange={handleChange} required />
          <input type="text" name="motherName" placeholder="Mother's Name" value={formData.motherName} onChange={handleChange} required />

          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="General">General</option>
            <option value="OBC">OBC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
          </select>

          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          <input type="text" name="aadhar" placeholder="Aadhar Number" pattern="\d{12}" title="Aadhar must be 12 digits" value={formData.aadhar} onChange={handleChange} required />
          <input type="tel" name="mobile" placeholder="Mobile Number" pattern="[6-9]{1}[0-9]{9}" title="Enter a valid 10-digit mobile number" value={formData.mobile} onChange={handleChange} required />
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />

          <p>Please enter the text: <strong>AB12X9</strong></p>
          <input type="text" name="captcha" placeholder="Enter Captcha" value={formData.captcha} onChange={handleChange} required />

          <label className="upload-label">
            Upload Profile Image:
            <input type="file" name="file" accept="image/*" onChange={handleChange} required />
          </label>

          <button type="submit">Register</button>
          <p className="alt-link">
            Already registered? <a href="/login">Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
}
