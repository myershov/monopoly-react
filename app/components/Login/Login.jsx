import { getMy } from 'store/security/actions'
import Signup from '.././Signup/Signup.jsx'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Login.styl'

class Login extends Component {
  logIn = body => {
    this.props.dispatch(getMy(body)).then(() => {
      if (this.props.myUser.id >= 0) {
        // this.props.router.push(`/dashboard`)
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
  // router: PropTypes.object,
  dispatch: PropTypes.func,
  myUser: PropTypes.object
}
const mapStateToProps = state => ({
  myUser: state.security.myUser
})
export default connect(mapStateToProps)(Login)
