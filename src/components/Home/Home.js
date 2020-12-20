import React from 'react';
import profilePic from '../images/BWProfile.jpg';
import { useSpring, animated } from "react-spring";

function Home() {
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={trans} className='home-container'>
      <div className='home-intro'>
          <h2 className='home-intro-h2'>Hi, I'm Justus.</h2>
          <h2 className='home-intro-h2'>I am a software developer.</h2>
        <p className='home-intro-p'>I build tools that help users focus on their goals and dreams and not on the software that hinders them.</p>
      </div>
      <div className='home-profile'>
        <img
          src={profilePic}
          alt='Justus Witmer'
          className='home-profile-img'
        />
      </div>
      <div className='home-viewProjects'>
        <p>Here are some of the tools I have built</p>
        <button className='home-viewProjects-button'>View my projects</button>
      </div>
    </animated.div>
  );
}

export default Home;
