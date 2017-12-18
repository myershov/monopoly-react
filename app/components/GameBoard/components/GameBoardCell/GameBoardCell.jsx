import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './GameBoardCell.styl'

class GameBoardCell extends Component {
  getColor = () => {
    for (let i = 0, l = this.props.players.length; i < l; i++) {
      const owns = this.props.players[i].owns[this.props.id]
      if (owns && i === 0) {
        return ' red'
      }
      if (owns && i === 1) {
        return ' green'
      }
    }
    return ''
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
