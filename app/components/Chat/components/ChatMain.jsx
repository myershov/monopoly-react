import React, { Component } from 'react'
import './ChatMain.styl'

class ChatMain extends Component {
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
              <a href='#' className='nickname'>Віктор Морозов</a>
              <div className='message'>Lorem ipsum dolor sit</div>
            </li>
            <li className='user-line'>
              <div className='icon' />
              <a href='#' className='nickname'>Аліна Васильєва</a>
              <div className='message'>Ut enim ad minim veniam, quis nostrud exercitation ullamco</div>
            </li>
            <li className='user-line'>
              <div className='icon' />
              <a href='#' className='nickname'>Тетяна Антонова</a>
              <div className='message'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default ChatMain
