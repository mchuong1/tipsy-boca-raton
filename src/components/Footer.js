import React from 'react';
import { makeStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
  footer: {
    backgroundColor: '#C4C4C4',
    height: '100px',
    textAlign: 'center',
    justifyItems: 'center',
    padding: '20px',
    display: 'grid'
  },
  socialBar: {
    display: 'flex',
    width: '24vw',
    placeContent: 'space-evenly',
  }
});

const Footer = () => {

  const classes = useStyles();

  return (
    <div id='footer' className={classes.footer}>
      <div className={classes.socialBar}>
        <FacebookIcon />
        <InstagramIcon />
        <PhoneIcon />
        <MailIcon />
      </div>
      <span>Copyright 2021 TIPSY SALON BAR | All Rights Reserved</span>
      <span>Web Development by: Matthew Chuong</span>
    </div>
  );
};

export default Footer;
