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
      <p>This website was built with the following tools: react, javascript, and webflow.</p>
      <p className='footer-Ptag'>
        Designed by 
          <a 
            tabIndex='0' 
            className='footer-UX-link' 
            onClick={() => window.open('https://www.austinbalken.design', '_blank')}>
            AB UXD
          </a> 
        & developed by Justus Witmer
      </p>
      <p className='footer-break-tag'>{breakTag}</p>
      <p >Copyright &copy; 2021 Justus Witmer</p>
      <div className='footer-social-links'>
        <div className='footer-social-linkedin' tabIndex='0' onClick={() => window.open('https://www.linkedin.com/in/justus-witmer', '_blank')}/>
        <div className='footer-social-github'  tabIndex='0' onClick={() => window.open('https://github.com/justuswitmer', '_blank')}/>
      </div>
      {props.store.dimensions <= 499 ? '' : <span className='footer-closing-tag'>{closingFooter}</span>}
    </animated.div>
  );
}



export default connect(mapStoreToProps)(Footer);
