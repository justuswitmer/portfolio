import React from 'react';
import { connect } from 'react-redux';

import arrow from '../images/Miscellaneous/up_right_arrow.svg';

function PortfolioItem(props) {

    return (
      <div className='project-item'>
        <div className='project-item-title'>
          <h4>{props.project.title}</h4>
          <p>{props.project.type}</p>
        </div>
        <div className='project-item-image'>
          <img
            src={props.project.image}
            width='250px'
            className='project-imgElement'
            alt={props.project.description}
          />
          <div className='project-description'>
            <div className='project-description-divElement'>
              {props.project.description}
              <img 
                src={arrow} 
                alt='arrow to external link'
                onClick={() =>  window.open(props.project.link, '_blank')}
                className='project-description-link'
              />
            </div>
            <div className='project-description-bg'><img src={props.project.image}/></div>
          </div>
          
        </div>
      </div>
    );
}

export default connect()(PortfolioItem);