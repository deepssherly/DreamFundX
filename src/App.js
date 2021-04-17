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
import Finly from './details/fintech/Finly';
import Refrens from './details/fintech/Refrens';
import Kredx from './details/fintech/Kredx';
import Instamojo from './details/fintech/Instamojo';
import Lendingkart from './details/fintech/Lendingkart';
import Khatabook from './details/fintech/Khatabook';


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
          <Route path='/finly' component={Finly} />
          <Route path='/refrens' component={Refrens} />
          <Route path='/kredx' component={Kredx} />
          <Route path='/instamojo' component={Instamojo} />
          <Route path='/lendingkart' component={Lendingkart} />
          <Route path='/khatabook' component={Khatabook} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
