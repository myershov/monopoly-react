import { GameBoardCell, CenterBlock } from './components'
import { gameboardService } from 'project-services'
import React, { Component } from 'react'
import io from 'socket.io-client'
import './GameBoard.styl'

const socket = io('http://localhost:8080')

class GameBoard extends Component {
  state = {
    totalPlayers: 2,
    moveOfPlayer: 0,
    players: [
      {name: 'Dima', id: 0, currentPostions: 0},
      {name: 'My', id: 1, currentPostions: 0}
    ]
  }
  componentDidMount () {
    gameboardService().then(res => {
      this.setState(res)
    })
    socket.on('set tip position', newInfo => {
      this.setState({moveOfPlayer: newInfo.moveOfPlayer, players: newInfo.players})
    })
  }
  changeTipPositions = () => {
    socket.emit('change tip position', this.state.moveOfPlayer)
  }
  render () {
    const renderCells = (i, key) => <GameBoardCell {...i} key={key} players={this.state.players} />
    const { top = [], right = [], bottom = [], left = [] } = this.state
    return (
      <div className='wrapper'>
        <div className='gameboard'>
          <div className='top'>{top.map(renderCells)}</div>
          <div className='left'>{left.map(renderCells)}</div>
          <div className='center'>
            <CenterBlock changeTipPositions={this.changeTipPositions} />
          </div>
          <div className='right'>{right.map(renderCells)}</div>
          <div className='bottom'>{bottom.map(renderCells)}</div>
        </div>
      </div>
    )
  }
}
export default GameBoard
