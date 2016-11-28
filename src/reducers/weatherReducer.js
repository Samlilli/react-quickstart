const initialState = {
  locations: []
};

import {
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAILED,
    ADD_USER_LOCATION_SUCCESS,
    ADD_USER_LOCATION_FAILED,
    REMOVE_USER_LOCATION_SUCCESS
} from '../actions/locationSidebarActions'

export function weather (state = initialState, action = {}) {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:

      let nextState = Object.assign({}, state, {
        locations: action.payload.locations
      })

      return nextState;
    case GET_WEATHER_FAILED:
      return state
    case ADD_USER_LOCATION_SUCCESS:
      {
        let nextState = Object.assign({}, state, {
          locations: action.payload.locations
        })
        return nextState;
      }
    case REMOVE_USER_LOCATION_SUCCESS:
      {
        let nextState = Object.assign({}, state, {
          locations: action.payload.locations
        })
        return nextState
      }
    default:
      return state
  }
}
