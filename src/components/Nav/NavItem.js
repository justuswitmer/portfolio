import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class NavItem extends Component {

  componentDidMount = () => {
    this.hasBracket(this.props.history.location.pathname);
  }

  hasBracket = (evt) => {
    this.props.history.push(evt);
    this.props.dispatch({
      type: 'UPDATE_HAS_BRACKETS',
      payload: evt,
    });
  }

  
  render() {
    return (
      <>
        <div className='nav-routes-buttonWrapper'>
          <div
            className={this.props.store.hasBrackets === this.props.route.route ?
              'squarebrackets nav-routes-focus'
              : 'nav-routes-route'}
            onClick={() => this.hasBracket(this.props.route.route)}>
            {this.props.route.name}
          </div>
        </div>
        {this.props.route.hasDivider === true ?
          <div className='nav-routes-divider' />
          :
          ''}
      </>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(NavItem));