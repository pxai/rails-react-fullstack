import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Splash from './Splash';
import NotFound  from './NotFound';
import Exercises  from './Exercises';
import About  from './About';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
<div className="App">
        <div className="App-Header">
            <div className="lapp-header-title">
              <h1>Exercises</h1>
            </div>
            <div>
              <Link to="/exercises">Exercises</Link> | 
              <Link to="/about">About</Link> | 
            </div>
            <Switch>
              <Route exact path='/' component={Splash}/>  
              <Route exact path='/404' component={NotFound}/> 
              <Route exact path='/exercises' component={Exercises} />
              <Route exact path='/about' component={About} />
              <Route component={NotFound} />
          </Switch>
        </div>
      </div>

    );
  }
}

export default App;
