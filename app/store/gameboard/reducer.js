import Immutable from 'seamless-immutable'
import * as types from './actionTypes'

const initialState = Immutable({
  gameboard: { top: [], right: [], bottom: [], left: [] },
  gameboardFetching: false
})

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case types.GET_STANDART_GAMEBOARD:
    return state.merge({
      gameboardFetching: true
    })
  case types.GET_STANDART_GAMEBOARD_SUCCESS:
    return state.merge({
      gameboard: action.payload.gameboard,
      gameboardFetching: false
    })
  case types.GET_STANDART_GAMEBOARD_ERROR:
    return state.merge({
      gameboard: { top: [], right: [], bottom: [], left: [] }
    })
  default:
    return state
  }
}
