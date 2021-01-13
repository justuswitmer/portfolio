import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function MobileMenuItem(props){

  return(
    <ListItem button value={props.page.route} onClick={()=>props.history.push(props.page.route)} key={props.page.name}>
      <ListItemText primary={props.page.name}/>
    </ListItem>
  );
}

export default connect()(withRouter(MobileMenuItem));