import React from 'react';
import Profile from './profile.jpeg';
import './Home.css'; // Import a CSS file for styles

function Home() {
  return (
    <div className="home-container">
      <img src={Profile} alt="Professional Portrait" className="profile-image" />
      <h1 className="greeting">Welcome to Fahmida Azmin's Portfolio</h1>
      <p className="introduction">
Hello, I'm Fahmida Azmin, a dedicated Software Developer based in New York, NY. With a robust academic foundation from the<b> New York City College of Technology </b>and a strong passion for technology and innovation. Throughout my academic and professional journey, I have engaged in several impactful projects. 

 I recently completed a mentorship at <b>Microsoft</b>, where I gained invaluable insights and further honed my skills in software development. This experience not only enhanced my technical abilities but also enriched my approach to problem-solving and project management.

This portfolio showcases a range of projects that demonstrate my technical skills, commitment to continuous learning, and ability to implement effective solutions in complex scenarios. Whether you're a potential employer, a fellow professional, or simply interested in my work, I invite you to explore my projects and connect with me through the 'Contact Me' tab for any collaborations or inquiries.

Thank you for visiting my portfolio. I look forward to the opportunities to collaborate and innovate together.
</p>
    </div>
  );
}

export default Home;
