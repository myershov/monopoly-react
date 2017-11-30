import React, { Component } from 'react'
import Body from './Body/Body.jsx'
import './GameBoard.styl'

class GameBoard extends Component {
  render () {
    return (
      <div className='monopoly-app'>
        <Body />
      </div>
    )
  }
}
export default GameBoard
