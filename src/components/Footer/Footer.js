import React from 'react';
import { useSpring, animated } from "react-spring";

function Footer() {
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={trans} className='footer-container'>
      <p>This website was built with the following tools: react, javascript, and webflow.</p>
      <p>Designed by <a href='https://www.austinbalken.design'>AB UXD</a> & developed by Justus Witmer</p>
      <br></br>
      <p>Copyright &copy; 2020 Justus Witmer</p>
    </animated.div>
  );
}

export default Footer;