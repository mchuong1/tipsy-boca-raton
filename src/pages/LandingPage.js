import React from 'react';
import { Button, makeStyles, Paper } from '@material-ui/core';
import { Cloudinary } from '@cloudinary/base';
import { AdvancedImage } from '@cloudinary/react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import CoverGirl from '../components/CoverGirl';
import Contact from '../components/Contact';
import GetInTouch from '../components/GetInTouch';
import Testimonials from '../components/Testimonials';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dgpijcm0x',
  },
});

const thinBrushStroke = cld.image('Tipsy Boca Raton/pink_thin_brush_stroke');
const brushStroke = cld.image('Tipsy Boca Raton/pink_brush_stroke');

const useStyles = makeStyles({
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
  },
  readMore: {
    backgroundColor: 'white',
    color: '#FC5C9C',
    border: '1px solid #FC5C9C',
  },
  aboutUsMsg: {
    position: 'absolute',
    top: '10vh',
    padding: '20px',
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
  serviceNameRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  whyChooseUsContainer: {
    padding: '20px',
    position: 'relative',
    overflow: 'hidden',
  },
  whyChooseUsMsg: {
    position: 'absolute',
    top: '-4vh',
    padding: '20px',
  },
});

const LandingPage = (props) => {
  const classes = useStyles();
  const { history } = props;

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
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
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
        <AdvancedImage
          cldImg={brushStroke}
          style={{ width: '100%', transform: 'translate( -6%, -16%)' }}
        />
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
      </div>
      <div
        id='ourServices-container'
        style={{ height: 'max-content', padding: '10px' }}
      >
        <Paper classes={{ root: classes.ourServicePaper }}>
          <h1>Our Services</h1>
          <div id='service-component'>
            <div className={classes.serviceNameRow}>
              <h2>Type of service</h2>
              <h2>30m</h2>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div id='service-component'>
            <div className={classes.serviceNameRow}>
              <h2>Type of service</h2>
              <h2>30m</h2>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div id='service-component'>
            <div className={classes.serviceNameRow}>
              <h2>Type of service</h2>
              <h2>30m</h2>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
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
        <AdvancedImage cldImg={thinBrushStroke} style={{ width: '100%' }} />
        <div className={classes.whyChooseUsMsg}>
          <h1>Why Choose Us?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
      <Testimonials />
      <Contact />
      <GetInTouch />
    </div>
  );
};

LandingPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(LandingPage);
