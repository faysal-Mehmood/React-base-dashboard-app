import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Certificate from './component/Certificates';
import Heared from './component/layout/header';
function App() {
  return (
    <Router>
      <Heared />
      <Switch>
        <Route exect path="/">
          <Certificate />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
