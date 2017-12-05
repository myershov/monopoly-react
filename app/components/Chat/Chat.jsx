import React, { Component } from 'react'
import io from 'socket.io-client'
import './Chat.styl'
import Users from './components/Users.jsx'

const socket = io('http://localhost:8080')

class Chat extends Component {
  constructor () {
    super()
    this.state = {
      messages: [],
      message: ''
    }
  }
  componentDidMount () {
    socket.on('chat message', msg => {
      const { messages } = this.state
      messages.push(msg)
      this.setState({messages})
    })
  }
  onChange = e => {
    this.setState({message: e.target.value})
  }
  sendMessage = () => {
    this.setState({message: ''})
    socket.emit('chat message', this.state.message)
  }
  render () {
    return (
      <div>
        <input type='text' onChange={this.onChange} value={this.state.message} />
        <button type='button' onClick={this.sendMessage}>Send message</button>
        <div>
          {this.state.messages.map((i, key) => <div key={key}>{i}</div>)}
        </div>
        <Users />
      </div>
    )
  }
}
export default Chat
