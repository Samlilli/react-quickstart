export const RESET_ERRORS = 'RESET_ERRORS'

export function resetErrors () {
  return (dispatch, getState) => {
      dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: {
          location: location,
          locationDetails: res.location,
          currentWeather: res.current
        }
      });
    }
  }
