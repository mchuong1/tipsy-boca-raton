import React from 'react';
import { Button, makeStyles, Paper, useTheme } from '@material-ui/core';
import { Cloudinary, Transformation } from '@cloudinary/base';
import { AdvancedImage } from '@cloudinary/react';
import { withRouter } from 'react-router';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PropTypes from 'prop-types';
import { source } from '@cloudinary/base/actions/overlay';
import { image } from '@cloudinary/base/qualifiers/source';
import { scale } from '@cloudinary/base/actions/resize';
import byAngle from '@cloudinary/base/actions/rotate/byAngle';
import { Position } from '@cloudinary/base/qualifiers/position';
import { compass } from '@cloudinary/base/qualifiers/gravity';
import { center } from '@cloudinary/base/qualifiers/textAlignment';

import CoverGirl from '../components/CoverGirl';
import Contact from '../components/Contact';
import GetInTouch from '../components/GetInTouch';
import Testimonials from '../components/Testimonials';
import Service from '../components/Service';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dgpijcm0x',
  },
});

const serviceMock = {
  title: 'Type of Service',
  
  // price: '$17.99',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  color: 'none'
};

const useStyles = makeStyles((theme) => ({
  aboutUs: {
    backgroundColor: 'white',
    position: 'relative',
  },
  aboutUsContainer: {
    backgroundColor: 'white',
    padding: '20px',
    height: '50vh',
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateColumns: 'auto auto',
    },
  },
  readMore: {
    backgroundColor: 'white',
    color: '#FC5C9C',
    border: '1px solid #FC5C9C',
  },
  aboutUsMsg: {
    position: 'relative',
    padding: '20px',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      top: '0vh',
      gridColumn: 1,
      gridRow: 1,
    },
  },
  aboutImgWrapper: {
    width: '100%',
    transform: 'translate( -6%, -56%)',
    [theme.breakpoints.up('sm')]: {
      gridColumn: 2,
      transform: 'translate( -0%, -12%)',
    },
  },
  imgMsg: {
    padding: '0px 40px',
    position: 'absolute',
    top: '18vh',
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
  ourServicePaper: {
    padding: '20px',
    backgroundColor: '#E5E5E5',
  },
  serviceWrapper: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  whyChooseUsContainer: {
    padding: '20px',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: '-42%',
    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      marginBottom: '-5px',
      padding: '20px 20px 0px 20px',
    },
  },
  whyImgWrapper: {
    width: '100%',
    transform: 'translate(0px, -25vh)',
    [theme.breakpoints.up('sm')]: {
      gridColumn: 1,
      transform: 'translate(0px, -0vh)',
    },
  },
  whyChooseUsMsg: {
    padding: '20px',
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      gridColumn: 2,
      gridRow: 1,
    },
  },
  contactWrapper: {
    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateColumns: 'auto auto',
    },
  },
}));

const LandingPage = (props) => {
  const classes = useStyles();
  const { history } = props;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const thinBrushStroke = cld.image('Tipsy Boca Raton/pink_thin_brush_stroke');
  const brushStroke = cld.image('Tipsy Boca Raton/pink_brush_stroke');

  if (isDesktop) {
    brushStroke.overlay(
      source(
        image('Tipsy Boca Raton/nail_polish_bottles').transformation(
          new Transformation().resize(scale().width(400)),
        ),
      ),
    );
    thinBrushStroke.overlay(
      source(
        image('Tipsy Boca Raton/remove_bg_hands').transformation(
          new Transformation().resize(scale().width(500)).rotate(byAngle(180)),
        ),
      )
      .position(new Position().gravity(compass(center())).offsetY(100)),
    );
  }

  const goToBooking = () => {
    const bookUrl =
      'https://www.fresha.com/a/tipsy-salonbar-boca-raton-5030-champion-boulevard-5359d6na/booking';
    window.open(bookUrl, '_blank').focus();
  };

  return (
    <div id='landingpage'>
      <div id='top-container' className={classes.imageContainer}>
        <CoverGirl>
          <div className={classes.imgMsg}>
            <h2>
              Lorem Ipsum is simply a dummy text of the printing and typesetting
              industry.
            </h2>
            {isDesktop && (<p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>)}
            <Button
              variant='contained'
              classes={{ root: classes.bookNow }}
              onClick={goToBooking}
            >
              Book Now
            </Button>
          </div>
        </CoverGirl>
      </div>
      <div id='aboutUs-container' className={classes.aboutUsContainer}>
        <div className={classes.aboutUsMsg}>
          <h1>About Us</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
          <Button
            variant='outlined'
            classes={{ root: classes.readMore }}
            onClick={() => history.push('/About')}
          >
            Read More
          </Button>
        </div>
        <div className={classes.aboutImgWrapper}>
          <AdvancedImage cldImg={brushStroke} style={{ width: '100%' }} />
        </div>
      </div>
      <div
        id='ourServices-container'
        style={{ height: 'max-content', padding: '10px' }}
      >
        <Paper classes={{ root: classes.ourServicePaper }}>
          <h1>Our Services</h1>
          <div className={classes.serviceWrapper}>
            <Service {...serviceMock}/>
            <Service {...serviceMock}/>
            <Service {...serviceMock}/>
          </div>
          <Button
            variant='outlined'
            classes={{ root: classes.readMore }}
            onClick={() => history.push('/Service')}
          >
            View All
          </Button>
        </Paper>
      </div>
      <div id='whyChooseUs-container' className={classes.whyChooseUsContainer}>
        <div className={classes.whyChooseUsMsg}>
          <h1>Why Choose Us?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className={classes.whyImgWrapper}>
          <AdvancedImage cldImg={thinBrushStroke} style={{ width: '100%' }} />
        </div>
      </div>
      <Testimonials />
      <div className={classes.contactWrapper}>
        <Contact />
        <GetInTouch />
      </div>
    </div>
  );
};

LandingPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(LandingPage);
