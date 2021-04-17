import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wrapper from './pages/Wrapper';
import Campaigns from './pages/Campaigns';
import CrowdFund from './pages/CrowdFund';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/campaigns' component={Campaigns} />
          <Route path='/getstarted' component={Wrapper} />
          <Route path='/crowdfund' component={CrowdFund} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
