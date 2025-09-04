import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileImage from '../assets/images/IMG_0267.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Aayush Sapkota" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/sapkota-aayush" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aayush-sapkota/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Aayush Sapkota</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/sapkota-aayush" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aayush-sapkota/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;