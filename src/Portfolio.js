import React, { Component } from 'react';
import { connect } from 'react-redux';

class Portfolio extends Component {
  render() {
    return (
      <div className='portfolio'>
        <h2 className='portfolioHeader'>Here are some projects I have worked on!</h2>
        <a
          className='portfolioChild one secondary'
          href="g">
          Lake Elmo Aero
        </a>
        <a
          className='portfolioChild two secondary'
          href="https://github.com/justuswitmer/prime-solo-project">
          financeIt
        </a>
        <a
          className='portfolioChild three secondary'
          href="https://github.com/justuswitmer/weekend-movie-sagas">
          Movie Library
        </a>
        <a
          className='portfolioChild four secondary'
          href="https://github.com/justuswitmer/witmer-redux-feedback-loop">
          Feedback Survey
        </a>
        <a
          className='portfolioChild five secondary'
          href="https://github.com/justuswitmer/weekend-sql-to-do-list">
          To Do List
        </a>
        <a
          className='portfolioChild six secondary'
          href="https://github.com/justuswitmer/redux-pizza-parlor">
          Pizza Parlor
        </a>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  projects: reduxState.imageReducer
})

export default connect(mapStateToProps)(Portfolio);
