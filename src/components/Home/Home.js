import React, { useEffect } from 'react';
import profilePic from '../images/Miscellaneous/BWProfile.png';
import { useSpring, animated } from "react-spring";
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

function Home(props) {
  const dispatch = useDispatch();
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });
  const openingTag = '<home>';
  const closingTag = '</home>';
  const homeTag = '<or/>';

  useEffect(() => {
    dispatch({
      type: 'UPDATE_HAS_BRACKETS',
      payload: props.history.location.pathname,
    });
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [dispatch, props.history.location.pathname]);

  return (
    <animated.div style={trans} className='home-container'>
      {props.store.dimensions <= 499 ? '' : <span className='tag home-opening-tag'>{openingTag}</span>}
      <div className='home-intro'>
          <h2 className='home-intro-h2'>Hi, I'm Justus.</h2>
          <h2 className='home-intro-h2'>I am a software developer.</h2>
        <p className='home-intro-p'>I build software that is reliable and intuitive by partnering with UX Designers and Content Creators, ensuring that each tool is thoughtfully and intentionally built from concept to production.</p>
      </div>
      <div className='home-profile'>
        <img
          src={profilePic}
          alt='Justus Witmer'
          className='home-profile-img'
        />
      </div>
      <div className='home-viewProjects'>
        <div className='home-viewProjects-div-btn'>
          <p>See the projects I have built</p>
          <button 
            className='home-viewProjects-button'
            onClick={()=>props.history.push('/project')}
          >View my projects
          </button>
        </div>
        <div>
          <h4 className='home-button-tag'>{homeTag}</h4>
        </div>
        <div className='home-viewProjects-div-btn'>
          <p>See the tools I use</p>
          <button 
            className='home-viewProjects-button'
            onClick={()=>props.history.push('/toolkit')}
          >View my toolkit
          </button>
        </div>
        {props.store.dimensions <= 499 ? '' : <span className='tag home-closing-tag'>{closingTag}</span>}
      </div>
      
    </animated.div>
  );
}

export default connect(mapStoreToProps)(withRouter(Home));
