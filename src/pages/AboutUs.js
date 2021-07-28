import React from 'react';
import { Divider, makeStyles, useTheme } from '@material-ui/core';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary, Transformation } from '@cloudinary/base';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { source } from '@cloudinary/base/actions/overlay';
import { image } from '@cloudinary/base/qualifiers/source';
import { scale } from '@cloudinary/base/actions/resize';

import Contact from '../components/Contact';
import GetInTouch from '../components/GetInTouch';
import Testimonials from '../components/Testimonials';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dgpijcm0x',
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
  },
  divider: {
    color: '#FC5C9C',
    backgroundColor: '#FC5C9C',
    height: '4px',
    width: '75px',
    marginLeft: '20px'
  },
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
  contactWrapper: {
    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateColumns: 'auto auto',
    },
  },
}));

const AboutUs = () => {

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const brushStroke = cld.image('Tipsy Boca Raton/pink_brush_stroke');

  if (isDesktop) {
    brushStroke.overlay(
      source(
        image('Tipsy Boca Raton/nail_polish_bottles').transformation(
          new Transformation().resize(scale().width(400)),
        ),
      ),
    );
  }

  return (
    <div className={classes.root}>
      <h1 style={{ marginBottom: 0, paddingLeft: '20px' }}>About Us</h1>
      <Divider classes={{root: classes.divider }}/>
      <div id='aboutUs-container' className={classes.aboutUsContainer}>
        <div className={classes.aboutUsMsg}>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
          </p>
        </div>
        <div className={classes.aboutImgWrapper}>
          <AdvancedImage cldImg={brushStroke} style={{ width: '100%' }} />
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

export default AboutUs;
