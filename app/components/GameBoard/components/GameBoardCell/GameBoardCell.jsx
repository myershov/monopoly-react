import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './GameBoardCell.styl'

class GameBoardCell extends Component {
  getColor = () => {
    if (this.props.options && this.props.players.length > 0 && this.props.options.owner === this.props.players[0].name) {
      return ' green'
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
  options: PropTypes.object,
  players: PropTypes.array,
  id: PropTypes.number,
  text: PropTypes.any
}
export default GameBoardCell
