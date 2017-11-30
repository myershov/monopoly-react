import React, { Component } from 'react'
import GameBoardCell from './GameBoardCell/GameBoardCell.jsx'
import './GameBoard.styl'

class GameBoard extends Component {
  render () {
    return (
      <div className='monopoly-app'>
        <GameBoardCell />
      </div>
    )
  }
}
export default GameBoard
