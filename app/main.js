import { HashRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import GameBoard from './components/GameBoard/GameBoard.jsx'
import Header from './components/Header/Header.jsx'
import Type from './components/Type/Type.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import ReactDOM from 'react-dom'
import React from 'react'
import './main.styl'

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route exact path='/gameboard' component={GameBoard} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/type' component={Type} />
    </div>
  </Router>,
  document.getElementById('root')
)
