import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './GameBoardCell.styl'

class GameBoardCell extends Component {
  getColor = () => {
    const player = this.props.players.find(player => player.owns[this.props.id])
    return player ? ` busy-cell-player${player.id}` : ''
  }
  render () {
    return (
      <div key={this.props.id} className={('gameboard-cell ' + this.props.orientation || '') + this.getColor()}>
        <h4>{this.props.text}</h4>
        {this.props.players.map(player => this.props.id === player.currentPostions && <div key={player.id} className={'player' + player.id} />)}
      </div>
    )
  }
}
GameBoardCell.propTypes = {
  orientation: PropTypes.string,
  players: PropTypes.array,
  id: PropTypes.number,
  text: PropTypes.any
}
export default GameBoardCell
