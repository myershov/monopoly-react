import { submittedBuy, getConfirmationBeforeBuy } from 'store/gameboard/actions'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Journal.styl'

class Journal extends Component {
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
    const messages = [
      {name: 'my', text: 'Хід гравця my'}, {name: 'Dima', text: 'Хід гравця Dima'}, {name: 'Dima', text: 'Dima dgdfgdfg'}
    ]
    return (
      <div className='game_panel-right'>
        {messages.map((i, key) => (
          <div key={key}>
            <div className='new_message'>***</div>
            <div className='text'>{i.text}</div>
          </div>
        ))}
      </div>
    )
  }
}
Journal.propTypes = {
  dispatch: PropTypes.func
}
const mapStateToProps = state => ({
  isSubmitRequired: state.gameboard.isSubmitRequired,
  gameInfo: state.gameboard.gameInfo
})
export default connect(mapStateToProps)(Journal)
