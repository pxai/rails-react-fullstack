import { GET_EXERCISES, GET_EXERCISE } from '../actions'

let initialExercises = [ ];

let reducer = (state = initialExercises, action) => {
    switch (action.type) {
        case GET_EXERCISES:         
          return action.exercises;
		default:
			return state;
	}
}

export default reducer;
