import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  root: {

  }
})

const Services = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Our Services</h1>
    </div>
  );
};

export default Services;
