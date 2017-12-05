import React, { Component } from 'react'
import './Users.styl'

class Users extends Component {
  render () {
    const newArr = ['Аліна Васильєва', 'Даша Сніжн', 'Даша Сніжнasdasd', 'asdasdsadsadasd qweqwe']
    return (
      <div className='users-main'>
        <div className='users-header'>
          <div className='my-icon' />
          <div className='text'>
            My nickname
          </div>
        </div>
        <div className='users-body'>
          <div className='users-body-inner'>
            <div className='counter'><strong>{newArr.length} людей в чаті</strong></div>
            <ul className='user'>
              {newArr.map(i => <li><a href='#'>{i}</a></li>)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Users
