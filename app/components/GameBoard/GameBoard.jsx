import { getGameboard, getPlayers, changeTipPositions, listenerOnNewTipPosition } from 'store/gameboard/actions'
import { GameBoardCell, CenterBlock } from './components'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './GameBoard.styl'

class GameBoard extends Component {
  componentDidMount () {
    this.props.dispatch(listenerOnNewTipPosition())
    this.props.dispatch(getGameboard())
    this.props.dispatch(getPlayers())
  }
  changeTipPositions = () => {
    this.props.dispatch(changeTipPositions())
  }
  render () {
    const renderCells = (i, key) => <GameBoardCell {...i} key={key} players={this.props.gameInfo.players} />
    const { top, right, bottom, left } = this.props.gameboard
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
GameBoard.propTypes = {
  gameboard: PropTypes.object,
  gameInfo: PropTypes.object,
  dispatch: PropTypes.func
}
const mapStateToProps = state => ({
  gameboard: state.gameboard.gameboard,
  gameInfo: state.gameboard.gameInfo
})
export default connect(mapStateToProps)(GameBoard)
