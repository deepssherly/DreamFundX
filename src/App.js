import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Campaigns from './pages/Campaigns';
import Register from './pages/Register';
import CrowdFund from './pages/CrowdFund';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/campaigns' component={Campaigns} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/crowdfund' component={CrowdFund} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
