import React, { Component } from 'react'
import io from 'socket.io-client'
import './Chat.styl'
import Users from './components/Users.jsx'
import ChatMain from './components/ChatMain.jsx'

const socket = io('http://localhost:8080')

class Chat extends Component {
  constructor () {
    super()
    this.state = {
      messages: []
    }
  }
  componentDidMount () {
    socket.on('chat message', msg => {
      const { messages } = this.state
      messages.push(msg)
      this.setState({messages})
    })
  }
  sendMessage = message => {
    socket.emit('chat message', message)
  }
  render () {
    return (
      <div>
        <ChatMain messages={this.state.messages} sendMessage={this.sendMessage} />
        <Users />
      </div>
    )
  }
}
export default Chat
