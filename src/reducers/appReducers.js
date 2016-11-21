import { GET_WEATHER_SUCCESS, GET_WEATHER_FAILED } from '../actions/appActions'

export function weather (state = null, action) {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      return action.payload
    case GET_WEATHER_FAILED:
      return state
    default:
      return state
  }
}
