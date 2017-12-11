import { SmartAvatar } from 'project-components'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Users.styl'

class Users extends Component {
  render () {
    const newArr = [ 'Аліна Васильєва', 'Даша Сніжна', 'Віктор Морозов', 'Тетяна Антонова', 'Cтаніслав Васильченко', 'Віктор Степанко', 'Пупкіна Світлана', 'Ганна Сивун', 'Iван Нестерович' ]
    return (
      <div className='users-main'>
        <div className='users-header'>
          <div className='my-icon'><SmartAvatar /></div>
          <div className='text'>
            {this.props.myUser.username}
          </div>
        </div>
        <div className='users-body'>
          <div className='users-body-inner'>
            <div className='counter'><strong>{newArr.length} людей в чаті</strong></div>
            <ul className='user'>
              {newArr.map((i, key) => <li key={key}><SmartAvatar letters={i} /><a href='#'>{i}</a></li>)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
Users.propTypes = {
  myUser: PropTypes.object
}
const mapStateToProps = state => ({
  myUser: state.security.myUser
})
export default connect(mapStateToProps)(Users)
