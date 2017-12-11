// import securityService from 'main/services/security.service'
import * as types from './actionTypes'

export function getMy () {
  return async dispatch => {
    try {
      dispatch({ type: types.SECURITY_GET_MY })
      dispatch({ type: types.SECURITY_GET_MY_SUCCESS, payload: {user: {test: true}} })
    } catch (err) {
      dispatch({ type: types.SECURITY_GET_MY_ERROR, payload: {err} })
    }
  }
}
