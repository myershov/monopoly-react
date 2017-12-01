import React, { Component } from 'react'
import GameBoardCell from './GameBoardCell/GameBoardCell.jsx'
import './GameBoard.styl'

class GameBoard extends Component {
  render () {
    const test = [{orientation: '', text: 'START', id: 0}, {orientation: 'gorizontal', text: 'first cell mueseum', id: 1}]
    return (
      <div className='gameboard'>
        <div className='top'>
          {test.map(i => <GameBoardCell {...i} />)}
          {test.map(i => <GameBoardCell {...i} />)}
        </div>
      </div>
    )
  }
}
export default GameBoard
