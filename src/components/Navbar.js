import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <>
    <nav style={{ position: 'sticky' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, overflow: 'hidden' }}>
        <li style={{ float: 'left' }}><Link to="/">Home</Link></li>
        <li style={{ float: 'left' }}><Link to="/documents">Documents</Link></li>
        <li style={{ float: 'left' }}><Link to="/skills">Skills</Link></li>
        <li style={{ float: 'left' }}><Link to="/projects">Projects</Link></li>
        <li style={{ float: 'left' }}><Link to="/contact-me">Contact Me</Link></li>
      </ul>
    </nav>
    </>
  );
}

export default Navbar;
