import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Works from './components/Works'
import WorkShow from './components/WorkShow'
import Shoes from './components/Shoes'
import Clothes from './components/Clothes'
import ShoeShow from './components/ShoeShow'
import ClothingShow from './components/ClothingShow'
import Login from './components/Login'
import NoMatch from './components/NoMatch'
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'
import WorkForm from './components/WorkForm'
import ShoeForm from './components/ShoeForm'
import ClothingForm from './components/ClothingForm'

function App() {
  return (
    <div className="App">
      <FetchUser>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/works' component={Works} />
          <ProtectedRoute exact path='/works/new' component={WorkForm} />
          <Route exact path='/works/:id' component={WorkShow} />
          <ProtectedRoute exact path='/works/:id/edit' component={WorkForm} />
          <Route exact path='/shoes' component={Shoes} />
          <ProtectedRoute exact path='/shoes/new' component={ShoeForm} />
          <Route exact path='/shoes/:id' component={ShoeShow} />
          <ProtectedRoute exact path='/shoes/:id/edit' component={ShoeForm} />
          <Route exact path='/clothes' component={Clothes} />
          <ProtectedRoute exact path='/clothes/new' component={ClothingForm} />
          <Route exact path='/clothes/:id' component={ClothingShow} />
          <ProtectedRoute exact path='/clothes/:id/edit' component={ClothingForm} />
          <Route exact path='/login' component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
    </div>
  );
}

export default App;
