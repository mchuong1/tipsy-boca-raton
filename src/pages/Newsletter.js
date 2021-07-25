import { Divider, makeStyles } from '@material-ui/core';
import React from 'react';
import CoverGirl from '../components/CoverGirl';

const useStyles = makeStyles({
  root: {

  },
  container: {
    position: 'absolute',
    top: '0',
    color: 'white',
    padding: '20px'
  },
  divider: {
    color: '#FC5C9C',
    backgroundColor: '#FC5C9C',
    height: '4px',
    width: '75px',
  },
})

const Newsletter = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CoverGirl>
        <div className={classes.container}>
          <h1 style={{ marginBottom: 0 }}>Newsletter</h1>
          <Divider classes={{ root: classes.divider }}/>
        </div>
      </CoverGirl>
    </div>
  );
};

export default Newsletter;
