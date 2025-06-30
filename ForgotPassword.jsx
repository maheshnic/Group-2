import React, { useState } from 'react';

const ForgotPassword = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const generateOtp = () => {
    // Check if the mobile number is valid
    if (!/^\d{10}$/.test(mobileNumber)) {
      alert('Invalid mobile number. It must be 10 digits.');
      return;
    }

    // Check if passwords are filled and match
    if (!newPassword || !confirmPassword) {
      alert('Please fill both password fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Generate and show OTP
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(randomOtp);
    alert(`Your OTP is: ${randomOtp}`);
  };

  const handleSubmitOtp = () => {
    if (otp === generatedOtp) {
      alert('OTP verified! Password reset successful.');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', textAlign: 'center' }}>
      <h2>Forgot Password</h2>

      <input
        type="tel"
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        style={{ width: '100%', marginBottom: '10px', padding: '8px',backgroundColor: '#f0f0f0' }}
      />

      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        style={{ width: '100%', marginBottom: '10px', padding: '8px' ,backgroundColor: '#f0f0f0'}}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={{ width: '100%', marginBottom: '10px', padding: '8px',backgroundColor: '#f0f0f0' }}
      />

      <button onClick={generateOtp} style={{ width: '50%', padding: '10px' ,backgroundColor: 'gray', color: 'black', border: 'none', borderRadius: '5px'}}>
        Send OTP
      </button>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        style={{ width: '100%', margin: '10px 0', padding: '8px',backgroundColor: '#f0f0f0' }}
      />

      <button  onClick={handleSubmitOtp} style={{ width: '100%', padding: '10px',backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
        Submit OTP
      </button>
    </div>
  );
};

export default ForgotPassword;
