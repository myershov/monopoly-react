import React, { Component } from 'react'
import './Login.styl'

class Login extends Component {
  render () {
    return (
      <div id='login' className='form__login'>
        <form action='#' method='post'>
          <div className='form__wrap'>
            <img src='#' alt='logo monopoly' />
            <div className='form__body'>
              <h3 className='form__text'>Profile registration</h3>
              <input type='text' name='username' placeholder='Enter your login' />
              <input type='password' name='password' placeholder='Enter your password' />
              <fieldset>
                <button type='button' className='play-button'>Facebook</button>
                <button type='button' className='play-button'>Twitter</button>
              </fieldset>
              <div className='sub__btn'>
                <button type='submit' className='submit-button'>Join</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default Login
