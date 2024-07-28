import React from 'react';
import './Documents.css';  
import resume from './FahmidaAzminResume.pdf';
import transcript from './Transcript.pdf';
import certificate from './B.tech Certificate.pdf';

function Documents() {
    return (
        <div className="documents-container">
            <h1 className="documents-title">Key Documents</h1>
            <div className="document-card">
                <h2>Resume</h2>
                <p>View or download my resume for a detailed overview of my professional experiences and skills.</p>
                <div className="document-actions">
                    <a href={resume} target="_blank" className="view-link">View Resume</a>
                    <button onClick={() => window.location.href = resume}>Download Resume</button>
                </div>
            </div>
            <div className="document-card">
                <h2>Transcript</h2>
                <p>Check out my academic transcript reflecting my coursework and achievements.</p>
                <div className="document-actions">
                    <a href={transcript} target="_blank" className="view-link">View Transcript</a>
                    <button onClick={() => window.location.href = transcript}>Download Transcript</button>
                </div>
            </div>
            <div className="document-card">
                <h2>Certificate</h2>
                <p>See my qualifications and areas of expertise by viewing or downloading my certificate.</p>
                <div className="document-actions">
                    <a href={certificate} target="_blank" className="view-link">View Certificate</a>
                    <button onClick={() => window.location.href = certificate}>Download Certificate</button>
                </div>
            </div>
        </div>
    );
}

export default Documents;
