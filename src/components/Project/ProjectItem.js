import React from 'react';
import { connect } from 'react-redux';

// Material-UI
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import arrow from '../images/up_right_arrow.svg';

// const arrow = '->';
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
          />
          <p className='project-pElement'>Click to view code <img src={arrow}/></p>
        </div>
        <div className='project-item-description'>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color='primary'/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant='body2'>
                See details...
              </Typography>   
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant='body2'>
              {props.project.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    );
}

export default connect()(PortfolioItem);