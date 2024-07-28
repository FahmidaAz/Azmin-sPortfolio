import React from 'react';
import './Skills.css'; // Ensure this is correctly linked

function Skills() {
    return (
        <div className="skills-container">
            <h1 className="skills-title">Professional Skills</h1>
            <div className="skills-section">
                <h2>Programming Languages</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>SQL</li>
                </ul>
            </div>
            <div className="skills-section">
                <h2>Frameworks and Libraries</h2>
                <ul>
                    <li>ReactJS</li>
                    <li>JSP</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div className="skills-section">
                <h2>Tools and Technologies</h2>
                <ul>
                    <li>Git</li>
                    <li>MySQL</li>
                    <li>Visual Basic</li>
                    <li>IntelliJ IDEA</li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;
