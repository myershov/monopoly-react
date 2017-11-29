import React, { Component } from 'react'
import Header from './Header/Header.jsx'
import Body from './Body/Body.jsx'
import './Dashboard.styl'

class Dashboard extends Component {
  render () {
    return (
      <div className='monopoly-app'>
        <Header />
        <Body />
      </div>
    )
  }
}
export default Dashboard
