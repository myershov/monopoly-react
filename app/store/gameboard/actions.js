import { gameboardService } from 'project-services'
import * as types from './actionTypes'

export const getGameboard = () => {
  return dispatch => {
    return new Promise(resolve => {
      try {
        dispatch({ type: types.GET_STANDART_GAMEBOARD })
        gameboardService().then(gameboard => {
          dispatch({ type: types.GET_STANDART_GAMEBOARD_SUCCESS, payload: {gameboard} })
          resolve()
        })
      } catch (err) {
        dispatch({ type: types.GET_STANDART_GAMEBOARD_ERROR })
        resolve()
      }
    })
  }
}
