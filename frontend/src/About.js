import React, { Component } from 'react';
import './App.css';

class About extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">About</h1>
        </header>
        <p className="App-intro">
			Developed By <a href="https://github.com/pxai">Pello Altadill</a>
        </p>
      </div>
    );
  }
}

export default About;
