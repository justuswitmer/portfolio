import React from 'react';
import { connect } from 'react-redux';

import arrow from '../images/up_right_arrow.svg';

function PortfolioItem(props) {

  const gitHub = () => {
    window.open(props.project.link, '_blank')
  }

    return (
      <div className='project-item'>
        <div className='project-item-title'>
          <h4>{props.project.title}</h4>
        </div>
        <div className='project-item-image' onClick={gitHub}>
          <img
            src={props.project.image}
            width='200px'
            className='project-imgElement'
            alt={props.project.description}
          />
          <span className='project-pElement'>
            {props.project.description} 
            <img src={arrow} 
              alt='arrow to external link'/>
          </span>
        </div>
      </div>
    );
}

export default connect()(PortfolioItem);