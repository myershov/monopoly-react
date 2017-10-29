import React, { Component } from 'react'
import NavMenu from './NavMenu/NavMenu.jsx'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import Body from './Body/Body.jsx'
import './Project2.styl'

class Project2 extends Component {
  render () {
    return (
      <div>
        <Header />
        <NavMenu /><br />
        <Body />
        <Footer />
      </div>
    );
  }
}
export default Project2
