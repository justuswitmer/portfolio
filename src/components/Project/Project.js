import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useSpring, animated } from "react-spring";
import ProjectItem from './ProjectItem';
import mapStoreToProps from '../../redux/mapStoreToProps';
import ProjectLEA from './ProjectLEA';
import ProjectFI from './ProjectFI';

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
        {props.store.dimensions <= 499 ? '' : <span className='tag project-opening-tag'>{openingTag}</span>}
        <h2 className='project-intro-h2'>Here are some projects that show my best work.</h2> 
        <div className='project-primary'>
          <div className='project-primary-player-div'>
            <h3 className='project-primary-player-h3'>Lake Elmo Aero</h3>
            <h4 className='project-primary-player-h4'>Web App</h4>
            <div className='project-primary-lakeElmoAero'>
              <ProjectLEA/>
            </div>
            <p className='project-primary-player-descrip-title'>A service where Airplane Pilots schedule requests for fuel, oil, or other maintenance prior to landing</p>
            <p className='project-primary-player-descrip-body'>The web app captures all the essential information and then alerts the pilots, either by email or text, upon completion.</p>       
          </div>
          <div className='project-primary-player-div'>
            <h3 className='project-primary-player-h3'>financeIt</h3>
            <h4 className='project-primary-player-h4'>Mobile Web App</h4>
            <div className='project-primary-financeIt'>
              <ProjectFI/>
            </div>
              <p className='project-primary-player-descrip-title'>An app that helps a user budget and categorize their money, and track spending habits and trends</p>
              <p className='project-primary-player-descrip-body'>Future updates will include:</p>
              <ul>
                <li>Automatic transaction importing from the user's financial institution</li>
                <li>Charts to help the user visually see where they are spending money</li>
                <li>Intellegent tips that will help the user in saving and planning for the future</li>
              </ul>
          </div>
        </div>
        <div className='project-secondary'>
          {props.store.project.map(project =>
          <ProjectItem
          key={project.title}
          project={project}
          />
          )}
        </div>
        {props.store.dimensions <= 499 ? '' : <span className='tag project-closing-tag'>{closingTag}</span>}
      </animated.div>
    );
}

export default connect(mapStoreToProps)(withRouter(Portfolio));
