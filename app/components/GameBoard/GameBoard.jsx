import { GameBoardCell, CenterBlock } from './components'
import { gameboardService } from 'project-services'
import React, { Component } from 'react'
import './GameBoard.styl'

class GameBoard extends Component {
  state = {
    totalPlayers: 3,
    moveOfPlayer: 0,
    players: [
      {name: 'Dima', id: 0, currentPostions: 0},
      {name: 'My', id: 1, currentPostions: 0},
      {name: 'Vova', id: 2, currentPostions: 0}
    ],
    bottom: [],
    right: [],
    left: [],
    top: []
  }
  componentDidMount () {
    gameboardService().then(res => {
      this.setState(res)
    })
  }
  changeTipPositions = () => {
    let { players, moveOfPlayer, totalPlayers } = this.state
    let player = players[moveOfPlayer]
    const random = Math.floor((Math.random() * 6) + 1)
    const maxId = this.state.left[this.state.left.length - 1].id
    player.currentPostions = player.currentPostions + random
    if (player.currentPostions > maxId) {
      player.currentPostions -= maxId + 1
    }
    moveOfPlayer++
    if (moveOfPlayer === totalPlayers) {
      moveOfPlayer = 0
    }
    this.setState({players, moveOfPlayer})
  }
  render () {
    const renderCells = (i, key) => <GameBoardCell {...i} key={key} players={this.state.players} />
    return (
      <div className='wrapper'>
        <div className='gameboard'>
          <div className='top'>{this.state.top.map(renderCells)}</div>
          <div className='left'>{this.state.left.map(renderCells)}</div>
          <div className='center'>
            <CenterBlock changeTipPositions={this.changeTipPositions} />
          </div>
          <div className='right'>{this.state.right.map(renderCells)}</div>
          <div className='bottom'>{this.state.bottom.map(renderCells)}</div>
        </div>
      </div>
    )
  }
}
export default GameBoard
