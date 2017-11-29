import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.styl'

class Home extends Component {
  render () {
    return (
      <div id='home'>
        <Link to={'/dashboard'}>dashboard</Link><br /><br />
      </div>
    )
  }
}
export default Home
