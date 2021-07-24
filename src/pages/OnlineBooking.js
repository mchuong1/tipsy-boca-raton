import { makeStyles } from '@material-ui/core';
import React from 'react';
import CoverGirl from '../components/CoverGirl';

const useStyles = makeStyles({
  root: {

  }
})

const OnlineBooking = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CoverGirl>
        <h1>Online Booking</h1>
      </CoverGirl>
    </div>
  );
};

export default OnlineBooking;
