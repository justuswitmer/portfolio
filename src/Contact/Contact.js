import React, { Component } from 'react';
import linkedin from '../images/LI-Logo.png';

class Contact extends Component {

  render() {
    return (
      <p className='contact-container'>
        <h3>Reach out to me via:</h3>
        <a href="https://www.linkedin.com/in/justus-witmer" >
          <img src={linkedin} className='image'
            alt='LinkedIn Logo'
          />
        </a>
      </p>
    );
  }
}

export default Contact;
