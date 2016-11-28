export const RESET_ERRORS = 'RESET_ERRORS'

export function resetErrors () {
  return (dispatch, getState) => {
      dispatch({
        type: RESET_ERRORS,
        payload: {}
      });
    }
  }
