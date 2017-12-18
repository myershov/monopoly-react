import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './CenterBlock.styl'

class CenterBlock extends Component {
  render () {
    return (
      <div className='game_panel'>
        <img src='app/components/Type/Images/monopoly-brand.png' className='extended__logo' alt='extended logo' />
        <fieldset className='buttons_box'>
          <button className='controls_button' type='button' onClick={this.props.changeTipPositions}>Кинути кубики</button>
          <button className='controls_button' type='button'>Банк</button>
          <button className='controls_button' type='button'>Журнал Гри</button>
        </fieldset>
        <div className='players_field'>
          {this.props.gameInfo.players.map(i => (
            <div className='player' key={i.name}><div className='player_output'>{i.name} / {i.gold}$</div><div className='player_btn' >&gt;</div></div>
          ))}
        </div>
      </div>
    )
  }
}
CenterBlock.propTypes = {
  changeTipPositions: PropTypes.func,
  gameInfo: PropTypes.object
}
const mapStateToProps = state => ({
  gameInfo: state.gameboard.gameInfo
})
export default connect(mapStateToProps)(CenterBlock)
