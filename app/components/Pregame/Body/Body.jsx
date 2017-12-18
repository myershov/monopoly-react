import React, { Component } from 'react'
import './Body.styl'

class Body extends Component {
  render () {
    const newArr = ['Player 1', 'Player 2', 'Player 3']
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
            {newArr.map((player, key) => (
              <div key={key} className='player-acc'>
                <div className='icon' />
                <div className='player-info'>
                  <div className='player-counter'>{player}</div>
                  <div className='level-counter'>Level 5-<strong>host</strong></div>
                </div>
                <div className='levels'>
                  <div className='level' />
                  <div className='level' />
                  <div className='level' />
                  <div className='level' />
                </div>
                <div className='button-remove'>X</div>
              </div>
            ))}
          </div>
          <div className='button'>Почати Гру</div>
        </div>
      </div>
    )
  }
}
export default Body
