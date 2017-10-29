import React, { Component } from 'react'
import './Header.styl'

class Header extends Component {
  render () {
    return (
      <div>
        <div className='delphic'>Delphic</div>
        <ul>
          <li><a href='#contact'>Contact</a></li>
          <li><a href='#others'>Others</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a className='active' href='#home'>Home</a></li>
        </ul>
      </div>
    )
  }
}
export default Header
