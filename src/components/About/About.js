import React from 'react';
import {connect} from 'react-redux';
import AboutItem from './AboutItem';
import mapStoreToProps from '../../redux/mapStoreToProps';

function About(props) {

  return (
    <div className='about-container'>
      <div className='about-intro'>
        <p className='secondary'>
          Data-driven, analytical Full Stack Software Engineer with experience in small business and finance. 
          Specialties include compensation analytics, problem-solving, and project management. 
          A visionary leader recognized for having the organization and consistency to achieve project deadlines and foresee potential pitfalls or inefficiencies, who is always pushing for new ways to look at data.
        </p>
      </div>
      <div className='about-personality'>
      <h3>I really enjoy learning about my personality and what makes me tick. Here are a few pesronality profiles about myself.</h3>
      {props.store.about.map(about =>
      <AboutItem
        about={about}
      />
      )}
      </div>
    </div>
  );
}

export default connect(mapStoreToProps)(About);