import React from 'react';
import { makeStyles, TextField, Paper, Button, Snackbar, IconButton } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CloseIcon from '@material-ui/icons/Close';
import { sendGetInTouchEmail } from '../service/emailService';

const useStyles = makeStyles({
  root: {
    padding: '20px',
    backgroundColor: '#E5E5E5',
  },
  input: {
    width: '100%',
    marginBottom: '10px',
    '& div': {
      backgroundColor: 'white',
    },
  },
  primary: {
    backgroundColor: '#FC5C9C',
    color: 'white',
  },
  form: {},
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
    .matches(phoneRegExp, 'Phone Number is invalid Ex 1234567890, 123-456-7890'),
  email: yup
    .string('Enter your Email.')
    .email('Email must be a valid Email')
    .required('Email is required.'),
  message: yup.string('Enter your Message.').required('Message is required.'),
});

const GetInTouch = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hasError, setError] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (values) => {
    setError(false);
    try{
      await sendGetInTouchEmail(values);
      setOpen(true);
    }
    catch(error){
      setError(true);
      console.log(error);
    }
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
    onSubmit: (values) => handleSubmit(values).then(formik.resetForm()),
  });

  return (
    <div id='getInTouch-container' style={{ padding: '20px' }}>
      <Paper classes={{ root: classes.root }}>
        <h1>Get In Touch</h1>
        <p>
          Have any questions? Feel free to use the contact form below to get in
          touch with us. We will answer you as soon as possible!
        </p>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <TextField
            classes={{ root: classes.input }}
            variant='outlined'
            id='firstName'
            name='firstName'
            label='First Name'
            size='small'
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
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
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
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
          <TextField
            classes={{ root: classes.input }}
            variant='outlined'
            id='message'
            name='message'
            label='Message'
            size='small'
            multiline
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
          <Button
            variant='contained'
            type='submit'
            classes={{ root: classes.primary }}
          >
            Submit
          </Button>
        </form>
      </Paper>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={10000}
        onClose={handleClose}
        message={!hasError ? "Email Sent Successfully!" : "Something went wrong :( Please contact Tipsy Nailbar Boca Raton."}
        action={
          <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
};

export default GetInTouch;
