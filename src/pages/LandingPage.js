import React from 'react';
import {
  Button,
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import { Cloudinary } from '@cloudinary/base';
import { AdvancedImage, responsive } from '@cloudinary/react';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  aboutUs: {
    backgroundColor: 'white',
  },
  imageWrapper: {
    backgroundColor: 'black',
    position: 'absolute',
    top: 0
  },
  landingDiv: {
    padding: '0px 40px',
    maxWidth: '500px',
    '& h2': {
      color: 'white',
    },
    '& p': {
      color: 'white',
    },
  },
  bookNow: {
    backgroundColor: '#FC5C9C',
    color: 'white',
  },
  appBar: {
    backgroundColor: 'black',
    opacity: '90%',
    zIndex: 99
  },
  toolBar: {
    display: 'flex',
    placeContent: 'space-between'
  }
});

export default function LandingPage() {
  const classes = useStyles();

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dgpijcm0x',
    },
  });

  const coverGirl = cld.image('Tipsy Boca Raton/cover_girl');
  const tipsyLogo = cld.image('Tipsy Boca Raton/Tipsy_Logo_White');

  return (
    <div>
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
      <div className={classes.imageWrapper}>
        <AdvancedImage
          style={{ width: '100%', opacity: '40%' }}
          cldImg={coverGirl}
          plugins={[responsive(200)]}
        />
        <div className={classes.landingDiv}>
          <h2>
            Lorem Ipsum is simply a dummy text of the printing and typesetting
            industry.
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
          <Button variant='contained' classes={{ root: classes.bookNow }}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
