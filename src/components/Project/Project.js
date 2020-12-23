import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from "react-player"
import { withRouter } from 'react-router-dom';

class Portfolio extends Component {

  componentDidMount = () => {
    this.hasBracket(this.props.history.location.pathname);
  }

  hasBracket = (evt) => {
    this.props.dispatch({
      type: 'UPDATE_HAS_BRACKETS',
      payload: evt,
    });
  }
  render() {
    return (
      <div className='project-container'>
        <h2>Here are some projects I have worked on!</h2> 
        <div className='project-video'>
          <ReactPlayer
            className='project-video-player'
            width='50%'
            url="https://vimeo.com/493976119"
          />
          <ReactPlayer
            className='project-video-player'
            width='50%'
            url="https://vimeo.com/493975723"
          />
        </div>
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

export default connect(mapStateToProps)(withRouter(Portfolio));
