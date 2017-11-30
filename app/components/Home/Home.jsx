import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Home.styl'

class Home extends Component {
  render () {
    return (
      <div id='home'>
        <Link to={'/dashboard'}>dashboard</Link><br /><br />
<<<<<<< HEAD
        <Link to={'/login'}>login</Link><br /><br />
=======
        <Link to={'/dashboard/type'}>type</Link><br /><br />
>>>>>>> 489704707b3c5e75768e61d459492b3f3eb00929
      </div>
    )
  }
}
export default Home
