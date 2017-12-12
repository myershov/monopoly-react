import React, { Component } from 'react'
import './Body.styl'

class Body extends Component {
  render () {
    return (
      <div>
        <div className='gamelist-logo'>
          <div className='gamelist-logo-inner'>
            <img src='app/components/Gamelist/Images/gamelist-logo.png' alt='Monopoly' />
          </div>
          <div className='gamelist-logo-text'>
            <img src='app/components/Gamelist/Images/gamelist-text.png' alt='Monopoly' />
          </div>
          <div className='gamelist-logo-filter'>
            <span>Фільтр A-Z</span>
            <img src='app/components/Gamelist/Images/filter-arrow.png' alt='Monopoly' />
          </div>
        </div>
        <div className='gamelist-content'>
          <div className='gamelist-subcontent'>
            <div className='gamelist-subcontent__host'>
            </div>
            <div className='gamelist-subcontent__info'>
            </div>
            <div className='gamelist-subcontent__button'>
              <img src='app/components/Gamelist/Images/gamelist-play.png' alt='Monopoly' />
            </div>
          </div>
          <div className='gamelist-subcontent'>
            <div className='gamelist-subcontent__host'>
            </div>
            <div className='gamelist-subcontent__info'>
            </div>
            <div className='gamelist-subcontent__button'>
              <img src='app/components/Gamelist/Images/gamelist-gameinfo.png' alt='Monopoly' />
            </div>
          </div>
          <div className='gamelist-subcontent'>
            <div className='gamelist-subcontent__host'>
            </div>
            <div className='gamelist-subcontent__info'>
            </div>
            <div className='gamelist-subcontent__button'>
              <img src='app/components/Gamelist/Images/gamelist-play.png' alt='Monopoly' />
            </div>
          </div>
          <div className='gamelist-subcontent'>
            <div className='gamelist-subcontent__host'>
            </div>
            <div className='gamelist-subcontent__info'>
            </div>
            <div className='gamelist-subcontent__button'>
              <img src='app/components/Gamelist/Images/gamelist-lock.png' alt='Monopoly' />
            </div>
          </div>
        </div>
        <div className='gamelist-refresh'>
          <img src='app/components/Gamelist/Images/refresh-button.png' alt='Monopoly' />
        </div>
      </div>
    )
  }
}
export default Body
