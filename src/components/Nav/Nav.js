import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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

class Nav extends Component {

  componentDidMount = () => {
    this.setTheme(true);
  }

  setTheme = (property) => {
    this.props.dispatch({
      type: 'SET_THEME',
      payload: property
    });
  }

  render() {
    return (
      <div className='nav-container'>
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
        <div>
        {this.props.store.setTheme === true ?
        <div className='nav-theme ntdark'>
          <div className='nav-theme-img'>
            <img
              className='nav-theme-svg'
              src={DarkActive}
              alt=''
            />
            <span className='nav-theme-img-text'>Dark Mode</span>
          </div>
          <div className='nav-theme-divider'></div>
            <div className='nav-theme-img'>
              <img 
                className='nav-theme-svg'
                src={LightInactive} 
                alt=''
                onClick={()=>this.setTheme(false)}
              />
              <span className='nav-theme-img-text'>Light Mode</span>
            </div>
        </div>
        :
        <div className='nav-theme ntlight'>
          <div className='nav-theme-img'>
            <img 
              className='nav-theme-svg'
              src={DarkInactive}
              alt=''
              onClick={()=>this.setTheme(true)}
            />
            <span className='nav-theme-img-text'>Dark Mode</span>
          </div>
          <div className='nav-theme-divider'></div>
          <div className='nav-theme-img'>
            <img 
              className='nav-theme-svg'
              src={LightActive}
              alt=''
            />
            <span className='nav-theme-img-text'>Light Mode</span>
          </div>
        </div>
        }
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(Nav));
