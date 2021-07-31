import React from 'react'
import { makeStyles } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

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
    width: '100%',
    height: '100%',
  },
  carousel: {
    height: '76%'
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
  }
}));

const Testimonials = () => {

  const classes = useStyles();

  const items = [
    {
        name: "Random Name #1",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"
    },
    {
        name: "Random Name #2",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s"
    }
  ]

  return (
    <div id="testimonials-container" className={classes.root}>
      <div className={classes.parallaxWhiteNailPolish} />
      <div className={classes.testimonialMsg}>
        <h1>Testimonials</h1>
        <Carousel classes={{root: classes.carousel, indicators: classes.indicator}}>
          {items.map((item, i) => (<div key={i}>{item.description}</div>))}
        </Carousel>
      </div>
    </div>
  )

}

export default Testimonials;