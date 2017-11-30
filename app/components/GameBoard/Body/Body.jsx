import React, { Component } from 'react'
import './Body.styl'

class Body extends Component {
  render () {
    return (
      <div className='monopoly-app'>
        <img src='app/components/Type/Images/monopoly-brand.png' alt='Monopoly' />
        <p>GameBoard</p>
      </div>
    )
  }
}
export default Body
