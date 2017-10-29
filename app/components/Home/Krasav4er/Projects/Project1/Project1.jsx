import React, { Component } from 'react'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import Body from './Body/Body.jsx'
import './Project1.styl'

class Project1 extends Component {
  render () {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}
export default Project1
