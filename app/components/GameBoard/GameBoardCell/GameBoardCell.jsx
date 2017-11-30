import React, { Component } from 'react'
import './GameBoardCell.styl'

class GameBoardCell extends Component {
  render () {
    return (
      <div className='monopoly-app'>
        <div className='monopoly-logo'>
          <div className='monopoly-logo-inner'>
            <img src='app/components/Type/Images/monopoly-brand.png' alt='Monopoly' />
            <span>Gameboard subcomponent</span>
          </div>
        </div>
      </div>
    )
  }
}
export default GameBoardCell
