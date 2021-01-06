import React, { useEffect } from 'react';
import profilePic from '../images/BWProfile.jpg';
import { useSpring, animated } from "react-spring";
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

function Home(props) {
  const dispatch = useDispatch();
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });

  useEffect(() => {
    dispatch({
      type: 'UPDATE_HAS_BRACKETS',
      payload: props.history.location.pathname,
    });
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [dispatch, props.history.location.pathname]);

  return (
    <animated.div style={trans} className='home-container'>
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
        <p>Here are some of the tools I have built</p>
        <button 
          className='home-viewProjects-button'
          onClick={()=>props.history.push('/project')}
        >View my projects
        </button>
      </div>
    </animated.div>
  );
}

export default connect()(withRouter(Home));
