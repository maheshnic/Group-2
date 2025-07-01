import React, { useState } from 'react';
import './DocumentUpload.css';

const DocumentUpload = () => {
  const [files, setFiles] = useState({
    resume: null,
    aadhar: null,
    scorecard: null,
  });

  const handleFileChange = (e, type) => {
    setFiles(prev => ({ ...prev, [type]: e.target.files[0] }));
  };

  const handleDelete = (type) => {
    setFiles(prev => ({ ...prev, [type]: null }));
  };

  return (
    <div className="fullscreen-container">
      <div className="upload-card">
        <h1>📄 Upload & View Your Documents</h1>
        {['resume', 'aadhar', 'scorecard'].map(type => (
          <div key={type} className="input-group">
            <label htmlFor={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}:
            </label>
            <input
              type="file"
              id={type}
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => handleFileChange(e, type)}
            />
            {files[type] && (
              <div className="preview">
                <p> {files[type].name}</p>
                <div className="preview-actions">
                  <a
                    href={URL.createObjectURL(files[type])}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View 🔍
                  </a>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(type)}
                  >
                    Delete ❌
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentUpload;
