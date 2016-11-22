import 'whatwg-fetch';

export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS'
export const GET_WEATHER_FAILED = 'GET_WEATHER_FAILED'

export function getWeather (location = 'Brighton') {
  return (dispatch, getState) => {
    fetch('https://api.apixu.com/v1/current.json?key=a1e04779bd2a4ebb96f160346162111&q=' + location)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: json
      });
    }).catch(function(ex) {
      dispatch({
        type: GET_WEATHER_FAILED,
        payload: 'Weather not found'
      });
    })
  };
}

export const ADD_USER_LOCATION = 'ADD_USER_LOCATION'
export function addUserLocation (location) {
  return {
    type: ADD_USER_LOCATION,
    payload: location
  }
}
