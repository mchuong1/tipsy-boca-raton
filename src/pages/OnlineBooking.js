import { Button, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import BookingModal from '../components/BookingModal';
import CoverGirl from '../components/CoverGirl';

const useStyles = makeStyles({
  root: {
    position: 'relative',
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
    justifyContent: 'center',
  },
  bookNow: {
    marginTop: '2em',
    backgroundColor: '#FC5C9C',
    color: 'white',
  },
});

const OnlineBooking = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CoverGirl>
        <div className={classes.container}>
          <div style={{ width: '200px' }}>
            <h1>Book A Treatment</h1>
            <p>
              *** To ensure quality services, online booking appointments will
              be confirmed via phone by our receptionist. Unconfirmed
              appointments are subject to cancellation.
            </p>
            <Button classes={{ root: classes.bookNow }} onClick={() => setOpen(true)}>
              Book Now
            </Button>
          </div>
        </div>
      </CoverGirl>
      <BookingModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default OnlineBooking;
