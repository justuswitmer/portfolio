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
    r.style.setProperty('--focused_font_color', '#f0f0f0')
    r.style.setProperty('--primary_font_color', '#dadada')
    r.style.setProperty('--secondary_font_color', '#ababab')
    r.style.setProperty('--background_color', '#111111')
    r.style.setProperty('--primary_color', '#161616')
    r.style.setProperty('--secondary_color', '#222222')
    r.style.setProperty('--accent_color', '#295928')
    r.style.setProperty('--about_card_bg', '#c4c0c0')
    r.style.setProperty('--about_modal_bg', '#aa7d7d38')
    r.style.setProperty('--theme_cont_bg', '#1d1d1d')
    r.style.setProperty('--nav_link_div_color', '#f0f0f0')
    r.style.setProperty('--text_link_color', '#449a42')
    r.style.setProperty('--warning', '#d43a3a')
    r.style.setProperty('--notes', '#222222')
  }

  function setLightThemeColor() {
    console.log('in setLightThemeColor');
    setTheme(false);
    // Set the value of the variables to another value (either light or dark theme)
    // Inspiration from here: https://www.w3schools.com/css/css3_variables_javascript.asp
    r.style.setProperty('--focused_font_color', '#1b1b1b')
    r.style.setProperty('--primary_font_color', '#2b2b2b')
    r.style.setProperty('--secondary_font_color', '#575757')
    r.style.setProperty('--background_color', '#ebe9e9')
    r.style.setProperty('--primary_color', '#d8d8d8')
    r.style.setProperty('--secondary_color', '#c4c4c4')
    r.style.setProperty('--accent_color', '#295928')
    r.style.setProperty('--about_card_bg', '#383838')
    r.style.setProperty('--about_modal_bg', '#aa7d7d38')
    r.style.setProperty('--theme_cont_bg', '#a3a3a3')
    r.style.setProperty('--nav_link_div_color', '#181818')
    r.style.setProperty('--text_link_color', '#449a42')
    r.style.setProperty('--warning', '#d43a3a')
    r.style.setProperty('--notes', '#d43a3a')
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

        <div className='nav-theme-note'>Light Theme is currently under construction</div>
        {/* The div below is to help its child div maintain vertical alignment */}
        <div className='nav-theme-wrapper'>
          <div className='nav-theme'>
            <div 
              className='nav-theme-img' 
              onClick={()=>setDarkThemeColor()}
            >
              <img
                className='nav-theme-svg'
                src={props.store.setTheme === true ? DarkActive : DarkInactive }
                alt='Dark Theme'
                tabIndex='0'
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
                  tabIndex='0'
                />
                <span className='nav-theme-img-text'>Light theme</span>
              </div>
          </div>
        </div>
      </div>
    );
}

export default connect(mapStoreToProps)(withRouter(Nav));
