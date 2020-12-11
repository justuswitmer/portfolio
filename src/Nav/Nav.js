import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavItem from './NavItem';

const routes = [
  { name: 'Home', route: '/', hasDivider: true },
  { name: 'Projects', route: '/project', hasDivider: true },
  { name: 'About', route: '/about', hasDivider: false },
];
class Nav extends Component {

  state = {
    squarebrackets: ''
  }

  hasBracket = (evt) => {
    this.props.history.push(evt)
    this.setState({
      squarebrackets: evt
    })
  }

  render() {
    return (
      <div className='nav-container'>
        <div className='nav-logo'>
          <div>&lt;JW/&gt;</div>
        </div>
        <div className='nav-routes'>
          {routes.map(route =>
            <NavItem
              route={route}
              hasBracket={this.hasBracket}
              squarebrackets={this.state.squarebrackets}
            />
          )}
          {/* <button
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
          </button> */}
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
