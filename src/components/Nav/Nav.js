import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavItem from './NavItem';
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

  state = {
    squarebrackets: '',
  }

  hasBracket = (evt) => {
    this.props.history.push(evt);
    this.setState({
      squarebrackets: evt
    });
  }

  render() {
    return (
      <div className='nav-container'>
        <div className='nav-logo'>
          <div><img src={LogoLight}/></div>
        </div>
        <div className='nav-routes'>
          {routes.map(route =>
            <NavItem
              key={route.name}
              route={route}
              hasBracket={this.hasBracket}
              squarebrackets={this.state.squarebrackets}
            />
          )}
        </div>
        {this.props.inDarkTheme === true ?
        <div className='nav-theme-dark'>
          <div>
            <img src={DarkActive}/>
          </div>
          <div onClick={()=>this.props.setTheme(false)}>
            <img src={LightInactive}/>
          </div>
        </div>
        :
        <div className='nav-theme-light'>
          <div onClick={()=>this.props.setTheme(true)}>
            <img src={DarkInactive}/>
          </div>
          <div>
            <img src={LightActive}/>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default connect()(withRouter(Nav));
