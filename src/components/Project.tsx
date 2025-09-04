import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/sapkota-aayush/Folderly-Prototype" target="_blank" rel="noreferrer" className="project-link">
                    <div className="project-placeholder folderly">
                        <div className="project-icon">📁</div>
                    </div>
                </a>
                <a href="https://github.com/sapkota-aayush/Folderly-Prototype" target="_blank" rel="noreferrer"><h2>Folderly-Prototype</h2></a>
                <p>AI-powered file organization tool with natural language commands. Built with Python, OpenAI GPT-4o, OS scripting, Docker, Poetry, and Docker Compose. Industry-level desktop file management system with async architecture and smart execution modes.</p>
            </div>
            <div className="project">
                <a href="https://github.com/sapkota-aayush" target="_blank" rel="noreferrer" className="project-link">
                    <div className="project-placeholder jobmaster">
                        <div className="project-icon">💼</div>
                    </div>
                </a>
                <a href="https://github.com/sapkota-aayush" target="_blank" rel="noreferrer"><h2>JobTrackerMaster</h2></a>
                <p>Web-based job application tracking system that tracks job applications and stages using React frontend and Django backend. Tech stack includes Python (Django), React, SQLite, and Docker.</p>
            </div>
        </div>
        
        <h1>Open Source Contributions</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/sapkota-aayush/numaflow" target="_blank" rel="noreferrer" className="project-link">
                    <div className="project-placeholder opensource">
                        <div className="project-icon">🐻</div>
                    </div>
                </a>
                <a href="https://github.com/sapkota-aayush/numaflow" target="_blank" rel="noreferrer"><h2>Numaflow</h2></a>
                <p>Contributions to Intuit's Kubernetes-native data processing platform. Docker optimization improvements, gRPC server error handling fixes, bug fixes, and documentation updates. Forked from numaproj/numaflow with 1,395+ commits.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;