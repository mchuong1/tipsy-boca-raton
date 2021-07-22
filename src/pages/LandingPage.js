import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Cloudinary } from '@cloudinary/base';
import { AdvancedImage, responsive } from '@cloudinary/react';


const useStyles = makeStyles({
  aboutUs: {
    backgroundColor: 'white',
  },
  imageWrapper: {
    backgroundColor: 'black',
    
  }
});

export default function LandingPage() {

  const classes = useStyles();

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dgpijcm0x'
    }
  })

  const coverGirl = cld.image('Tipsy Boca Raton/cover_girl')
  
  return(
    <div>
      <div className={classes.imageWrapper}>
        <AdvancedImage style={{width: '100%', opacity: '40%'}} cldImg={coverGirl} plugins={[responsive(200)]} />
      </div>
      <div id="Our Services">
        Our Services
      </div>
      <div>
        Why Choose Us?
      </div>
      <div>
        Testimonials
      </div>
      <div>
        Contact
      </div>
      <div>
        Get In Touch
      </div>
    </div>
  )
}