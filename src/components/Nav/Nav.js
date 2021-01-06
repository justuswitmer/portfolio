import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import NavItem from './NavItem';
import mapStoreToProps from '../../redux/mapStoreToProps';

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

  // Get the root element
  let r = document.querySelector(':root');

  const setTheme = (property) => {
    dispatch({
      type: 'SET_THEME',
      payload: property
    });
  }

  useEffect(() => {
    dispatch({
      type: 'SET_THEME',
      payload: true
    });
  }, [dispatch]);


  function setDarkThemeColor() {
    console.log('in setDarkThemeColor');
    setTheme(true);
    // Set the value of the variables to another value (either light or dark theme)
    // Inspiration from here: https://www.w3schools.com/css/css3_variables_javascript.asp
    r.style.setProperty('--font_color', '#c4c0c0')
    r.style.setProperty('--background_color', '#0e0e0e')
    r.style.setProperty('--primary_color', '#161616')
    r.style.setProperty('--secondary_color', '#252525')
    r.style.setProperty('--accent_color', '#2c5f2d')
    console.log('r.style', r.style);
  }

  function setLightThemeColor() {
    console.log('in setLightThemeColor');
    setTheme(false);
    // Set the value of the variables to another value (either light or dark theme)
    // Inspiration from here: https://www.w3schools.com/css/css3_variables_javascript.asp
    r.style.setProperty('--font_color', '#082621')
    r.style.setProperty('--background_color', '#c6d3d2')
    r.style.setProperty('--primary_color', '#b7d1cf')
    r.style.setProperty('--secondary_color', '#d8f2f0e0')
    r.style.setProperty('--accent_color', '#3e9e40b6')
    console.log('r.style', r.style);
  }

    return (
      <div className='nav-container'>
        <img 
          className='nav-logo'
          src={LogoLight}
          alt='Justus Witmer Logo'
          tabIndex='0'
          onClick={()=>props.history.push('/')}
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
        <div className='nav-theme-wrapper'>
          <div tabIndex='0' className='nav-theme'>
            <div 
              className='nav-theme-img' 
              onClick={()=>setDarkThemeColor()}
            >
              <img
                className='nav-theme-svg'
                src={props.store.setTheme === true ? DarkActive : DarkInactive }
                alt='Dark Theme'
              />
              <span className='nav-theme-img-text'>Dark theme</span>
            </div>
            <div className='nav-theme-divider'></div>
              <div 
                className='nav-theme-img' 
                onClick={()=>setLightThemeColor()}
              >
                <img 
                  className='nav-theme-svg'
                  src={props.store.setTheme === true ? LightInactive : LightActive } 
                  alt='Light Theme'
                />
                <span className='nav-theme-img-text'>Light theme</span>
              </div>
          </div>
        </div>
      </div>
    );
}

export default connect(mapStoreToProps)(withRouter(Nav));
