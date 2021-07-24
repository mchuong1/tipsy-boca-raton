import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  contactContainer: {
    padding: '20px'
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
    <div id='contact-container' className={classes.contactContainer}>
      <h1>Contact</h1>
      <h2>Tipsy Salon Bar Boca Raton</h2>
      <p>5030 Champion Blvd Ste G12, Boca Raton, FL 33496</p>
      <p>(561) 419-7199</p>

      <p>Hours</p>
      <p>
        Monday-Friday: 9:30 AM - 7:30 PM
        <br />
        Saturday: 9:30 AM - 7 PM
        <br />
        Sunday: 11 AM - 5 PM
      </p>
    </div>
  );
};

export default Contact;
