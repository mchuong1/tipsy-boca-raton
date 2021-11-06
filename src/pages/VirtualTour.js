import React, { useState } from 'react';
import { makeStyles, useMediaQuery, useTheme, Button } from '@material-ui/core';
import BookingModal from '../components/BookingModal';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    '& button' : {
      position: 'absolute',
      bottom: '1rem',
      left: '1rem'
    },
    [theme.breakpoints.up('sm')]: {
      padding: '50px',
      height: '100vh',
      '& button' : {
        bottom: '5rem',
        left: '6rem'
      }
    },
  },
  iframeContainer: {
    height: '100%',
    paddingTop: '75%',
    position: 'relative',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    // position: 'absolute',
    // top: 0,
  },
  absoluteiFrame: {
    width: '100%',
    height: '100%',
    border: 'none',
    position: 'absolute',
    top: 0,
  },
  bookNow: {
    marginTop: '20px',
    backgroundColor: '#FC5C9C',
    color: 'white',
    // borderRadius: '50px',
  },
}));

const VirtualTour = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
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
      <BookingModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default VirtualTour;
