import React, { Component } from 'react'
import './Body.styl'

class Body extends Component {
  render () {
    return (
      <div>
        <div className='pregame-logo'>
          <div className='pregame-logo-inner'>
            <img src='app/components/Pregame/Images/pregame-logo.png' alt='Monopoly' />
          </div>
          <div className='pregame-logo-text'>
            <p className='text'>Очікування Гравців</p>
          </div>
          <div className='game-info'>
            <div className='initial-capital'>Початковий капітал: 3000$<span>|</span></div>
            <div className='map-size'>Розмір Карти: 15х10<span>|</span></div>
            <div className='players-amount'>Відкрита для 5 гравців</div>
          </div>
          <div className='players-acc'>
            <div className='player-acc'>
              <div className='icon' />
              <div className='player-info'>
                <div className='player-counter' />
                <div className='level-counter' />
              </div>
              <div className='level' />
              <div className='button-delete' />
            </div>
            <div className='player-acc'>
              <div className='icon' />
              <div className='player-info'>
                <div className='player-counter' />
                <div className='level-counter' />
              </div>
              <div className='level' />
              <div className='button-delete' />
            </div>
          </div>
          <div className='button'>Почати Гру</div>
        </div>
      </div>
    )
  }
}
export default Body
