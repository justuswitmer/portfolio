import React from 'react';
import { connect } from 'react-redux';
import { useSpring, animated } from "react-spring";
import mapStoreToProps from '../../redux/mapStoreToProps';

function Footer(props) {
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });
  const openingFooter = '<footer>';
  const closingFooter = '</footer>';
  const breakTag = '</br>';

  return (
    <animated.div style={trans} className='footer-container'>
      {props.store.dimensions <= 499 ? '' : <span className='footer-opening-tag'>{openingFooter}</span>}
      <p tabIndex='0'>This website was built with the following tools: react, javascript, and webflow.</p>
      <p tabIndex='0' className='footer-Ptag'>Designed by <a className='footer-UX-link' href='https://www.austinbalken.design'>AB UXD</a> & developed by Justus Witmer</p>
      <p className='footer-break-tag'>{breakTag}</p>
      <p tabIndex='0'>Copyright &copy; 2021 Justus Witmer</p>
      <div className='footer-social-links'>
        <div className='footer-social-linkedin'></div>
        <div className='footer-social-github'></div>
      </div>
      {props.store.dimensions <= 499 ? '' : <span className='footer-closing-tag'>{closingFooter}</span>}
    </animated.div>
  );
}

export default connect(mapStoreToProps)(Footer);
