import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "C++",
    "JavaScript",
    "React",
    "Django",
    "Arduino",
    "Docker",
    "LangChain",
    "OpenAI GPT",
    "Vertex AI",
    "BigQuery"
];

const labelsSecond = [
    "Vector Embeddings",
    "RAG Pipelines",
    "Backend Architecture",
    "File System Management",
    "AI Integration",
    "Problem Solving",
    "Documentation",
    "Git",
    "GitHub"
];

const labelsThird = [
    "Communication",
    "Leadership",
    "Public Speaking",
    "Teamwork",
    "Project Management",
    "Mentoring",
    "Toastmasters"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Backend Development & AI Integration</h3>
                    <p>Passionate about building robust backend systems with Python and C++. I specialize in AI integrations, vector embeddings, and RAG pipelines. Strong foundation in designing efficient software architectures.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>AI & Machine Learning</h3>
                    <p>Experienced in building enterprise-grade GenAI-enabled solutions using OpenAI GPT, LangChain, and Vertex AI. I create intelligent systems that empower data-driven decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Leadership & Communication</h3>
                    <p>Active Toastmasters member with leadership experience as VP of Membership and President. Strong communication skills developed through mentoring, public speaking, and team collaboration.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;