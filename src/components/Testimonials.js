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
    height: '72%',
    '& div': {
      height: '100%',
    },
    '& div div': {
      height: '100%',
    }
  },
  carouselItem: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    '& p': {
      width: '80%',
      alignSelf: 'center',
    },
    '& h2': {
      fontWeight: 300,
      paddingBottom: '3em',
    }
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    height: '10% !important',
  }
}));

const Testimonials = () => {

  const classes = useStyles();

  const items = [
    {
        name: "Polly Wood",
        description: "My body relaxes every time I come here. I feel myself like a real queen thanks to the care of these ladies."
    },
    {
        name: "Janice Stevens",
        description: "This nails and spa salon is the best place for any lady to forget about routine and dive into the ocean of joy."
    },
    {
        name: "Maegan Smith",
        description: "I love the natural color of this nail polish. It's so soft and it's so fresh. I can't wait to wear it again."
    }
  ]

  return (
    <div id="testimonials-container" className={classes.root}>
      <div className={classes.parallaxWhiteNailPolish} />
      <div className={classes.testimonialMsg}>
        <h1>Testimonials</h1>
        <Carousel classes={{root: classes.carousel, indicators: classes.indicator}}>
          {items.map((item, i) => (
            <div key={i} className={classes.carouselItem}>
              <p>
                {item.description}
              </p>
              <h2>
                {item.name}
              </h2>
            </div>))}
        </Carousel>
      </div>
    </div>
  )

}

export default Testimonials;