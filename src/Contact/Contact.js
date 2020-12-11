import React from 'react';
import linkedin from '../images/LI-Logo.png';
import { useSpring, animated } from "react-spring";

function Contact(props) {
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });


  return (
    <animated.div style={trans} className='contact-container'>
      <div className='contact-intro'>
        <h3>You can reach me on</h3>
        <a
          href="https://www.linkedin.com/in/justus-witmer"
          className='contact-linkedin-link'
        >
          <img
            src={linkedin}
            className='contact-linkedin-image'
            alt='LinkedIn Logo'
          />
        </a>
        <h3>or through filling out the form below.</h3>
      </div>
      <div className='contact-form-container'>
        <div className='contact-name'>
          <p className='contact-form-container-p'>Name</p>
          <input
            className='contact-name-input'
            type='text'
          />
        </div>
        <div className='contact-email'>
          <p className='contact-form-container-p'>Email</p>
          <input
            className='contact-email-input'
            type='email'
          />
        </div>
        <div className='contact-message'>
          <p className='contact-form-container-p'>Message</p>
          <textarea
            className='contact-message-input'
            type='text'
            rows='10'
            cols='50'
          />
        </div>
        <div className='contact-button'>
          <button className='contact-button-send'>Send</button>
        </div>
      </div>
    </animated.div>
  );
}

export default Contact;
