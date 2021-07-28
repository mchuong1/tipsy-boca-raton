import React from 'react';
import { makeStyles } from '@material-ui/core';
import propTypes from 'prop-types';

const cloudinaryUrl =
  'https://res.cloudinary.com/dgpijcm0x/image/upload/Tipsy%20Boca%20Raton';
const coverGirlUrl = `${cloudinaryUrl}/cover_girl`;

const useStyles = makeStyles( (theme) => ({
  imageContainer: {
    position: 'relative',
    top: 0,
    height: '100vh',
  },
  imageWrapper: {
    backgroundColor: 'black',
    height: '100vh',
  },
  parallaxCoverGirl: {
    backgroundImage: `url(${coverGirlUrl})`,
    minHeight: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '0.6',
    [theme.breakpoints.up('sm')]: {
      backgroundAttachment: 'fixed',
    },
  },
}));

const CoverGirl = ({ children }) => {
  const classes = useStyles();

  return (
    <div id='coverGirl-container' className={classes.imageContainer}>
      <div className={classes.imageWrapper}>
        <div className={classes.parallaxCoverGirl} />
      </div>
      {children}
    </div>
  );
};

CoverGirl.propTypes = {
  children: propTypes.shape([]),
};

CoverGirl.defaultProps = {
  children: [],
};

export default CoverGirl;
