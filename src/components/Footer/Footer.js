import React from 'react';
import { useSpring, animated } from "react-spring";

function Footer() {
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });
  const openingFooter = '<footer>';
  const closingFooter = '</footer>';

  return (
    <animated.div style={trans} className='footer-container'>
      <span className='opening-tag'>{openingFooter}</span>
      <p tabIndex='0'>This website was built with the following tools: react, javascript, and webflow.</p>
      <p tabIndex='0'>Designed by <a href='https://www.austinbalken.design'>AB UXD</a> & developed by Justus Witmer</p>
      <br></br>
      <p tabIndex='0'>Copyright &copy; 2021 Justus Witmer</p>
      <span className='footer-closing-tag'>{closingFooter}</span>
    </animated.div>
  );
}

export default Footer;
