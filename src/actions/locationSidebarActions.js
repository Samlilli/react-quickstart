import 'whatwg-fetch';

const API = 'https://api.apixu.com/v1/current.json?key=1d8d9525ce8846059ad123008162411&q='

export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS'
export const GET_WEATHER_FAILED = 'GET_WEATHER_FAILED'

export function getWeather (location) {
  return (dispatch, getState) => {
    fetch(API + location)
    .then(function(response) {
      return response.json()
    }).then(function(res) {
      dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: {
          location: location,
          locationDetails: res.location,
          currentWeather: res.current
        }
      });
    }).catch(function(err) {
      dispatch({
        type: GET_WEATHER_FAILED,
        payload: 'Weather not found'
      });
    })
  };
}

export const ADD_USER_LOCATION_SUCCESS = 'ADD_USER_LOCATION_SUCCESS'
export const ADD_USER_LOCATION_FAILED = 'ADD_USER_LOCATION_FAILED'


export function addUserLocation (location) {
  return (dispatch, getState) => {
    fetch(API + location)
    .then(function(response) {
      return response.json()
    }).then(res => {
      if(res.error){
        dispatch({
          type: ADD_USER_LOCATION_FAILED,
          payload: res.error
        });
      } else {
        dispatch({
            type: ADD_USER_LOCATION_SUCCESS,
            payload: {
              location: location,
              locationDetails: res.location,
              currentWeather: res.current
            }
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: ADD_USER_LOCATION_FAILED,
        payload: err
      });
    })
  }
}
