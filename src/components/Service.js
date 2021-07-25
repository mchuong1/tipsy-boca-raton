import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    marginBottom: '60px',
  },
  serviceNameRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    '& div': {
      marginTop: '20px',
      fontWeight: 'bold',
    },
    '& h2': {
      marginBottom: 0,
    },
  },
  circle: {
    borderRadius: '50%',
    height: '200px',
    width: '200px',
    backgroundColor: '#FCEFEE',
    position: 'absolute',
    zIndex: '-1',
    top: '1em',
    left: '-7em',
  },
});

const Service = (props) => {
  const { title, duration, price, description, color, } = props;
  const classes = useStyles();
  let bg;
  switch (color) {
    case 'blue': bg = { backgroundColor: '#C5E3F6' }; break;
    case 'pink': bg = { backgroundColor: '#FCEFEE' }; break;
    default:  bg = { backgroundColor: 'white' };
  }

  return (
    <div id='service-component' className={classes.root}>
      <div className={classes.serviceNameRow}>
        <h2>{title}</h2>
        <div>{duration}</div>
      </div>
      <div>{price}</div>
      <p>{description}</p>
      <div className={classes.circle} style={bg}/>
    </div>
  );
};

Service.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string
};

Service.defaultProps = {
  color: 'none'
}

export default Service;
