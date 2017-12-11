import { SmartAvatar } from 'project-components'
import { withRouter } from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Header.styl'

class Header extends Component {
  render () {
    return (
      <div className='monopoly-header'>
        {
          this.props.myUser.id
            ? (
              <div className='monopoly-header-inner'>
                <div className='header-menu'>
                  <div className='menu'>
                    <img className='icon' src='https://d30y9cdsu7xlg0.cloudfront.net/png/659805-200.png' />
                    <div className='text' onClick={() => this.props.history.push('/')}>МЕНЮ</div>
                  </div>
                </div>
                <SmartAvatar />
              </div>
            )
            : (
              <div className='monopoly-header-inner'>
                <div />
                <div className='header-user-form'>
                  <a href='#/login' className='sing-in'>Увійти</a>
                  <a href='#/signup' className='sing-up'>Реєстрація</a>
                  <a href='#' className='social-media-facebook'>
                    <img src='https://digiday.com/wp-content/themes/digiday/static/images/icon_social_facebook-white.svg' alt='Facebook' />
                  </a>
                  <a href='#' className='social-media-twitter'>
                    <img src='https://digiday.com/wp-content/themes/digiday/static/images/icon_social_twitter-white.svg' alt='Twitter' />
                  </a>
                </div>
              </div>
            )
        }
      </div>
    )
  }
}
Header.propTypes = {
  history: PropTypes.object,
  myUser: PropTypes.object
}
const mapStateToProps = state => ({
  myUser: state.security.myUser
})
export default withRouter(connect(mapStateToProps)(Header))
