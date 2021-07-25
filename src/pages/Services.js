import React from 'react';
import { Divider, makeStyles } from '@material-ui/core';
import _ from 'lodash';
import Service from '../components/Service';

const useStyles = makeStyles({
  root: {
    padding: '20px',
  },
  divider: {
    color: '#FC5C9C',
    backgroundColor: '#FC5C9C',
    height: '4px',
    width: '75px',
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
  },
});

const serviceMock = {
  title: 'Type of Service',
  duration: '30m',
  price: '$17.99',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  color: 'pink'
};

const servicesMock = [
  { ...serviceMock },
  {
    title: 'Manicure',
    duration: '30m',
    price: '$17.99',
    description: 'A short description',
    color: 'pink'
  },
];

const Services = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 style={{ marginBottom: 0 }}>Our Services</h1>
      <Divider classes={{ root: classes.divider }} />
      {_.map(servicesMock, (service) => <Service {...service}/>)}
    </div>
  );
};

export default Services;
