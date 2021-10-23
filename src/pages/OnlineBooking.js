import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import CoverGirl from '../components/CoverGirl';

const useStyles = makeStyles({
  root: {
    position: 'relative'
  },
  container: {
    position: 'absolute',
    top: '15vh',
    color: 'white',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    // eslint-disable-next-line no-dupe-keys
    textAlign: '-webkit-center',
    justifyContent: 'center'
  },
  bookNow: {
    marginTop: '2em',
    backgroundColor: '#FC5C9C',
    color: 'white',
  },
})

const OnlineBooking = () => {

  const classes = useStyles();

  const goToBooking = () => {
    const bookUrl =
      `https://www.rewanow.com/scheduler/${process.env.REACT_APP_REWANOW_ID}`;
    window.open(bookUrl, '_blank').focus();
  };

  return (
    <div className={classes.root}>
      <CoverGirl>
        <div className={classes.container}>
          <div style={{width: '200px'}}>
            <h1>Book A Treatment</h1>
            <div>View a list of our treatments and book</div>
            <Button classes={{ root: classes.bookNow}} onClick={goToBooking}>Book Now</Button>
          </div>
        </div>
      </CoverGirl>
    </div>
  );
};

export default OnlineBooking;
