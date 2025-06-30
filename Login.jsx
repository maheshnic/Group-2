import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const sendOtp = () => {
    // You can hook this with backend SMS service
    if (mobile.match(/^[6-9]\d{9}$/)) {
      alert('OTP sent to ' + mobile);
      setOtpSent(true);
    } else {
      alert('Enter valid mobile number');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login submitted');
    // Add authentication logic here
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2 style={{color:'brown'}}>Welcome to LOGIN Page </h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />

          <input type="text" placeholder="Username " required />
          <input type="password" placeholder="Password" required />

          <input type="text" placeholder="Enter Captcha" required />
          <p className="captcha-demo">Captcha: <strong>AB12X9</strong></p>
        
              <button type="submit">Login</button>
<br/>
<p className="alt-link">
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      alert("Please enter your phone number to reset your password.");
      
    }}
  >
    Forgot Password?
  </a>
</p>

          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            pattern="[6-9]{1}[0-9]{9}"
            title="Enter a valid mobile number"
            required
          />
          <button id='s1' type="button" onClick={sendOtp}>Send OTP</button>

          {otpSent && (
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          )}

       
          
          <p className="alt-link">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}
