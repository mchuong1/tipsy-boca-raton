import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  maintenanceOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark overlay
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure it is on top of everything
  },
  maintenanceMessage: {
    padding: '20px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
  },
}));

const Maintenance = () => {
  const classes = useStyles();

  return (
    <div className={classes.maintenanceOverlay}>
      <div className={classes.maintenanceMessage}>
        <h1>Maintenance Mode</h1>
        <p>Our site is currently under maintenance. Please check back later.</p>
      </div>
    </div>
  );
}

export default Maintenance;