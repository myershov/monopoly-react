import React, { Component } from 'react'
import './Body.styl'

class Body extends Component {
  render () {
    return (
      <div className='monopoly-app'>
        <div className='monopoly-logo'>
          <div className='monopoly-logo-inner'>
            <img src='app/components/Type/Images/monopoly-brand.png' alt='Monopoly' />
          </div>
        </div>
        <div className='monopoly-game-selection'>
          <div className='selection-game'>
            <p> Standart game </p>
          </div>
          <div className='selection-money'>
            <p> 200000$ </p>
          </div>
          <div className='selection-dashboard'>
            <p> Dashboard size 15x9 </p>
          </div>
        </div>
      </div>
    )
  }
}
export default Body
