import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

let squarebrackets = '';
class NavItem extends Component {

  onClick = (evt) => {
    this.props.history.push(evt)
    squarebrackets = 'squarebrackets';

  }

  render() {
    return (
      <>
        <button
          className={`${squarebrackets} nav-routes-route`}
          onClick={() => this.onClick(this.props.route.route)}>
          {this.props.route.name}
        </button>
        <div className='nav-routes-divider' />
      </>
    );
  }
}

export default connect()(withRouter(NavItem));


/* <button
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
</button> */