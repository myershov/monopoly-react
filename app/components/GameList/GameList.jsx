import React, { Component } from 'react'
import Body from './Body/Body.jsx'
import './GameList.styl'

class GameList extends Component {
  render () {
    return (
      <div className='monopoly-app'>
        <Body />
      </div>
    )
  }
}
export default GameList
