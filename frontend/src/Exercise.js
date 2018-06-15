import React, { Component } from 'react';

class Exercise extends Component {

  constructor(props) {
	  super(props);
	  this.setState({ selected: false});
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
