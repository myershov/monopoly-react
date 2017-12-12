import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.styl'

class Home extends Component {
  render () {
    return (
      <div id='home'>
        <Link to='/dashboard'>dashboard</Link><br /><br />
        <Link to='/login'>login</Link><br /><br />
        <Link to='/gameboard'>gameboard</Link><br /><br />
        <Link to='/type'>type</Link><br /><br />
        <Link to='/gamelist'>gamelist</Link><br /><br />
        <Link to='/chat'>chat</Link><br /><br />
      </div>
    )
  }
}
export default Home
