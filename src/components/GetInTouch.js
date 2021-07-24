import React from 'react';
import { makeStyles, TextField, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '20px',
    backgroundColor: '#E5E5E5'
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
  },
  primary: {
    backgroundColor: '#FC5C9C',
    color: 'white',
  },
});

const GetInTouch = () => {

  const classes = useStyles();

  return (
    <div id='getInTouch-container' style={{ padding: '20px' }}>
      <Paper classes={{ root: classes.root }}>
        <h1>Get In Touch</h1>
        <p>
          Have any questions? Feel free to use the contact form below to get in
          touch with us. We will answer you as soon as possible!
        </p>
        <form>
          <TextField
            classes={{ root: classes.input }}
            variant='outlined'
            id='firstName'
            name='firstName'
            label='First Name'
          />
          <TextField
            classes={{ root: classes.input }}
            variant='outlined'
            id='lastName'
            name='lastName'
            label='Last Name'
          />
          <TextField
            classes={{ root: classes.input }}
            variant='outlined'
            id='phoneNumber'
            name='phoneNumber'
            label='Phone Number'
          />
          <TextField
            classes={{ root: classes.input }}
            variant='outlined'
            id='email'
            name='email'
            label='Email'
          />
          <Button variant='contained' classes={{ root: classes.primary }}>
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default GetInTouch;
