import { usersService } from 'project-services'
import Signup from '.././Signup/Signup.jsx'
import React, { Component } from 'react'
import './Login.styl'

class Login extends Component {
  logIn = ({login, password}) => {
    login
    password
    usersService.login().then(res => {
      res
    })
  }
  render () {
    return (
      <div id='login' className='form__login'>
        <Signup title='Увійти' isAdditionalFieldsHidden submit={this.logIn} />
      </div>
    )
  }
}
export default Login
