import React from 'react';

export default function About() {

  return (
    <div className='about-container'>
      <div className='aboutIntro'>

        <p className='secondary'>
        Data-driven, analytical Full Stack Software Engineer with experience in small business and finance. 
        Specialties include compensation analytics, problem-solving, and project management. 
        A visionary leader recognized for having the organization and consistency to achieve project deadlines and foresee potential pitfalls or inefficiencies, who is always pushing for new ways to look at data.
        </p>
      </div>
      <h3 className='aboutPersonality'>I really enjoy learning about my personality and what makes me tick. Here are a few pesronality profiles about myself.</h3>
      <div className='personality1'>
        <h4>Strengths Finders</h4>
        <p className='secondary'>Responsibility</p>
        <p className='secondary'>Restoratvie</p>
        <p className='secondary'>Analytical</p>
        <p className='secondary'>Intellection</p>
        <p className='secondary'>Consistency</p>
      </div>
      <div className='personality2'>
        <h4>Myers Briggs</h4>
        <p className='secondary'>ISTJ</p>
      </div>
      <div className='personality3'>
        <h4>Enneagram</h4>
        <p className='secondary'>Type 6</p>
      </div>
      <div className='personality4'>
        <h4>Superpowers</h4>
        <p className='secondary'>Experimentation</p>
        <p className='secondary'>Grit</p>
        <p className='secondary'>Vision</p>
      </div>
    </div>

  );
}
