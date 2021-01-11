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
  const openingTag = '<projects>';
  const closingTag ='</projects>';

  useEffect(() => {
    dispatch({
      type: 'UPDATE_HAS_BRACKETS',
      payload: props.history.location.pathname,
    });
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [dispatch, props.history.location.pathname]);

    return (
      <animated.div style={trans} className='project-container'>
        <span className='tag project-opening-tag'>{openingTag}</span>
        <h2 tabIndex='0' className='project-intro-h2'>Here are some projects that show my best work.</h2> 
        <div className='project-primary'>
          <div className='project-primary-player-div'>
            <h4 className='project-primary-player-h4'>Lake Elmo Aero</h4>
            <ReactPlayer
              width='100%'
              url="https://vimeo.com/493976119"
            />
            <ul>
              <li tabIndex='0'>A service where Airplane Pilots schedule requests for fuel, oil, or other maintenance prior to landing</li>
              <li tabIndex='0'>The app captures all the essential information and then alerts the pilots, either by email or text, upon completion.</li>
            </ul>          
          </div>
          <div className='project-primary-player-div'>
            <h4 className='project-primary-player-h4'>financeIt</h4>
            <ReactPlayer
              width='100%'
              url="https://vimeo.com/493975723"
            />
            <ul>
              <li tabIndex='0'>An app that helps a user budget and categorize their money, and track spending habits and trends</li>
              <li tabIndex='0'>Future updates will include: 
                <ul>
                  <li tabIndex='0'>Automatic transaction importing from the user's financial institution</li>
                  <li tabIndex='0'>Charts to help the user visually see where they are spending money</li>
                  <li tabIndex='0'>Intellegent tips that will help the user in saving and planning for the future</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className='project-secondary'>
          {props.store.project.map(project =>
          <ProjectItem
          project={project}
          />
          )}
        </div>
        <span className='tag project-closing-tag'>{closingTag}</span>
      </animated.div>
    );
}

export default connect(mapStoreToProps)(withRouter(Portfolio));
