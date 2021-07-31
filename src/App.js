import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import OnlineBooking from './pages/OnlineBooking';
import Newsletter from './pages/Newsletter';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div data-test="component-app">
      <Switch>
        <ScrollToTop />
        <Navbar />
        <Route exact path="/" component={LandingPage} />
        <Route path="/About" component={AboutUs} />
        <Route path="/Service" component={Services} />
        <Route path="/OnlineBooking" component={OnlineBooking} />
        <Route path="/Newsletter" component={Newsletter} />
      </Switch>
      <Footer />      
    </div>
  );
}

export default App;
