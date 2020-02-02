import React from 'react';
import {Route , Switch} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';

import './App.css';

const Hats = ()=>(
  <div>
  <h1>Hats-page</h1>
  </div>
)

function App() {
  return (
    <div >
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route  path='/hats' component={Hats}/>
    </Switch>
    </div>
  );
}

export default App;
