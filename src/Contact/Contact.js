import React, { Component } from 'react';
import linkedin from '../images/LI-Logo.png';

class Contact extends Component {

  render() {
    return (
      <div className='contact-container'>
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
            <input
              className='contact-message-input'
              type='text'
            />
          </div>
          <div className='contact-button'>
            <button className='contact-button-send'>Send</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
