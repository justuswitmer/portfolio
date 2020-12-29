import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import ReactPlayer from "react-player"
import { withRouter } from 'react-router-dom';
import { useSpring, animated } from "react-spring";
import ProjectItem from './ProjectItem';
import mapStoreToProps from '../../redux/mapStoreToProps';

function Portfolio(props) {
  const dispatch = useDispatch();
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });

  useEffect(() => {
    hasBracket(props.history.location.pathname);
  }, []);

  const hasBracket = (evt) => {
    dispatch({
      type: 'UPDATE_HAS_BRACKETS',
      payload: evt,
    });
  }

    return (
      <animated.div style={trans} className='project-container'>
        <h2>Here are some projects I have worked on!</h2> 
        <div className='project-primary'>
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
        <div className='project-secondary'>
        {props.store.project.map(project =>
        <ProjectItem
        project={project}
        />
        )}
        </div>
      </animated.div>
    );
}

export default connect(mapStoreToProps)(withRouter(Portfolio));
