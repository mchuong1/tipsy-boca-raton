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
    [theme.breakpoints.up('sm')]: {
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
    price: '$17',
    description: 'Trim, shape nails, groom cuticles, massage hands with lotion and regular polish',
    color: 'pink'
  },
  {
    title: 'Deluxe Manicure',
    price: '$35',
    description: ' Basic manicure, extra massage plus hands exfoliating sugar scrub with your choice   (Lavender ,lemon or cucumber) plus paraffin treatment and hot towel.',
    color: 'pink'
  },
  {
    title: 'Gel Manicure',
    price: '$35',
    description: 'Basic Manicure and finish with gel polish.',
    color: 'pink'
  },
];

const pedicureMock = [
  {
    title: 'Basic Pedicure',
    price: '$28',
    description: 'Trim, file, cuticles,scrub, massage hot towel and regular polish.',
    color: 'blue'
  },
  {
    title: 'Signature Pedicure',
    price: '$45',
    description: 'An extension of our basic pedicure. This includes a callus removed treatment for your      feet and your choice of an exfoliating sugar scrub (lavender, lemon or cucumber) that removes  dead skin, followed by extended foot and leg massage with cooling gel. (Special neck wrap relaxation).',
    color: 'blue'
  },
  {
    title: 'Organic Pedicure',
    price: '$55',
    description: '100% FREE of paraben, triclosan benzophenone, mineral oil, animal material, ethanol.  Clean, hygienic pedicure prepackaged individually to prevent cross-contamination. Seasalt foot  soak, invigorating scrub massage moisturizing lotion massage, hydrating mud masque, with  PARAFFIN TREATMENT. (Special neck wrap relaxation)',
    color: 'blue'
  },
  {
    title: 'Jelly Spa Pedicure',
    // price: '$55',
    description: 'JELLY pedicure is unique spa treatment that incorporates JELLY into an ordinary  pedicure treatment for the ultimate luxurious pedicure experience. JELLY holds water  temperature 4 times longer than water, ideal for spa 10 minutes foot soak with JELLY. Followed  by our signature pedicure (Special neck wrap relaxation).',
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
    title: 'Full Set Acrylic',
    price: '$40',
  },
  {
    title: 'Fill In Nail Polish',
    price: '$30',
  },
  {
    title: 'Full Set Color Powder',
    price: '$50',
  },
  {
    title: 'Fill In Color Powder',
    price: '$40',
  },
  {
    title: 'Full Set Dip Powder',
    price: '$40',
  },
  {
    title: 'With Tip Extenstions',
    price: '$45',
  },
  {
    title: 'Dip Powder French',
    price: '$55',
  },
  {
    title: 'Ombre Powder',
    price: '$60',
  },
];

const additionalServicesMock = [
  {
    title: 'Regular Polish on Hand',
    price: '$15'
  },
  {
    title: 'Regular Polish on Foot',
    price: '$20'
  },
  {
    title: 'Gel Polish on Hand',
    price: '$20',
  },
  {
    title: 'Gel Polish on Foot',
    price: '$28',
  },
  {
    title: 'French Polish',
    price: '$7',
  },
  {
    title: 'Shape Oval',
    price: '$7',
  },
  {
    title: 'Stiletto',
    price: '$7',
  },
  {
    title: 'Coffin',
    price: '$7',
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
    price: '$10',
  },
  {
    title: 'Soak Off without Service',
    price: '$15',
  },
];

const kidsMenuMock = [
  {
    title: 'Manicure',
    price: '$14',
  },
  {
    title: 'Pedicure',
    price: '$22',
  },
  {
    title: 'Regular Color Hand',
    price: '$8',
  },
  {
    title: 'Regular Color Foot',
    price: '$10',
  },
];

const waxingMock = [
  {
    title: 'Eyebrows',
    price: '$12',
  },

  {
    title: 'Upper Lip',
    price: '$8',
  },
  {
    title: 'Chin',
    price: '$10',
  },
  {
    title: 'Nose',
    price: '$8',
  },
  {
    title: 'Ears',
    price: '$10',
  },
  {
    title: 'Cheeks',
    price: '$10',
  },
  {
    title: 'SideBurns',
    price: '$10',
  },
  {
    title: 'Full Face',
    price: '$40',
  },
  {
    title: 'Half Arms',
    price: '$25',
  },
  {
    title: 'Full Arms',
    price: '$40',
  },
  {
    title: 'Under Arms',
    price: '$20',
  },
  {
    title: 'Bikini',
    price: '$30',
  },
  {
    title: 'Brazilian',
    price: '$50',
  },
  {
    title: 'Half Legs',
    price: '$35',
  },
  {
    title: 'Full Legs',
    price: '$55',
  },
  {
    title: 'Abdomen',
    price: '$25',
  },
  {
    title: 'Full Back',
    price: '$50',
  },
];

const Services = () => {
  const classes = useStyles();

  const renderService = (services) => 
    _.map(services, service => _.get(service, 'description') ? <Service {...service}/> 
    : (<div className={classes.serviceNameRow}>
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
