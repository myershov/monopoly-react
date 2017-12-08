import React, { Component } from 'react'
import './Login.styl'

class Login extends Component {
  render () {
    return (
      <div id='login' className='form__login'>
        <form action='#' method='post'>
          <img src='app/components/Type/Images/monopoly-brand.png' className='extended__logo' alt='extended logo' />
          <div className='form__wrap'>
            <img src='app/components/Login/Images/logo.png' className='logo' alt='logo monopoly' />
            <div className='form__body'>
              <h2 className='form__text'>Увійти</h2>
              <input type='text' name='username' required placeholder="Введіть ім'я гравця (Логін)" />
              <input type='text' name='password' required placeholder='Введіть пароль' />
              <fieldset>
                <legend>або увійдіть за допомогою:</legend>
                <button type='button' className='play-button'>Facebook</button>
                <button type='button' className='play-button'>Twitter</button>
              </fieldset>
              <button type='submit' className='submit-button'>Долучитися</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
export default Login
