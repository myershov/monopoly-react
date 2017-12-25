import { listenerOnJournalChanges } from 'store/gameboard/actions'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Journal.styl'

class Journal extends Component {
  componentDidMount () {
    this.props.dispatch(listenerOnJournalChanges())
  }
  render () {
    return (
      <div className='game_panel-right'>
        {this.props.playerHistory.map((i, key) => (
          <div key={key}>
            <div className='new_message'>***</div>
            <div className='text'>{i}</div>
          </div>
        ))}
      </div>
    )
  }
}
Journal.propTypes = {
  playerHistory: PropTypes.array,
  dispatch: PropTypes.func
}
const mapStateToProps = state => ({
  playerHistory: state.gameboard.playerHistory
})
export default connect(mapStateToProps)(Journal)
