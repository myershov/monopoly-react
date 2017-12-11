import * as types from './actionTypes'

let initialState = {
  myUserFetching: false,
  myUser: {test: true}
}
export default (state = initialState, action = {}) => {
  switch (action.type) {
  case types.SECURITY_GET_MY:
    return state.merge({
      myUserFetching: false
    })
  case types.SECURITY_GET_MY_SUCCESS:
    return state.merge({
      myUser: action.payload.user,
      myUserFetching: false
    })
  case types.SECURITY_GET_MY_ERROR:
    return state.merge({
      myUserFetching: false,
      myUser: {}
    })
  default:
    return state
  }
}
