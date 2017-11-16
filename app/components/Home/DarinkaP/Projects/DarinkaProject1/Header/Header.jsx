import React, { Component } from 'react'
import './Header.styl'

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <div className='header-inner'>
            <div className='header-title'>
                <div className='logo'>
                    <img src={require('../Images/logo.png')} alt='Logo' />
                </div>
            </div>
            <div className='header-menu'>
                <ul className='menu'>
                    <li className='menu-item'>Products |</li>
                    <li className='menu-item'>Services |</li>
                    <li className='menu-item'>Contact</li>
                </ul>
            </div>
        </div>
    </div>
    )
  }
}
export default Header
