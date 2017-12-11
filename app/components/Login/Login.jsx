import { getMy } from 'store/security/actions'
import Signup from '.././Signup/Signup.jsx'
import { withRouter } from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Login.styl'

class Login extends Component {
  logIn = body => {
    this.props.dispatch(getMy(body)).then(() => {
      if (this.props.myUser.id >= 0) {
        this.props.history.push('/dashboard')
        localStorage.setItem('myUser', JSON.stringify(this.props.myUser))
      }
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
Login.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func,
  myUser: PropTypes.object
}
const mapStateToProps = state => ({
  myUser: state.security.myUser
})
export default withRouter(connect(mapStateToProps)(Login))
