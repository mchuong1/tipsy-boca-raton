import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div data-test="component-app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>      
    </div>
  );
}

export default App;
