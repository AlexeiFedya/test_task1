import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import {HomePage} from '../../pages/HomePage'

function App() {
  return (
    <Switch>
          <Route path="/">
              <HomePage/>
          </Route>
              <Redirect to="/" />
      </Switch>
  );
}

export default App;
