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

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const tipsyLogo = cld.image('Tipsy Boca Raton/Tipsy_Logo');
  const tipsyLogoWhite = cld.image('Tipsy Boca Raton/Tipsy_Logo_White');

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const Navmenu = () => (
    <div className={classes.navMenu}>
      <div className={classes.iconRow}>
        <AdvancedImage cldImg={tipsyLogo} style={{ width: '50%' }} />
        <IconButton edge='start' onClick={handleClick}>
          <ChevronLeftIcon style={{ fontSize: '2em' }} />
        </IconButton>
      </div>
      <div className={classes.menuItems}>
        <h2>Home</h2>
        <h2>About Us</h2>
        <h2>Services</h2>
        <h2>Online Booking</h2>
        <h2>Newsletter</h2>
      </div>
    </div>
  );

  return (
    <>
    {open && <Navmenu />}
    <AppBar classes={{ root: classes.appBar }} position='sticky'>
      <Toolbar classes={{ root: classes.toolBar }}>
        <AdvancedImage style={{ width: '100px' }} cldImg={tipsyLogoWhite} />
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

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
