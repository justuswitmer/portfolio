import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {

  render() {
    return (
      <div className='nav-container'>
        <div className='nav-logo'>
          <div>&lt;JW/&gt;</div>
        </div>
        <div className='nav-routes'>
          <div onClick={() => this.props.history.push('./')}>
            Home
        </div>
          <div onClick={() => this.props.history.push('./project')}>
            Projects
        </div>
          <div onClick={() => this.props.history.push('./about')}>
            About
        </div>
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
