import React, { Component } from 'react';
import {BrowserRouter as Router, Route, withRouter, Switch } from 'react-router-dom'
import {TrailerDetails, TrailerList} from './container'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Switch>
                  <Route path='/' exact component={TrailerList}/>
                   <Route path='/Details'  component={TrailerDetails}/>
              </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
