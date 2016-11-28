// Handles all application errors so that they can be cleared easily from localStorage

import { ADD_USER_LOCATION_FAILED } from '../actions/locationSidebarActions'
import { RESET_ERRORS } from '../actions/errorActions';

const initialState = {

};

export function errors (state = initialState, action = {}) {
  switch (action.type) {
    case RESET_ERRORS: {
      let nextState = {}
      return nextState
    }
    case ADD_USER_LOCATION_FAILED:
      {
        let nextState = Object.assign({}, state, {
          addLocationFailed: action.payload
        })
        return nextState;
      }
    default:
      return state
  }
}
