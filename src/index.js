import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CloudinaryContext } from 'cloudinary-react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CloudinaryContext cloudName='dgpijcm0x'>
        <App />
      </CloudinaryContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
