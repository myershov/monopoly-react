import { usersService } from 'project-services'
import Signup from '.././Signup/Signup.jsx'
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './Login.styl'

class Login extends Component {
  logIn = body => {
    usersService.login(body).then(user => {
      if (user && user.id >= 0) {
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
// Login.propTypes = {
//   router: PropTypes.object
// }
export default Login
