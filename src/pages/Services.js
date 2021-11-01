import React from 'react';
import { Divider, makeStyles } from '@material-ui/core';
import _ from 'lodash';
import Service from '../components/Service';

const useStyles = makeStyles((theme) => ({
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
  container: {
    [theme.breakpoints.up('md')]: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridColumnGap: '10em',
      padding: '4em',
    }
  },
}));

const servicesMock = [
  {
    title: 'Basic Manicure',
    price: '$20',
    description: 'Includes nail trimming and shaping, cuticle grooming, buffing, a lotion massage, hot towel service, and finished with your choice of color.',
    color: 'pink'
  },
  {
    title: 'Deluxe Manicure',
    price: '$35',
    description: ' An extension of our Basic Manicure. This includes your choice of an exfoliating sugar scrub (lavender, green tea, or citrus) that removes dead skin and paraffin to soften your arms. Followed by hot towel service with an extended arm and hand massage',
    color: 'pink'
  },
  {
    title: 'Gel Manicure',
    price: '$35',
    description: 'A hybrid product that applies like polish but wears like gel, no chips, last longer than regular nail polish, and best of all have no need for drying time! Provides a strong natural nail protection with a shiny finish.',
    color: 'pink'
  },
];

const pedicureMock = [
  {
    title: 'Basic Pedicure',
    price: '$30',
    description: 'Includes nail trimming and shaping, cuticle grooming, buffing, a lotion massage, hot towel service, and finished with your choice of color.',
    color: 'blue'
  },
  {
    title: 'Signature Pedicure',
    price: '$45',
    description: 'An extension of our Basic Pedicure. This includes your choice of an exfoliating sugar scrub (lavender, green tea, and callus remover) that removes dead skin and paraffin to soften your arms. Followed by hot towel service with an extended foot and leg massage.',
    color: 'blue'
  },
  {
    title: 'Organic Pedicure',
    price: '$60',
    description: 'An extension of our basic pedicure. This includes a callus treatment for your feet in your choice of an exfoliating sugar scrub (kavender, lemon, or mandrin) that removes dead skin.',
    color: 'blue'
  },
  {
    title: 'Jelly Spa Pedicure',
    price: '$70',
    description: 'Jelly pedi is an unique spa pedicure treatment, that incorporates jelly into an ordinary pedicure treatment for the ultimate luxurious pedicure experience. Jelly holds water temperature 4 times longer than water, ideal for spa. 10 minutes foot soak with Jelly, followed our Deluxe pedicure. (Speical neck wrap relaxation).',
    color: 'blue'
  },
  {
    title: 'All Pedicure (Add Gel Polish)',
    price: '$15',
    // color: 'blue'
  },
  {
    title: 'Add Callus Remove',
    price: '$5',
    // color: 'blue'
  },
];

const nailEnhancementMock = [
  {
    title: 'Dip Powder-Color',
    price: '$45',
  },
  {
    title: 'Dip Powder-Pink&White',
    price: '$50',
  },
  {
    title: 'Ombre Full Set',
    price: '$55',
  },
  {
    title: 'Full Set Acrylic (Regular Polish)',
    price: '$35',
  },
  {
    title: 'Full Set Acrylic (With Gel Polish)',
    price: '$50',
  },
  {
    title: 'Fill In Acrylic (Regular Polish)',
    price: '$30',
  },
  {
    title: 'Fill In Acrylic (With Gel Polish)',
    price: '$45',
  },
  {
    title: 'Full Set Acrylic Pink & White',
    price: '$55',
  },
  {
    title: 'Fill In Pink',
    price: '$35',
  },
  {
    title: 'Liquid Gel Full Set',
    price: '$55',
  },
  {
    title: 'Liquid Gel Fill In',
    price: '$35',
  },
  {
    title: 'Liquid Gel Full Set Pink & White',
    price: '$65',
  },
  {
    title: 'Liquid Gel Pink Fill',
    price: '$40',
  },
];

