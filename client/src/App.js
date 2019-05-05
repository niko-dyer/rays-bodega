import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Works from './components/Works'
import WorkShow from './components/WorkShow'
import Shoes from './components/Shoes'
import Clothes from './components/Clothes'

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/works' component={Works} />
      <Route exact path='/works/:id' component={WorkShow} />
      <Route exact path='/shoes' component={Shoes} />
      <Route exact path='/clothes' component={Clothes} />
    </Switch>
    </div>
  );
}

export default App;
