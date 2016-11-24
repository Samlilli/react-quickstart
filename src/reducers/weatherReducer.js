const initialState = {
  locations: []
};

import {
    GET_WEATHER_SUCCESS,
    GET_WEATHER_FAILED,
    ADD_USER_LOCATION_SUCCESS,
    ADD_USER_LOCATION_FAILED
} from '../actions/locationSidebarActions'

export function weather (state = initialState, action = {}) {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      let nextState = Object.assign({}, state, {
        location: action.payload.location,
        currentWeather: action.payload.current
      });
      return nextState;
    case GET_WEATHER_FAILED:
      return state
    case ADD_USER_LOCATION_SUCCESS:
      {
        let newLocation = Object.assign({}, action.payload)
        let storedLocations = state.locations
        storedLocations.push(newLocation)

        let nextState = Object.assign({}, state, {
          locations: storedLocations
        })
        return nextState;
      }
    default:
      return state
  }
}