const additionalServicesMock = [
  {
    title: 'Regular Polish on Hand',
    price: '$10'
  },
  {
    title: 'Regular Polish on Foot',
    price: '$15'
  },
  {
    title: 'Gel Polish on Hand',
    price: '$22',
  },
  {
    title: 'Gel Polish on Foot',
    price: '$28',
  },
  {
    title: 'French Polish',
    price: '$5',
  },
  {
    title: 'Shape Oval',
    price: '$5',
  },
  {
    title: 'Stiletto',
    price: '$5',
  },
  {
    title: 'Coffin',
    price: '$5',
  },
  {
    title: 'Nail Repair',
    price: '$4',
  },
  {
    title: 'Buff Shine',
    price: '$5',
  },
  {
    title: 'Soak Off with Service',
    price: '$7',
  },
  {
    title: 'Soak Off without Service',
    price: '$15',
  },
];

const kidsMenuMock = [
  {
    title: 'Manicure',
    price: '$15',
  },
  {
    title: 'Pedicure',
    price: '$25',
  },
  {
    title: 'Add Gel Polish',
    price: '$15',
  },
  {
    title: 'Regular Polish Hand',
    price: '$8',
  },
  {
    title: 'Regular Polish Foot',
    price: '$10',
  },
];

const waxingMock = [
  {
    title: 'Eyebrows',
    price: '$12 & Up',
  },

  {
    title: 'Upper Lip',
    price: '$8',
  },
  {
    title: 'Lower Lip',
    price: '$5',
  },
  {
    title: 'Chin',
    price: '$10 & Up',
  },
  {
    title: 'Nose',
    price: '$10 & Up',
  },
  {
    title: 'Ears',
    price: '$15',
  },
  {
    title: 'Cheeks',
    price: '$10',
  },
  {
    title: 'SideBurns',
    price: '$15 & Up',
  },
  {
    title: 'Full Face',
    price: '$50 & Up',
  },
  {
    title: 'Under Arms',
    price: '$20 & Up',
  },
  {
    title: 'Half Arms',
    price: '$25 & Up',
  },
  {
    title: 'Full Arms',
    price: '$40',
  },
  {
    title: 'Bikini',
    price: '$30 & Up',
  },
  {
    title: 'Brazilian',
    price: '$50 & Up',
  },
  {
    title: 'Half Legs',
    price: '$35 & Up',
  },
  {
    title: 'Full Legs',
    price: '$55 & Up',
  },
  {
    title: 'Abdomen',
    price: '$25 & Up',
  },
  {
    title: 'Full Back',
    price: '$50 & Up',
  },
];

const Services = () => {
  const classes = useStyles();

  const renderService = (services) => 
    _.map(services, (service, i) => _.get(service, 'description') ? <Service key={i} {...service}/> 
    : (<div key={i} className={classes.serviceNameRow}>
        <h2>{_.get(service, 'title')}</h2>
        <div>{_.get(service, 'price')}</div>
      </div>)
  );


  return (
    <div className={classes.root}>
      <h1 style={{ marginBottom: 0 }}>Our Services</h1>
      <Divider classes={{ root: classes.divider }} />
      <div className={classes.container}>
          <div>
            <h1>Manicure</h1>
            {renderService(servicesMock)}
          </div>
          <div>
            <h1>Pedicure</h1>
            {renderService(pedicureMock)}
          </div>
          <div>
            <h1>Nail Enhancement</h1>
            {renderService(nailEnhancementMock)}
          </div>
          <div>
            <h1>Additional Services</h1>
            {renderService(additionalServicesMock)}
          </div>
          <div>
            <h1>Kids Menu</h1>
            {renderService(kidsMenuMock)}
          </div>
          <div>
            <h1>Waxing</h1>
            {renderService(waxingMock)}
          </div>
      </div>
    </div>
  );
};

export default Services;
