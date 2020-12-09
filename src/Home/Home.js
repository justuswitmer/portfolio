import React, { Component } from 'react';
import profilePic from '../images/BWProfile.jpg';

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <div className='home-intro'>
          <h2>Hi, I'm Justus Witmer.</h2>
          <h2>I am a software developer.</h2>
          <p>I build tools that help users focus on their goals and dreams and not on the software that hinders them.</p>
        </div>
        <div className='home-profile'>
          <img
            src={profilePic}
            alt='Image of Justus Witmer'
            className='home-profile-img'
          />
        </div>
        <div className='home-viewProjects'>
          <p>Here are some of the tools I have built</p>
          <button>View my projects</button>
        </div>
      </ div>
    );
  }
}

export default Home;
