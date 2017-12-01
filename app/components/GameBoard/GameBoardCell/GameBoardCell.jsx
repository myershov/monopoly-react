import React, { Component } from 'react'
import './GameBoardCell.styl'

class GameBoardCell extends Component {
  // <div className='monopoly-logo'>
  //   <div className='monopoly-logo-inner'>
  //     <img src='app/components/Type/Images/monopoly-brand.png' alt='Monopoly' />
  //     <span>Gameboard subcomponent</span>
  //   </div>
  // </div>
  // <div className='time-left'>
  //   <div className='time'>
  //   </div>
  // </div>
  render () {
    return (
      <div key={this.props.key} className={'gameboard-cell ' + this.props.orientation || ''}>{this.props.text}</div>
    )
  }
}
export default GameBoardCell
