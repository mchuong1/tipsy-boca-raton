import React from 'react';
import { makeStyles, Dialog } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  dialog: {
    height: '100%',
    width: '100%',
  },
  iframe: {
    // width: '80%',
    height: '100%',
    border: 'none',
  },
});

const BookingModal = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
      // className={classes.dialog}
      classes={{ paper: classes.dialog }}
    >
      <iframe
        id='onlineBookingFrame'
        title='Online Booking Frame'
        src={`https://www.rewanow.com/scheduler/${process.env.REACT_APP_REWANOW_ID}`}
        className={classes.iframe}
      />
    </Dialog>
  );
};

BookingModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default BookingModal;
