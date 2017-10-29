import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.styl'

class Header extends Component {
  render () {
    return (
      <div className='block-header'>
        <div className='block-header-logo'>
          <Link to={'/html/Krasav4er/project2'}>
            <div className='block-header-logo-main-text'>Calculator</div>
            <div className='block-header-logo-secondary-text'>for calculating</div>
          </Link>
        </div>
        <div className='block-header-title'>
          Calculator for solving quadratic equations
        </div>
      </div>
    )
  }
}
export default Header
