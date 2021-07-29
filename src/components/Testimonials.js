import React from 'react'
import { makeStyles } from '@material-ui/core';

const cloudinaryUrl = 'https://res.cloudinary.com/dgpijcm0x/image/upload/Tipsy%20Boca%20Raton';
const whiteNailPolishUrl = `${cloudinaryUrl}/white_nail_polish`;

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative'
  },
  parallaxWhiteNailPolish: {
    backgroundImage: `url(${whiteNailPolishUrl})`,
    minHeight: '50vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '0.6',
    [theme.breakpoints.up('sm')]: {
      backgroundAttachment: 'fixed',
    },
  },
  testimonialMsg: {
    position: 'absolute',
    top: '0vh',
    textAlign: 'center',
    width: '100%'
  },
}));

const Testimonials = () => {

  const classes = useStyles();

  return (
    <div id="testimonials-container" className={classes.root}>
      <div className={classes.parallaxWhiteNailPolish} />
      <div className={classes.testimonialMsg}>
        <h1>Testimonials</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
        </p>
      </div>
    </div>
  )

}

export default Testimonials;