import React, { useEffect } from 'react';
import {connect, useDispatch} from 'react-redux';
import { useSpring, animated } from "react-spring";
import AboutItem from './AboutItem';
import mapStoreToProps from '../../redux/mapStoreToProps';


// ProfileLogos
import MyersBriggs from '../images/ProfileLogos/MyersBriggs.svg';
import StrengthsFinders from '../images/ProfileLogos/StrengthsFinders.svg';


const profileLogos = [
  {logo: "MyersBriggs", count: 1},
  {logo: "StrengthsFers", count: 2},
  {logo: 'StrengthsFinders', count: 3},
  {logo: 'StrengthsFinder', count: 4},
];

function About(props) {
  const dispatch = useDispatch();
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });
  const openingTag = '<about>';
  const closingTag ='</about>';

  useEffect(() => {
    dispatch({
      type: 'UPDATE_HAS_BRACKETS',
      payload: props.history.location.pathname,
    });
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [dispatch, props.history.location.pathname]);

  return (
    <animated.div style={trans} className='about-container'>
      {props.store.dimensions <= 499 ? '' : <span className='tag about-opening-tag'>{openingTag}</span>}
      <h2 tabIndex='0' className='about-intro-h2'>Here is a snapshot of who I am as a developer</h2>
      <div>
        <ul className='about-list'>
          <li>- I am a data-driven, analytical Full Stack Software Engineer with experience in small business and finance</li>
          <li>- My specialties include compensation analytics, problem-solving, and project management</li>
          <li>- I have been recognized for being a visionary leader and having the organization and consistency to achieve project deadlines and maintain client focused</li>
          <li>- I am always pushing for new ways to look at data and communicate its significance to my clients and their users</li>
        </ul>
      </div>
      <div className='about-personality'>
      <h3 tabIndex='0' className='about-personality-h3'>In my personal life I am a</h3>
      <ul className='about-list'>
        <li>- Devoted husband and dad</li>
        <li>- Avid Book Reader (physical and audio)</li>
        <li>- Causal board gamer</li>
        <li>- Amateur woodworker</li>
        <li>- Life-long musician</li>
      </ul>
      <h3 tabIndex='0' className='about-personality-h3'>I also enjoy learning about my personality and how I percieve the world</h3>
      {props.store.about.map(about =>
        <AboutItem
          key={about.profile}
          about={about}
        />
      )}
      </div>
      {props.store.dimensions <= 499 ? '' : <span className='tag about-closing-tag'>{closingTag}</span>}
    </animated.div>
  );
}

export default connect(mapStoreToProps)(About);