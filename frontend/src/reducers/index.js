import { GET_EXERCISES } from '../actions'

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
