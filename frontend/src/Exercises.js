import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getExercisesAsync } from './actions';
import './App.css';
import Exercise from './Exercise';

class Exercises extends Component {

  componentDidMount() {
  	this.props.getExercises();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Exercise</h1>
        </header>
		<div>
			{
				this.props.exercises.map((exercise) =>
					<Exercise exercise={exercise} key={exercise.id} />
				)
			}
		</div>
        <p className="App-intro">
			Developed By <a href="https://github.com/pxai">Pello Altadill</a>
        </p>
      </div>
    );
  }
}
function mapStateToProps (state, props) {
	  console.log('Exercise.js', state)
	    return {
			    exercises: state
				  }
}

function mapDispatchToProps (dispatch) {
	  return {
		      getExercises: () => dispatch(getExercisesAsync())
	  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Exercises);
