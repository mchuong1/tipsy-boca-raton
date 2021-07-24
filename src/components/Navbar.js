import React, { useState } from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import { Cloudinary } from '@cloudinary/base';
import { AdvancedImage } from '@cloudinary/react';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dgpijcm0x',
  },
});

const useStyles = makeStyles({
  appBar: {
    backgroundColor: 'black',
    opacity: '90%',
    zIndex: 99,
  },
  toolBar: {
    display: 'flex',
    placeContent: 'space-between',
  },
  navMenu: {
    backgroundColor: '#FCEFEE',
    height: '100vh',
    zIndex: 100,
    position: 'sticky',
    top: 0,
  },
  iconRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItems: {
    '& h2': {
      margin: 0,
      padding: '20px',
    },
    '& h2:hover': {
      cursor: 'pointer',
      backgroundColor: 'lightgrey',
    },
  },
});

const Navbar = (props) => {
  const classes = useStyles();
  const { history } = props;
  const [open, setOpen] = useState(false);
  const tipsyLogo = cld.image('Tipsy Boca Raton/Tipsy_Logo');
  const tipsyLogoWhite = cld.image('Tipsy Boca Raton/Tipsy_Logo_White');

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleNavClick = (route) => {
    handleClick();
    history.push(route);
  };

  const Navmenu = () => (
    <div className={classes.navMenu}>
      <div className={classes.iconRow}>
        <AdvancedImage cldImg={tipsyLogo} style={{ width: '50%' }}/>
        <IconButton edge='start' onClick={handleClick}>
          <ChevronLeftIcon style={{ fontSize: '2em' }} />
        </IconButton>
      </div>
      <div className={classes.menuItems}>
        <h2 onClick={() => handleNavClick('/')} aria-hidden="true">Home</h2>
        <h2 onClick={() => handleNavClick('/About')} aria-hidden="true">About Us</h2>
        <h2 onClick={() => handleNavClick('/Services')} aria-hidden="true">Services</h2>
        <h2 onClick={() => handleNavClick('/OnlineBooking')} aria-hidden="true">Online Booking</h2>
        <h2 onClick={() => handleNavClick('/Newsletter')} aria-hidden="true">Newsletter</h2>
      </div>
    </div>
  );

  return (
    <>
      {open && <Navmenu />}
      <AppBar classes={{ root: classes.appBar }} position='sticky'>
        <Toolbar classes={{ root: classes.toolBar }}>
          <AdvancedImage style={{ width: '100px', cursor: 'pointer' }} cldImg={tipsyLogoWhite} onClick={() => history.push('/')}/>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

Navbar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

Navbar.defaultProps = {};

export default withRouter(Navbar);
