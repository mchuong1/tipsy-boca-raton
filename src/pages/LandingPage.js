import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  aboutUs: {
    backgroundColor: 'white',
  }
});

export default function LandingPage() {

  const classes = useStyles();

  return(
    <div>
      <Image 
        publicId='Tipsy Boca Raton/cover_girl'
        crop="scale" 
        width="auto"
        responsive
        fetchFormat="auto"
        responsiveUseBreakpoints="true"
      >
        <Transformation
          
        />
      </Image>
      {/* <div className={classes.aboutUs}>
        <Image publicId='Tipsy Boca Raton/pink_thin_brush_stroke' loading="lazy"/>
      </div> */}
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