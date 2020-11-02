import React, { Component } from 'react';
import linkedin from './images/LI-Logo.png';

class Contact extends Component {

  render() {
    return (
      <div className='contact'>
        <h3>Reach out to me via:</h3>
        <p className='secondary'>email: justus.witmer@gmail.com <span className='tertiary'>or</span>
          <a href="https://www.linkedin.com/in/justus-witmer" >
            <img src={linkedin} className='image'
              alt='LinkedIn Logo'
            />
          </a>
        </p>
      </div>
    );
  }
}

export default Contact;
