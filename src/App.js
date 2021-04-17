import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wrapper from './pages/Wrapper';
import Campaigns from './pages/Campaigns';
import CrowdFund from './pages/CrowdFund';
import AllThatDips from './details/foodsector/AllThatDips';
import FreshMenu from './details/foodsector/FreshMenu';
import FrozenBottle from './details/foodsector/FrozenBottle';
import HungerBox from './details/foodsector/HungerBox';
import NiteFoodie from './details/foodsector/NiteFoodie';
import OsomeFoods from './details/foodsector/OsomeFoods';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/campaigns' component={Campaigns} />
          <Route path='/getstarted' component={Wrapper} />
          <Route path='/crowdfund' component={CrowdFund} />
          {/* Details Page routes */}
          <Route path='/allthatdips' component={AllThatDips} />
          <Route path='/freshmenu' component={FreshMenu} />
          <Route path='/frozenbottle' component={FrozenBottle} />
          <Route path='/hungerbox' component={HungerBox} />
          <Route path='/nitefoodie' component={NiteFoodie} />
          <Route path='/osomefoods' component={OsomeFoods} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
