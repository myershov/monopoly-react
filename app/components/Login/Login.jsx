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
              <h2 className='form__text'>Реєстрація Профілю</h2>
              <input type='text' name='username' placeholder="Введіть ваше ім'я" />
              <input type='text' name='login' placeholder="Введіть ім'я гравця (Нікнейм)" />
              <input type='password' name='password' placeholder='Введіть адресу електронної пошти' />
              <fieldset>
                <legend>або увійдітьза допомогою:</legend>
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
