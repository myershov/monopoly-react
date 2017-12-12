import { SmartAvatar } from 'project-components'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './ChatMain.styl'

class ChatMain extends Component {
  constructor () {
    super()
    this.state = {
      message: ''
    }
  }
  onChange = e => {
    this.setState({message: e.target.value})
  }
  sendMessage = () => {
    this.props.sendMessage(this.state.message)
    this.setState({message: ''})
  }
  render () {
    return (
      <div className='chatmain-main'>
        <div className='chatmain-header'>
          Чат
        </div>
        <div className='chatmain-body'>
          <ul className='chat-list'>
            <li className='user-line'>
              <div className='icon' />
              <a href='#' className='nickname'><SmartAvatar letters='Віктор Морозов' /></a>
              <div className='message'>Duis aute irure dolor.</div>
            </li>
            <li className='user-line'>
              <div className='icon' />
              <a href='#' className='nickname'><SmartAvatar letters='Аліна фівфів' /></a>
              <div className='message'>Duis aute irure dolor.</div>
            </li>
            <li className='user-line'>
              <div className='icon' />
              <a href='#' className='nickname'><SmartAvatar letters='Тетяна Антонова' /></a>
              <div className='message'>Duis aute irure dolor.</div>
            </li>
            {this.props.messages.map((i, key) => (
              <li key={key} className='user-line'>
                <div className='icon'><SmartAvatar /></div>
                <a href='#' className='nickname'>{this.props.myUser.username}</a>
                <div className='message'>{i}</div>
              </li>
            ))}
          </ul>
          <div className='message-line'>
            <div className='user-icon'><SmartAvatar /></div>
            <input type='message' className='users-message' value={this.state.message} onChange={this.onChange} />
            <div className='button' onClick={this.sendMessage}>Відправити</div>
          </div>
        </div>
      </div>
    )
  }
}
ChatMain.propTypes = {
  sendMessage: PropTypes.func,
  messages: PropTypes.array,
  myUser: PropTypes.object
}
const mapStateToProps = state => ({
  myUser: state.security.myUser
})
export default connect(mapStateToProps)(ChatMain)
