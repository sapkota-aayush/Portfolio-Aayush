import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/sapkota-aayush" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/aayush-sapkota/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>AI powered portfolio by AU</p>
    </footer>
  );
}

export default Footer;