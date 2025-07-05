import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [mobile, setMobile] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [captcha, setCaptcha] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailLogin = (e) => {
    e.preventDefault();
    alert('🔐 Email login submitted (UI only)');
  };

  const handleMobileLogin = (e) => {
    e.preventDefault();

    const validMobile = /^[6-9]\d{9}$/.test(mobile.trim());
    if (!validMobile) {
      alert('❗ Enter a valid 10-digit mobile number starting with 6-9');
      return;
    }

    if (!captcha.trim()) {
      alert('❗ Captcha is required');
      return;
    }

    alert(`📲 OTP sent to ${countryCode} ${mobile}`);
    setOtpSent(true);
  };

  const handleOtpSubmit = () => {
    if (otp.trim() === '123456') {
      alert('✅ OTP verified. Logged in successfully (UI only)');
    } else {
      alert('❌ Invalid OTP. Try again.');
    }
  };

  return (
    <div className="login-page">
      {/* Email Login Box */}
      <div className="login-box">
        <h2>Email Login</h2>
        <form onSubmit={handleEmailLogin}>
         
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="text" placeholder="Enter Captcha" required />
          <p className="captcha-demo">Captcha: <strong>AB12X9</strong></p>
          <button type="submit">Login</button>

          <p className="alt-link">
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
          <p className="alt-link">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>

      {/* Mobile Login Box */}
      <div className="login-box">
        <h2>Mobile Login</h2>
        <form onSubmit={handleMobileLogin}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="text"
              style={{ width: '30%' }}
              placeholder="Country"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <input
            type="text"
            placeholder="Enter Captcha"
            value={captcha}
            onChange={(e) => setCaptcha(e.target.value)}
            required
          />
          <p className="captcha-demo">Captcha: <strong>AB12X9</strong></p>


            <button id="send-otp" type="submit">Send OTP</button>

       <div className="otp-box">
  <input
    type="text"
    placeholder="Enter OTP"
    value={otp}
    onChange={(e) => setOtp(e.target.value)}
    required
    className="otp-input"
  />
  <button type="button" onClick={handleOtpSubmit}>
    Submit OTP
  </button>
</div>


          <p className="alt-link">Use your registered number to receive a login code.</p>
        </form>
      </div>
    </div>
  );
}
