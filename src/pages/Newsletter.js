import React from 'react';
import { Divider, makeStyles } from '@material-ui/core';
import CoverGirl from '../components/CoverGirl';

const useStyles = makeStyles({
  root: {},
  container: {
    position: 'absolute',
    top: '0',
    color: 'white',
    padding: '20px',
    width: '92vw',
    height: '100%'
  },
  divider: {
    color: '#FC5C9C',
    backgroundColor: '#FC5C9C',
    height: '4px',
    width: '75px',
  },
  input: {
    width: '100%',
    marginBottom: '20px',
    '& div': {
      backgroundColor: 'white',
    },
  },
  datePicker: {
    width: '100%',
    marginBottom: '20px',
    '& div': {
      backgroundColor: 'white',
      borderRadius: '4px',
      padding: '5px 10px',
    },
  },
  primary: {
    backgroundColor: '#FC5C9C',
    color: 'white',
  },
  iframe: {
    width: '100%',
    height: '100%',
    borderStyle: 'none',
    overflow: 'hidden',
  }
});

const Newsletter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CoverGirl>
        <div className={classes.container}>
          <h1 style={{ marginBottom: 0 }}>Newsletter</h1>
          <Divider classes={{ root: classes.divider }} />
          <iframe className={classes.iframe} title="tipsynewsletter" src="https://cdn.forms-content.sg-form.com/b59a3221-ef49-11eb-8da0-d69b50d6f48b"/>
        </div>
      </CoverGirl>
    </div>
  );
};

export default Newsletter;
