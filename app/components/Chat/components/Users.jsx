import React, { Component } from 'react'
import './Users.styl'

class Users extends Component {
  render () {
    const newArr = [ 'Аліна Васильєва', 'Даша Сніжна', 'Віктор Морозов', 'Тетяна Антонова', 'Cтаніслав Васильченко', 'Віктор Степанко', 'Пупкіна Світлана', 'Ганна Сивун', 'Iван Нестерович' ]
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
              {newArr.map((i, key) => <li key={key}><a href='#'>{i}</a></li>)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Users
