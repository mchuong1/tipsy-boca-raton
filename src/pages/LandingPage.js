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
  imageContainer: {
    position: 'relative',
    top: 0,
    height: '100vh',
    zIndex: '-100'
  },
  imageWrapper: {
    backgroundColor: 'black',
    position: 'relative',
    height: '100vh'
  },
  imgMsg: {
    padding: '0px 40px',
    position: 'relative',
    top: '-80vh',
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
  },
  aboutUsContainer: {
    backgroundColor: 'white',
    position: 'absolute'
  },
  readMore: {
    backgroundColor: 'white',
    color: '#FC5C9C',
    border: '1px solid #FC5C9C'
  },
  aboutUsMsg: {
    position: 'absolute',
    top: 0,
    padding: '20px',
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
  const thinBrushStroke = cld.image('Tipsy Boca Raton/pink_thin_brush_stroke');

  return (
    <div id="landingpage">
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
      <div id="top-container" className={classes.imageContainer}>
        <div className={classes.imageWrapper}>
          <AdvancedImage
            style={{ transform: 'translate(-39vw, -10vh)', opacity: '60%', width: '140%' }}
            cldImg={coverGirl}
            plugins={[responsive(200)]}
          />
        </div>
        <div className={classes.imgMsg}>
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
      <div id="aboutUs-container" className={classes.aboutUsContainer}>
        <AdvancedImage
          cldImg={thinBrushStroke}
          style={{width: '100vw'}}
        />
        <div className={classes.aboutUsMsg}>
          <h1>About Us</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
          </p>
          <Button variant='outlined' classes={{ root: classes.readMore }}>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}
