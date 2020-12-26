import React from 'react';
import { connect } from 'react-redux';

// Material-UI
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Divider,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function PortfolioItem(props) {

    return (
      <div>
        <a
          className='portfolioChild'
          href={props.project.link}>
          <span>{props.project.title}</span>
        </a>
        <img src={props.project.image} width='300px'/>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon
              color='primary'
            />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant='body2'>
              AccordianSummary
            </Typography>   
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body2'>
              AccordianDetails
            </Typography>
          </AccordionDetails>
          <Divider />
          <AccordionActions>
            <Typography variant='body2'>
              AccordionActions
            </Typography>
          </AccordionActions>
        </Accordion>
      </div>
    );
}

export default connect()(PortfolioItem);