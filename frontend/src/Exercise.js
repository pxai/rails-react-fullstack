import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

class Exercise extends Component {

  constructor(props) {
	  super(props);
  }

  render() {
	  const exercise = this.props.exercise;
    return (
		<div>
			<h3>Exercise: {exercise.name}</h3>
			<div><p>{exercise.description}</p></div>
		</div>
    );
  }
}

export default Exercise;
