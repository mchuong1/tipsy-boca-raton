import React from 'react';
import { Divider, makeStyles, Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CoverGirl from '../components/CoverGirl';

const useStyles = makeStyles({
  root: {},
  container: {
    position: 'absolute',
    top: '0',
    color: 'white',
    padding: '20px',
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
  primary: {
    backgroundColor: '#FC5C9C',
    color: 'white',
  },
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  firstName: yup
    .string('Enter your First Name.')
    .required('First Name is required.'),
  lastName: yup
    .string('Enter your Last Name.')
    .required('Last Name is required.'),
  phoneNumber: yup
    .string('Enter your Phone Number.')
    .required('Phone Number is required.')
    .matches(
      phoneRegExp,
      'Phone Number is invalid Ex 1234567890, 123-456-7890',
    ),
  email: yup
    .string('Enter your Email.')
    .email('Email must be a valid Email')
    .required('Email is required.'),
  message: yup.string('Enter your Message.').required('Message is required.'),
});

const Newsletter = () => {
  const classes = useStyles();

  const handleSubmit = async (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  return (
    <div className={classes.root}>
      <CoverGirl>
        <div className={classes.container}>
          <h1 style={{ marginBottom: 0 }}>Newsletter</h1>
          <Divider classes={{ root: classes.divider }} />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <form>
            <TextField
              classes={{ root: classes.input }}
              variant='outlined'
              id='firstName'
              name='firstName'
              label='First Name'
              size='small'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              classes={{ root: classes.input }}
              variant='outlined'
              id='lastName'
              name='lastName'
              label='Last Name'
              size='small'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
              classes={{ root: classes.input }}
              variant='outlined'
              id='phoneNumber'
              name='phoneNumber'
              label='Phone Number'
              size='small'
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />
            <TextField
              classes={{ root: classes.input }}
              variant='outlined'
              id='email'
              name='email'
              label='Email'
              size='small'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <Button
              variant='contained'
              type='submit'
              classes={{ root: classes.primary }}
            >
              Submit
            </Button>
          </form>
        </div>
      </CoverGirl>
    </div>
  );
};

export default Newsletter;
