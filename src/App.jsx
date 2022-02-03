import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './Home';
import List from './list/List';
import './assets/styles/reset.css';
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home}></Route>
          <Route path="/list" component={List}></Route>
          <Redirect path="/" to="/home" />
        
      </Switch >
    );
  }
}

export default App;