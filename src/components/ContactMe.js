import React from 'react';
import './ContactMe.css'; // Make sure to create and link this CSS file for styling

function ContactMe() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>If you have any questions, please feel free to reach out to me!</p>
            
            <div className="contact-info">
                <h2>Email</h2>
                <p>School Email: <a href="mailto:fahmida.azmin@mail.citytech.cuny.edu">fahmida.azmin@mail.citytech.cuny.edu</a></p>
                <p>Personal Email: <a href="mailto:shoilyazmin96@gmail.com">shoilyazmin96@gmail.com</a></p>
                
                <h2>LinkedIn</h2>
                <p>Connect with me on LinkedIn: <a href="https://www.linkedin.com/in/fahmidaazmin/" target="_blank" rel="noopener noreferrer">Fahmida Azmin</a></p>
            </div>
        </div>
    );
}

export default ContactMe;
