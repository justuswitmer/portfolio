import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavItem from './NavItem';

// SVG imports
import LogoLight from '../images/LogoLight.svg';
import LogoDark from '../images/LogoDark.svg';
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

  render() {
    return (
      <div className='nav-container'>
          <img 
            className='nav-logo'
            src={LogoLight}/>
        <div className='nav-routes'>
          {routes.map(route =>
            <NavItem
              key={route.name}
              route={route}
            />
          )}
        </div>
        <div>
        {this.props.inDarkTheme === true ?
        <div className='nav-theme ntdark'>
            <img 
              className='nav-theme-svg' 
              src={DarkActive}
            />
        <div className='nav-theme-divider'></div>
            <img 
              className='nav-theme-svg'
              src={LightInactive} 
              onClick={()=>this.props.setTheme(false)}
            />
        </div>
        :
        <div className='nav-theme ntlight'>
            <img 
              className='nav-theme-svg'
              src={DarkInactive}
              onClick={()=>this.props.setTheme(true)}
            />
            <img 
              className='nav-theme-svg'
              src={LightActive}
            />
        </div>
        }
        </div>
      </div>
    );
  }
}

export default connect()(withRouter(Nav));
