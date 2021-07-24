import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import { Cloudinary } from '@cloudinary/base';
import { AdvancedImage } from '@cloudinary/react';
import MenuIcon from '@material-ui/icons/Menu';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dgpijcm0x',
  },
});

const useStyles = makeStyles({
  appBar: {
    backgroundColor: 'black',
    opacity: '90%',
    zIndex: 99
  },
  toolBar: {
    display: 'flex',
    placeContent: 'space-between'
  },
});

const Navbar = () => {

  const classes = useStyles();
  const tipsyLogo = cld.image('Tipsy Boca Raton/Tipsy_Logo_White');

  return (
    <AppBar classes={{root: classes.appBar}}  position='sticky'>
      <Toolbar classes={{root: classes.toolBar}}>
        <AdvancedImage 
          style={{width: '100px'}}
          cldImg={tipsyLogo}
        />
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {

}

Navbar.defaultProps = {

}

export default Navbar;