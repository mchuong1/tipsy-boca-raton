import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div data-test="component-app">
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>      
    </div>
  );
}

export default App;
