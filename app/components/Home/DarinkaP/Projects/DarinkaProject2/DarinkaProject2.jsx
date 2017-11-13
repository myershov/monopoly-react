import React, { Component } from 'react'
import Header from './Header/Header.jsx'
import Body from './Body/Body.jsx'
import './DarinkaProject2.styl'

class DarinkaProject2 extends Component {
  render () {
    return (
      <div className="monopoly-app">
        <Header />
		<Body />
	  </div>
    )
  }
}
export default DarinkaProject2