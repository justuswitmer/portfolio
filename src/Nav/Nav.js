import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavItem from './NavItem';

let squarebrackets = '';
const routes = [
  { name: 'Home', route: '/' },
  { name: 'Projects', route: '/project' },
  { name: 'About', route: '/about' },
];
class Nav extends Component {
  componentDidMount = () => {
    console.log(routes);

  }

  onClick = (evt) => {
    this.props.history.push(evt)
    squarebrackets = 'squarebrackets';
  }

  render() {
    return (
      <div className='nav-container'>
        <div className='nav-logo'>
          <div>&lt;JW/&gt;</div>
        </div>
        <div className='nav-routes'>
          {/* {routes.map(route =>
            <NavItem
              route={route}
            />
          )} */}
          <button
            className={`${squarebrackets} nav-routes-route`}
            onClick={() => this.onClick('/')}>
            Home
          </button>
          <div className='nav-routes-divider' />
          <button
            className={`${squarebrackets} nav-routes-route`}
            onClick={() => this.onClick('/project')}>
            Projects
          </button>
          <div className='nav-routes-divider' />
          <button
            className={`${squarebrackets} nav-routes-route`}
            onClick={() => this.onClick('/about')}>
            About
          </button>
        </div>
        <div className='nav-theme'>
          <label>
            <input
              type='radio'
              name='mode'
              value='light'
              onClick={this.props.setMode}
            />Light Mode
          </label>
          <label>
            <input
              type='radio'
              name='mode'
              value='dark'
              onClick={this.props.setMode}
            />Dark Mode
          </label>
        </div>
      </div>
    );
  }
}

export default connect()(withRouter(Nav));
