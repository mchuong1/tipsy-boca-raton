import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {

  }
})

const AboutUs = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>About Us</h1>
    </div>
  );
};

export default AboutUs;
