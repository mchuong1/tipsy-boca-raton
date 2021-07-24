import React from 'react';
import {
  Button,
  makeStyles,
  Paper,
  TextField,
} from '@material-ui/core';
import { Cloudinary } from '@cloudinary/base';
import { AdvancedImage } from '@cloudinary/react';
import CoverGirl from '../components/CoverGirl';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dgpijcm0x',
  },
});

const cloudinaryUrl = 'https://res.cloudinary.com/dgpijcm0x/image/upload/Tipsy%20Boca%20Raton';
const whiteNailPolishUrl = `${cloudinaryUrl}/white_nail_polish`;

const thinBrushStroke = cld.image('Tipsy Boca Raton/pink_thin_brush_stroke');
const brushStroke = cld.image('Tipsy Boca Raton/pink_brush_stroke');

const useStyles = makeStyles({
  aboutUs: {
    backgroundColor: 'white',
  },
  bookNow: {
    backgroundColor: '#FC5C9C',
    color: 'white',
  },
  aboutUsContainer: {
    backgroundColor: 'white',
    padding: '20px',
    height: '50vh',
    overflow: 'hidden'
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
  whyChooseUsContainer: {
    height: '50vh',
    padding: '20px'
  },
  whyChooseUsMsg: {
    position: 'absolute',
    top: '265vh',
    padding: '20px',
  },
  parallaxWhiteNailPolish: {
    backgroundImage: `url(${whiteNailPolishUrl})`,
    minHeight: '50vh',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '0.6'
  },
  testimonialMsg: {
    position: 'absolute',
    top: '325vh',
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
  },
  contactContainer: {
    padding: '20px'
  },
});

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div id="landingpage">
      <div id="top-container" className={classes.imageContainer}>
        <CoverGirl>
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
        </CoverGirl>
      </div>
      <div id="aboutUs-container" className={classes.aboutUsContainer}>
        <AdvancedImage
          cldImg={brushStroke}
          style={{width: '125%', transform: 'translate( 0%, -20%)'}}
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
      <div id="ourServices-container" style={{height: '100vh', padding: '10px'}}>
        <Paper classes={{root: classes.ourServicePaper}}>
          <h1>Our Services</h1>
          <div id="service-component">
            <div className={classes.serviceNameRow}>
              <h2>Type of service</h2>
              <h2>30m</h2>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
            </p>
          </div>
          <div id="service-component">
            <div className={classes.serviceNameRow}>
              <h2>Type of service</h2>
              <h2>30m</h2>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
            </p>
          </div>
          <div id="service-component">
            <div className={classes.serviceNameRow}>
              <h2>Type of service</h2>
              <h2>30m</h2>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
            </p>
          </div>

          <Button variant='outlined' classes={{ root: classes.readMore }}>
            View All
          </Button>
        </Paper>
      </div>
      <div id='whyChooseUs-container' className={classes.whyChooseUsContainer}>
        <AdvancedImage
          cldImg={thinBrushStroke}
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
        <div className={classes.testimonialMsg}>
          <h1>Testimonials</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
          </p>
        </div>
      </div>
      <div id="contact-container" className={classes.contactContainer}>
        <h1>Contact</h1>
        <h2>Tipsy Salon Bar Boca Raton</h2>
        <p>5030 Champion Blvd Ste G12, Boca Raton, FL 33496</p>
        <p>(561) 419-7199</p>

        <p>Hours</p>
        <p>
          Monday-Friday: 9:30 AM - 7:30 PM
          <br/>
          Saturday: 9:30 AM - 7 PM
          <br/>
          Sunday: 11 AM - 5 PM
        </p>
      </div>
      <div id="getInTouch-container" style={{padding: '20px'}}>
        <Paper classes={{ root: classes.ourServicePaper }}>
          <h1>Get In Touch</h1>
          <p>
            Have any questions? Feel free to use the contact form below to get in touch with us. 
            We will answer you as soon as possible!
          </p>
          <form>
            <TextField
              classes={{ root: classes.input }}
              variant="outlined"
              id="firstName"
              name="firstName"
              label="First Name"
            />
            <TextField
              classes={{ root: classes.input }}
              variant="outlined"
              id="lastName"
              name="lastName"
              label="Last Name"
            />
            <TextField
              classes={{ root: classes.input }}
              variant="outlined"
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
            />
            <TextField
              classes={{ root: classes.input }}
              variant="outlined"
              id="email"
              name="email"
              label="Email"
            />
            <Button variant="contained" classes={{root: classes.bookNow}}>
              Submit
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
}
