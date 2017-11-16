import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.styl'

class Home extends Component {
  render () {
    return (
      <div id='home'>
        <Link to={'/html/Krasav4er'}>krasav4er</Link><br /><br />
        <Link to={'/html/DarinkaP'}>DarinkaP</Link><br /><br />
      </div>
    )
  }
}
export default Home
