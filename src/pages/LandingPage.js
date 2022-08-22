import React, { useState } from 'react';
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
import _ from 'lodash';
import { Fade } from 'react-reveal';

import CoverGirl from '../components/CoverGirl';
import Contact from '../components/Contact';
import GetInTouch from '../components/GetInTouch';
import Testimonials from '../components/Testimonials';
import Service from '../components/Service';
import BookingModal from '../components/BookingModal';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dgpijcm0x',
  },
});
const servicesMock = [
  {
    title: 'Basic Manicure',
    description:
      'Trim, shape nails, groom cuticles, massage hands with lotion and regular polish',
    color: 'pink',
  },
  {
    title: 'Deluxe Manicure',
    description:
      ' Basic manicure, extra massage plus hands exfoliating sugar scrub with your choice   (Lavender ,lemon or cucumber) plus paraffin treatment and hot towel.',
    color: 'pink',
  },
  {
    title: 'Gel Manicure',
    description: 'Basic Manicure and finish with gel polish.',
    color: 'pink',
  },
];

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
    '& h1': {
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
      display: 'flex',
    },
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
      gridTemplateColumns: '1fr 1fr',
    },
  },
  virtualTourContainer: {
    position: 'relative',
    marginTop: '1rem',
    '& button': {
      position: 'absolute',
      bottom: '1rem',
      left: '1rem',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '50px',
      height: '100vh',
      '& button': {
        bottom: '5rem',
        left: '6rem',
      },
    },
  },
  iframeContainer: {
    height: '100%',
    paddingTop: '75%',
    position: 'relative',
  },
  absoluteiFrame: {
    width: '100%',
    height: '100%',
    border: 'none',
    position: 'absolute',
    top: 0,
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    // position: 'absolute',
    // top: 0,
  },
  alert: {
    borderRadius: '0px !important',
    fontSize: '1.5rem !important',
  },
}));

const LandingPage = (props) => {
  const classes = useStyles();
  const { history } = props;
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
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
      ).position(new Position().gravity(compass(center())).offsetY(100)),
    );
  }

  return (
    <div id='landingpage'>
      <div id='top-container' className={classes.imageContainer}>
        {/* <Alert
          variant='filled'
          severity='error'
          icon={false}
          classes={{ root: classes.alert }}
        >
          Additional 10% offer on Gift Cards
        </Alert> */}
        <CoverGirl>
          <div className={classes.imgMsg}>
            <Fade bottom delay={500}>
              <h1>Your Escape From Everyday Routine</h1>
            </Fade>
            {isDesktop && (
              <Fade bottom delay={1000}>
                <p>Making your treatments comfortable and fun</p>
              </Fade>
            )}
            <Fade bottom delay={1500}>
              <Button
                variant='contained'
                classes={{ root: classes.bookNow }}
                onClick={() => setOpen(true)}
              >
                Book Now
              </Button>
            </Fade>
          </div>
        </CoverGirl>
      </div>
      <Fade bottom>
        <div id='aboutUs-container' className={classes.aboutUsContainer}>
          <div className={classes.aboutUsMsg}>
            <h1>About Us</h1>
            <p>
              Our Nail Bar opened its doors, with a team of talented,
              passionate, caring, creative people dedicated to doing great nails
              and giving our clients amazing experiences.
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
            <AdvancedImage
              cldImg={brushStroke}
              style={{ width: '100%' }}
              alt='About Paint Splash and Nail Art'
            />
          </div>
        </div>
      </Fade>
      <Fade bottom delay={600}>
        <div
          id='ourServices-container'
          style={{ height: 'max-content', padding: '10px' }}
        >
          <Paper classes={{ root: classes.ourServicePaper }}>
            <h1>Our Services</h1>
            <div className={classes.serviceWrapper}>
              {_.map(servicesMock, (service, i) => (
                <Service key={i} {...service} color='none' />
              ))}
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
      </Fade>
      <Fade bottom delay={600}>
        <div
          id='whyChooseUs-container'
          className={classes.whyChooseUsContainer}
        >
          <div className={classes.whyChooseUsMsg}>
            <h1>Why Choose Us?</h1>
            <p>
              We offer an exclusive beauty and wellness journey tailored to your
              specific well-being needs. Featuring finest and outstanding
              services as well as result-driven treatments, we are committed to
              providing you with insight to a better, healthier state being. Our
              luxurious, modern-inspired location seamlessly balances both your
              wellness and appearance through spectacular spatial offerings
              including signature pedicure treatments, stunning nail care, and
              designs, luxurious brand name products, and warm, welcoming space.
            </p>
          </div>
          <div className={classes.whyImgWrapper}>
            <AdvancedImage
              cldImg={thinBrushStroke}
              style={{ width: '100%' }}
              alt='Why Image'
            />
          </div>
        </div>
      </Fade>
      <Fade bottom delay={600}>
        <Testimonials />
      </Fade>
      <Fade bottom delay={600}>
        <div className={classes.virtualTourContainer}>
          {isDesktop ? (
            <iframe
              id='virtualTourFrame'
              title='Virtual Tour Frame'
              src='https://www.tipsyuptownboca.com'
              className={classes.iframe}
              allowFullScreen
            />
          ) : (
            <div className={classes.iframeContainer}>
              <iframe
                id='virtualTourFrame'
                title='Virtual Tour Frame'
                src='https://www.tipsyuptownboca.com'
                className={classes.absoluteiFrame}
                allowFullScreen
              />
            </div>
          )}
          <Button
            variant='contained'
            classes={{ root: classes.bookNow }}
            onClick={() => setOpen(true)}
          >
            Book Now
          </Button>
        </div>
      </Fade>
      <div className={classes.contactWrapper}>
        <Contact />
        <GetInTouch />
      </div>
      <BookingModal open={open} handleClose={handleClose} />
    </div>
  );
};

LandingPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(LandingPage);
