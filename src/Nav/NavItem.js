import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NavItem extends Component {

  componentDidMount = () => {
    this.props.history.push(this.props.squarebrackets)
    this.props.hasBracket(this.props.squarebrackets)
  }

  render() {
    return (
      <>
        <div className='nav-routes-buttonWrapper'>
          <div
            className={this.props.squarebrackets === this.props.route.route ?
              'squarebrackets nav-routes-focus'
              : 'nav-routes-route'}
            onClick={() => this.props.hasBracket(this.props.route.route)}>
            {this.props.route.name}
          </div>
        </div>
        {this.props.route.hasDivider == true ?
          <div className='nav-routes-divider' />
          :
          ''}

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