import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Works from './components/Works'
import Shoes from './components/Shoes'
import Clothes from './components/Clothes'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/works' component={Works} />
      <Route exact path='/shoes' component={Shoes} />
      <Route exact path='/clothes' component={Clothes} />
    </div>
  );
}

export default App;
