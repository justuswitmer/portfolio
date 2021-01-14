import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import MobileMenuItem from './MobileMenuItem';

// Material UI
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';

import MenuIcon from '../images/MenuIcon.svg';
import NavTheme from './NavTheme';


const useStyles = makeStyles({
  list: {
    width: 100,
  },
  fullList: {
    width: 'auto',
  },
});


function NavMobileMenu(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[  { name: 'Home', route: '/'}, 
            { name: 'Projects', route: '/project'}, 
            { name: 'About', route: '/about'}
          ].map(page => (
            <MobileMenuItem
              key={page.name}
              page={page}
            />
        ))}
        <NavTheme/>
      </List>
    </div>
  );

  return (
    <div className='nav-hamburger'>
      <React.Fragment>
        <Button 
          onClick={toggleDrawer('right', true)}
          className='nav-hamburger-btn'
        >
          <img src={MenuIcon} alt='Menu Icon'/>
        </Button>
        <SwipeableDrawer
          anchor='right'
          open={state['right']}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
        >
          {list('right')}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(NavMobileMenu));
