import React from 'react';
import '../assets/styles/Contact.scss';
import sendMeLocationImage from '../assets/images/send_me_locacccc.jpg';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact?</h1>
          <div className="meme-container">
            <img src={sendMeLocationImage} alt="Send me location meme" className="meme-image" />
          </div>
          <p>Just kidding! Use chat system to get connect with me</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;