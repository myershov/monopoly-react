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
              <div className='message'>Duis aute irure dolor.</div>
            </li>
            <li className='user-line'>
              <div className='icon' />
              <a href='#' className='nickname'>Аліна Васильєва</a>
              <div className='message'>Duis aute irure dolor.</div>
            </li>
            <li className='user-line'>
              <div className='icon' />
              <a href='#' className='nickname'>Тетяна Антонова</a>
              <div className='message'>Duis aute irure dolor.</div>
            </li>
            <li className='user-line'>
              <div className='icon' />
              <a href='#' className='nickname'>Даша Сніжна</a>
              <div className='message'>Duis aute irure dolor.</div>
            </li>
            <li className='user-line'>
              <div className='icon' />
              <a href='#' className='nickname'>Cтаніслав Васильченко</a>
              <div className='message'>Duis aute irure dolor.</div>
            </li>
            <li className='user-line'>
              <div className='icon' />
              <a href='#' className='nickname'>Тетяна Антонова</a>
              <div className='message'>Duis aute irure dolor.</div>
            </li>
            <li className='user-line'>
              <div className='icon' />
              <a href='#' className='nickname'>Віктор Морозов</a>
              <div className='message'>Duis aute irure dolor.</div>
            </li>
            <li className='user-line'>
              <div className='icon' />
              <a href='#' className='nickname'>Iван Нестерович</a>
              <div className='message'>Duis aute irure dolor..</div>
            </li>
            <li className='user-line'>
              <div className='icon' />
              <a href='#' className='nickname'>Пупкіна Світлана</a>
              <div className='message'>Duis aute irure dolor.</div>
            </li>
            <li className='user-line'>
              <div className='icon' />
              <a href='#' className='nickname'>Ганна Сивун</a>
              <div className='message'>Duis aute irure dolor.</div>
            </li>
          </ul>
          <div className='message-line'>
            <div className='user-icon' />
            <div className='users-message' />
            <div className='button'>Відправити</div>
          </div>
        </div>
      </div>
    )
  }
}
export default ChatMain
