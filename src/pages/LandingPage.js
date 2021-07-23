import React from 'react';
import {
  Button,
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
} from '@material-ui/core';
import { Cloudinary } from '@cloudinary/base';
import { AdvancedImage } from '@cloudinary/react';
import MenuIcon from '@material-ui/icons/Menu';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dgpijcm0x',
  },
});

const cloudinaryUrl = 'https://res.cloudinary.com/dgpijcm0x/image/upload/Tipsy%20Boca%20Raton';
const coverGirlUrl = `${cloudinaryUrl}/cover_girl`;
const whiteNailPolishUrl = `${cloudinaryUrl}/white_nail_polish`;

const tipsyLogo = cld.image('Tipsy Boca Raton/Tipsy_Logo_White');
const thinBrushStroke = cld.image('Tipsy Boca Raton/pink_thin_brush_stroke');
const brushStroke = cld.image('Tipsy Boca Raton/pink_brush_stroke');

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
    height: '100vh',
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
    padding: '20px'
  },
  readMore: {
    backgroundColor: 'white',
    color: '#FC5C9C',
    border: '1px solid #FC5C9C'
  },
  aboutUsMsg: {
    position: 'absolute',
    top: '105vh',
    padding: '20px',
  },
  ourServicePaper: {
    padding: '20px',
    backgroundColor: '#E5E5E5'
  },
  serviceNameRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  whyChooseUsMsg: {
    position: 'absolute',
    top: '195vh',
    padding: '20px',
  },
  parallaxCoverGirl: {
    backgroundImage: `url(${coverGirlUrl})`,
    minHeight: '100vh',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '0.6'
  },
  parallaxWhiteNailPolish: {
    backgroundImage: `url(${whiteNailPolishUrl})`,
    minHeight: '50vh',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '0.6'
  }
});

export default function LandingPage() {
  const classes = useStyles();

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
          <div className={classes.parallaxCoverGirl} />
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
          style={{width: '100%', overflow: 'hidden'}}
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
      <div id="ourServices-container">
        <Paper classes={{root: classes.ourServicePaper}}>
          <h1>Our Services</h1>
          <div className={classes.serviceNameRow}>
            <h2>Type of service</h2>
            <h2>30m</h2>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
          </p>

          <Button variant='outlined' classes={{ root: classes.readMore }}>
            View All
          </Button>
        </Paper>
      </div>
      <div id='whyChooseUs-container'>
        <AdvancedImage
          cldImg={brushStroke}
          style={{width: '100%'}}
        />
        <div className={classes.whyChooseUsMsg}>
          <h1>Why Choose Us?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
          </p>
        </div>
      </div>
      <div id="testimonials-container">
        <div className={classes.parallaxWhiteNailPolish} />
        <h1>Testimonials</h1>
      </div>
    </div>
  );
}
