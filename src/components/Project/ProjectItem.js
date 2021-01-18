import React from 'react';
import { connect } from 'react-redux';

import arrow from '../images/Miscellaneous/up_right_arrow.svg';

function PortfolioItem(props) {

  const gitHub = () => {
    window.open(props.project.link, '_blank')
  }

    return (
      <div className='project-item'>
        <div className='project-item-title'>
          <h4 tabIndex='0'>{props.project.title}</h4>
        </div>
        <div className='project-item-image'>
          <img
            src={props.project.image}
            width='200px'
            className='project-imgElement'
            alt={props.project.description}
            tabIndex='0'
          />
          <div className='project-description' tabIndex='0'>
            <div className='project-description-divElement'>
              {props.project.description}
              <img 
                src={arrow} 
                alt='arrow to external link'
                tabIndex='0'
                onClick={gitHub}
                className='project-description-link'
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default connect()(PortfolioItem);