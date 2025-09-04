import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "C++",
    "Django",
    "FastAPI",
    "Flask",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP"
];

const labelsSecond = [
    "LangChain",
    "OpenAI GPT",
    "Vertex AI",
    "Vector Embeddings",
    "RAG Pipelines",
    "Machine Learning",
    "TensorFlow",
    "PyTorch",
    "BigQuery",
    "Pandas",
    "NumPy"
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
            <h1>What I Love to Do</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Backend Development</h3>
                    <p>I love working with backend systems and learning how architecture works. I'm passionate about building robust APIs, working with databases, and understanding how different systems communicate and work together. Not a frontend guy - I thrive in the backend world!</p>
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
                    <p>Experienced in building enterprise-grade GenAI-enabled solutions using OpenAI GPT, LangChain, and Vertex AI. I create intelligent systems that empower data-driven decision making and love working with AI integrations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Leadership & Communication</h3>
                    <p>Active Toastmasters member with leadership experience as VP of Membership and President. Strong communication skills developed through mentoring, public speaking, and team collaboration.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
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