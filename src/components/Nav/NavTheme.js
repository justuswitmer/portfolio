import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// SVG imports
import DarkActive from '../images/ThemeImages/DarkActive.svg';
import DarkInactive from '../images/ThemeImages/DarkInactive.svg';
import LightActive from '../images/ThemeImages/LightActive.svg';
import LightInactive from '../images/ThemeImages/LightInactive.svg';

function NavTheme(props) {
  const dispatch = useDispatch();

  // Get the root element
  let r = document.querySelector(':root');

  // dispatch to set true or false for darkTheme once clicked
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
    r.style.setProperty('--about_card_bg', '#222222')
    r.style.setProperty('--about_modal_bg', '#1d1d1d')
    r.style.setProperty('--theme_cont_bg', '#1d1d1d')
    r.style.setProperty('--nav_link_div_color', '#f0f0f0')
    r.style.setProperty('--text_link_color', '#449a42')
    r.style.setProperty('--warning', '#d43a3a')
    r.style.setProperty('--tags', '#323232')
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
    r.style.setProperty('--background_color', '#f2f2f2')
    r.style.setProperty('--primary_color', '#bfbfbf')
    r.style.setProperty('--secondary_color', '#acb9ad')
    r.style.setProperty('--accent_color', '#295928')
    r.style.setProperty('--about_card_bg', '#383838')
    r.style.setProperty('--about_modal_bg', '#aa7d7d38')
    r.style.setProperty('--theme_cont_bg', '#a3a3a3')
    r.style.setProperty('--nav_link_div_color', '#181818')
    r.style.setProperty('--text_link_color', '#449a42')
    r.style.setProperty('--warning', '#d43a3a')
    r.style.setProperty('--tags', '#323232')
    r.style.setProperty('--notes', '#d43a3a')
  }

    return (
      <div className='nav-theme-wrapper'>
        {/* The div, nav-theme-wrapper, is to help its child div maintain vertical alignment */}
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
            {props.store.dimensions <= 688 ? '' : <span className='nav-theme-img-text'>Dark theme</span>}
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
              {props.store.dimensions <= 688 ? '' : <span className='nav-theme-img-text'>Light theme</span>}
            </div>
        </div>
      </div>
    );
}

export default connect(mapStoreToProps)(withRouter(NavTheme));