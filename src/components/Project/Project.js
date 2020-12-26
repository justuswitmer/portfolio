import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from "react-player"
import { withRouter } from 'react-router-dom';
import ProjectItem from './ProjectItem';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
        {this.props.store.project.map(project =>
        <ProjectItem
        project={project}
        />
        )}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(Portfolio));
