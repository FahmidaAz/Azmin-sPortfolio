import React, { useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            const response = await fetch('https://api.github.com/users/FahmidaAz/repos');
            const data = await response.json();
            setRepos(data);
        };

        fetchRepos();
    }, []);

    return (
        <div className="projects-container">
            <h1>My GitHub Projects</h1>
            <div className="project-list">
                {repos.map(repo => (
                    <div className="project-card" key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                        <p>{repo.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
