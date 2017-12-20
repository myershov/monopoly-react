import { submittedBuy, getConfirmationBeforeBuy } from 'store/gameboard/actions'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './CenterBlock.styl'

class CenterBlock extends Component {
  componentDidMount () {
    this.props.dispatch(getConfirmationBeforeBuy())
  }
  componentWillReceiveProps (newProp) {
    if (newProp.isSubmitRequired) {
      const res = window.confirm('Are you sure you want to buy?')
      this.props.dispatch(submittedBuy(res))
    }
  }
  render () {
    return (
      <div className='game_panel'>
        <div className='game_panel-left'>
          <img src='app/components/Type/Images/monopoly-brand.png' className='extended__logo' alt='extended logo' />
          <fieldset className='buttons_box'>
            <button className='controls_button' type='button' onClick={this.props.changeTipPositions}>Кинути кубики</button>
            <button className='controls_button' type='button'>Банк</button>
          </fieldset>
          <div className='players_field'>
            {this.props.gameInfo.players.map(i => (
              <div className='player' key={i.name}><div className='player_output'>{i.name} / {i.gold}$</div><div className='player_btn' >&gt;</div></div>
            ))}
          </div>
        </div>
        <div className='game_panel-right' />
      </div>
    )
  }
}
CenterBlock.propTypes = {
  changeTipPositions: PropTypes.func,
  isSubmitRequired: PropTypes.bool,
  gameInfo: PropTypes.object,
  dispatch: PropTypes.func
}
const mapStateToProps = state => ({
  isSubmitRequired: state.gameboard.isSubmitRequired,
  gameInfo: state.gameboard.gameInfo
})
export default connect(mapStateToProps)(CenterBlock)
