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
      <p>
        9658 Glade Road #220, Boca Raton, FL 33434
        <br />
        Next to Lazy Dog and Amazon Fresh Market
      </p>
      <p>(561) 990-1305</p>

      <p>Hours</p>
      <p>
        Monday-Saturday: 9:30 AM - 7:00 PM
        <br />
        Sunday: 11:00 AM - 6:00 PM
      </p>
    </div>
  );
};

export default Contact;
