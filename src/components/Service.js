import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    marginBottom: '60px',
    // height: '138px'
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
    height: '150px',
    width: '150px',
    backgroundColor: '#FCEFEE',
    position: 'absolute',
    zIndex: '-1',
    top: '24px',
    left: '-4em',
  },
});

const Service = (props) => {
  const { title, duration, price, description, color, } = props;
  const classes = useStyles();
  let bg;
  switch (color) {
    case 'blue': bg = { backgroundColor: '#C5E3F6' }; break;
    case 'pink': bg = { backgroundColor: '#FCEFEE' }; break;
    default:  bg = { backgroundColor: 'white'};
  }

  return (
    <div id='service-component' className={classes.root}>
      <div className={classes.serviceNameRow}>
        <h2>{title}</h2>
        <div>{price}</div>
      </div>
      <div>{duration}</div>
      {description && (<p>{description}</p>)}
      <div className={classes.circle} style={bg}/>
    </div>
  );
};

Service.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string
};

Service.defaultProps = {
  color: 'none',
  duration: '',
  price: '',
  description: '',
}

export default Service;
