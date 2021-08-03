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
    width: '250px',
    placeContent: 'space-evenly',
  },
  socialIcon: {
    cursor: 'pointer'
  }
});

const Footer = () => {

  const classes = useStyles();
  const goToSocial = (url) => {
    window.open(url, '_blank').focus();
  }

  return (
    <div id='footer' className={classes.footer}>
      <div className={classes.socialBar}>
        <FacebookIcon classes={{root: classes.socialIcon}}  onClick={() => goToSocial('https://www.facebook.com/Tipsy-Nailbar-Boca-105414531836108')}/>
        <InstagramIcon classes={{root: classes.socialIcon}} onClick={() => goToSocial('https://www.instagram.com/tipsybocaraton/?hl=en')}/>
        <PhoneIcon classes={{root: classes.socialIcon}} onClick={() => goToSocial('tel:561.419.7911')}/>
        <MailIcon classes={{root: classes.socialIcon}} onClick={() => goToSocial('mailto:tipsynailbarboca@gmail.com')}/>
      </div>
      <span>Copyright 2021 TIPSY SALON BAR | All Rights Reserved</span>
      <span>Web Development by: Matthew Chuong</span>
    </div>
  );
};

export default Footer;
