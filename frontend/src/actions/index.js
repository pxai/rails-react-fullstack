import {get, getAll } from '../api'
export const GET_EXERCISES  = 'GET_EXERCISES'
export const GET_EXERCISE = 'GET_EXERCISE'


export function getExercises (exercises) {
    return {
      type: GET_EXERCISES,
      exercises
    }
  }

  export function getExercisesAsync (exercises) {
      return dispatch => (
          getAll().then(exercises => dispatch(getExercises(exercises)))
      )
    }

export function getExercise ( exercise ) {
  return {
    type: GET_EXERCISE,
    exercise
  }
}

export function getExerciseAsync (id) {
    return dispatch => (
        get(id).then(exercise => dispatch(getExercise(exercise)))
    )
  }

