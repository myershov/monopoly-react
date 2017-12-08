import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Signup.styl'

class Signup extends Component {
  submit = () => {
    this.props.submit && this.props.submit({login: this.state.login, password: this.state.password})
  }
  render () {
    const inputs = [
      <input key='login' type='text' name='username' required placeholder="Введіть ім'я гравця (Нікнейм)" />,
      <input key='pass' type='password' name='password' required placeholder='Пароль' />
    ]
    if (!this.props.isAdditionalFieldsHidden) {
      inputs.push(
        <input key='name' type='text' name='name' required placeholder="Введіть ваше ім'я" />,
        <input key='email' type='email' name='email' required placeholder='Введіть адресу електронної пошти' />
      )
    }
    return (
      <div id='login' className='form__login'>
        <form action='#' method='post'>
          <img src='app/components/Type/Images/monopoly-brand.png' className='extended__logo' alt='extended logo' />
          <div className='form__wrap'>
            <img src='app/components/Login/Images/logo.png' className='logo' alt='logo monopoly' />
            <div className='form__body'>
              <h2 className='form__text'>{this.props.title || 'Реєстрація Профілю'}</h2>
              {inputs}
              <fieldset>
                <legend>або увійдіть за допомогою:</legend>
                <button type='button' className='play-button'>Facebook</button>
                <button type='button' className='play-button'>Twitter</button>
              </fieldset>
              <button type='submit' className='submit-button' onClick={this.submit}>Долучитися</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
Signup.propTypes = {
  isAdditionalFieldsHidden: PropTypes.bool,
  title: PropTypes.string,
  submit: PropTypes.func
}
export default Signup
