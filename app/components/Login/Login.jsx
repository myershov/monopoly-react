import React, { Component } from 'react'
import Signup from '.././Signup/Signup.jsx'
import './Login.styl'

class Login extends Component {
  logIn = (login, password) => {

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
