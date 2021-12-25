import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

export default function AppContainer() {
  return (
    <Router>
      <Switch>
        <Route path='/path1'>
        </Route>
        <Route path='/path2'>
        </Route>
      </Switch>
    </Router>
  );
}
