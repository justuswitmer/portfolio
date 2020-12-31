import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import NavItem from './NavItem';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { useSpring, animated } from "react-spring";

// SVG imports
import LogoLight from '../images/LogoLight.svg';
// import LogoDark from '../images/LogoDark.svg';
import DarkActive from '../images/DarkActive.svg';
import DarkInactive from '../images/DarkInactive.svg';
import LightActive from '../images/LightActive.svg';
import LightInactive from '../images/LightInactive.svg';

const routes = [
  { name: 'Home', route: '/', hasDivider: true },
  { name: 'Projects', route: '/project', hasDivider: true },
  { name: 'About', route: '/about', hasDivider: false },
];

function Nav(props) {
  const dispatch = useDispatch();
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });
  // Get the root element
  let r = document.querySelector(':root');

  useEffect(() => {
    setTheme(true);
  }, []);

  const setTheme = (property) => {
    dispatch({
      type: 'SET_THEME',
      payload: property
    });
  }

  function setDarkThemeColor() {
    console.log('in setDarkThemeColor');
    setTheme(true);
    // Set the value of the variables to another value (either light or dark theme)
    // Inspiration from here: https://www.w3schools.com/css/css3_variables_javascript.asp
    r.style.setProperty('--font_color', '#c4c0c0')
    r.style.setProperty('--background_color', '#0e0e0e')
    r.style.setProperty('--primary_color', '#161616')
    r.style.setProperty('--secondary_color', '#252525')
    console.log('r.style', r.style);
  }

  function setLightThemeColor() {
    console.log('in setLightThemeColor');
    setTheme(false);
    // Set the value of the variables to another value (either light or dark theme)
    // Inspiration from here: https://www.w3schools.com/css/css3_variables_javascript.asp
    r.style.setProperty('--font_color', '#0e0e0e')
    r.style.setProperty('--background_color', '#c4c0c0')
    r.style.setProperty('--primary_color', '#848892')
    r.style.setProperty('--secondary_color', '#9fa3ac')
    console.log('r.style', r.style);
  }

    return (
      <animated.div style={trans} className='nav-container'>
        <img 
          className='nav-logo'
          src={LogoLight}
          alt='Light Logo'
        />
        <div className='nav-routes'>
          {routes.map(route =>
            <NavItem
              key={route.name}
              route={route}
            />
          )}
        </div>
        {/* The div below is to help its child div maintain vertical alignment */}
        <div>
          <div className='nav-theme'>
            <div className='nav-theme-img'>
              <img
                className='nav-theme-svg'
                src={props.store.setTheme === true ? DarkActive : DarkInactive }
                alt='Dark Theme'
                onClick={()=>setDarkThemeColor()}
              />
              <span className='nav-theme-img-text'>Dark Theme</span>
            </div>
            <div className='nav-theme-divider'></div>
              <div className='nav-theme-img'>
                <img 
                  className='nav-theme-svg'
                  src={props.store.setTheme === true ? LightInactive : LightActive } 
                  alt='Light Theme'
                  onClick={()=>setLightThemeColor()}
                />
                <span className='nav-theme-img-text'>Light Theme</span>
              </div>
          </div>
        </div>
      </animated.div>
    );
}

export default connect(mapStoreToProps)(withRouter(Nav));
