import React, { useEffect } from 'react';
import profilePic from '../images/Miscellaneous/BWProfile.jpg';
import { useSpring, animated } from "react-spring";
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Home(props) {
  const dispatch = useDispatch();
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });
  const openingTag = '<home>';
  const closingTag = '</home>';

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
          <h2 className='home-intro-h2' tabIndex='0'>Hi, I'm Justus.</h2>
          <h2 className='home-intro-h2' tabIndex='0'>I am a software developer.</h2>
        <p className='home-intro-p' tabIndex='0'>I build software that is reliable and intuitive by partnering with UX Designers and Content Creators, ensuring that each tool is thoughtfully and intentionally built from concept to production.</p>
      </div>
      <div className='home-profile'>
        <img
          src={profilePic}
          alt='Justus Witmer'
          className='home-profile-img'
          tabIndex='0'
        />
      </div>
      <div className='home-viewProjects'>
        <p tabIndex='0'>Here are some of the tools I have built</p>
        <button 
          className='home-viewProjects-button'
          onClick={()=>props.history.push('/project')}
        >View my projects
        </button>
        {props.store.dimensions <= 499 ? '' : <span className='tag home-closing-tag'>{closingTag}</span>}
      </div>
      
    </animated.div>
  );
}

export default connect()(withRouter(Home));
