import React from 'react';
import goat from './images/goat.jpg';

export default function About() {

  return (
    <div className='about'>
      <div className='pageDiv'>
        <h1>Here's a little about me!</h1>
        <p>
          I am a Full Stack Software Engineer student at Prime Digital Academy, with a background in analytics.
          I have experience in small business analytics as well as finance analytics. My interests lie mainly in using my skills as a software engineer to leverage data analysis to better inform a business on decision making.
          My personality is such that I am always pushing for new ways to look at data, yet I also have enough restraint to know when to slow down and complete a project.
        </p>
      </div>
      <div className='aboutPersonality'>
        <h2>Personality Profiles</h2>
        <div className='box'>
          <h4>Strengths Finders</h4>
          <p>Responsibility</p>
          <p>Restoratvie</p>
          <p>Analytical</p>
          <p>Intellection</p>
          <p>Consistency</p>
        </div>
        <div className='box'>
          <h4>Myers Briggs</h4>
          <p>ISTJ</p>
        </div>
        <div className='box'>
          <h4>Enneagram</h4>
          <p>Type 6</p>
        </div>
        <div className='box'>
          <h4>Superpowers</h4>
          <p>Experimentation</p>
          <p>Grit</p>
          <p>Vision</p>
          <img src={goat}
            alt='goat' />
        </div>
      </div>
    </div>

  );
}
